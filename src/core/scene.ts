import * as THREE from 'three';
import { GAME } from '../constants';

export class SceneBuilder {
  private walls: THREE.Mesh[] = [];
  private spawnPoints: THREE.Vector3[] = [];
  private enemySpawnPoints: THREE.Vector3[] = [];

  build(scene: THREE.Scene) {
    // Floor
    const floorGeo = new THREE.PlaneGeometry(GAME.WORLD_SIZE * 2, GAME.WORLD_SIZE * 2);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.9 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    floor.userData.isFloor = true;
    scene.add(floor);

    // Grid lines on floor
    const grid = new THREE.GridHelper(GAME.WORLD_SIZE * 2, 40, 0x444444, 0x333333);
    grid.position.y = 0.01;
    scene.add(grid);

    // Lighting
    const ambient = new THREE.AmbientLight(0x303040, 0.4);
    scene.add(ambient);

    // Room definitions: [centerX, centerZ, width, depth]
    const rooms: [number, number, number, number][] = [
      [0, 0, 12, 12],      // Central arena
      [-18, 0, 8, 8],      // West room
      [18, 0, 8, 8],       // East room
      [0, -18, 8, 8],      // South room
      [0, 18, 10, 10],     // North room (larger)
    ];

    const wallMat = new THREE.MeshStandardMaterial({ color: 0x556677, roughness: 0.7 });
    const h = GAME.WALL_HEIGHT;
    const t = 0.4; // wall thickness

    for (const [cx, cz, w, d] of rooms) {
      const hw = w / 2, hd = d / 2;

      // 4 walls per room with gaps for corridors
      // North wall
      if (cz + hd < GAME.WORLD_SIZE) {
        this.addWall(scene, wallMat, cx - hw / 2 - t, h / 2, cz + hd, hw - 1, h, t);
        this.addWall(scene, wallMat, cx + hw / 2 + t, h / 2, cz + hd, hw - 1, h, t);
      }
      // South wall
      if (cz - hd > -GAME.WORLD_SIZE) {
        this.addWall(scene, wallMat, cx - hw / 2 - t, h / 2, cz - hd, hw - 1, h, t);
        this.addWall(scene, wallMat, cx + hw / 2 + t, h / 2, cz - hd, hw - 1, h, t);
      }
      // East wall
      this.addWall(scene, wallMat, cx + hw, h / 2, cz - hd / 2 - t, t, h, hd - 1);
      this.addWall(scene, wallMat, cx + hw, h / 2, cz + hd / 2 + t, t, h, hd - 1);
      // West wall
      this.addWall(scene, wallMat, cx - hw, h / 2, cz - hd / 2 - t, t, h, hd - 1);
      this.addWall(scene, wallMat, cx - hw, h / 2, cz + hd / 2 + t, t, h, hd - 1);

      // Room light
      const light = new THREE.PointLight(0xffddaa, 1.5, w * 2);
      light.position.set(cx, h - 0.5, cz);
      light.castShadow = true;
      scene.add(light);

      // Spawn points
      this.spawnPoints.push(new THREE.Vector3(cx, 0, cz));
      this.enemySpawnPoints.push(
        new THREE.Vector3(cx + hw * 0.3, 0, cz + hd * 0.3),
        new THREE.Vector3(cx - hw * 0.3, 0, cz - hd * 0.3)
      );
    }

    // Outer boundary walls
    const s = GAME.WORLD_SIZE;
    this.addWall(scene, wallMat, 0, h / 2, s, s * 2, h, t);
    this.addWall(scene, wallMat, 0, h / 2, -s, s * 2, h, t);
    this.addWall(scene, wallMat, s, h / 2, 0, t, h, s * 2);
    this.addWall(scene, wallMat, -s, h / 2, 0, t, h, s * 2);

    // Ceiling hint: fog
    scene.fog = new THREE.Fog(0x1a1a2e, 15, GAME.FAR_CLIP * 0.6);
    scene.background = new THREE.Color(0x1a1a2e);
  }

  private addWall(scene: THREE.Scene, mat: THREE.Material, x: number, y: number, z: number, w: number, h: number, d: number) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData.isWall = true;
    scene.add(mesh);
    this.walls.push(mesh);
  }

  getWalls(): THREE.Mesh[] { return this.walls; }
  getSpawnPoints(): THREE.Vector3[] { return this.spawnPoints; }
  getEnemySpawnPoints(): THREE.Vector3[] { return this.enemySpawnPoints; }
}
