import * as THREE from 'three';
import { GAME } from '../constants';

export class SceneBuilder {
  private walls: THREE.Mesh[] = [];
  private spawnPoints: THREE.Vector3[] = [];
  private enemySpawnPoints: THREE.Vector3[] = [];

  build(scene: THREE.Scene) {
    // Floor — lighter concrete tone
    const floorGeo = new THREE.PlaneGeometry(GAME.WORLD_SIZE * 2, GAME.WORLD_SIZE * 2);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x5a5a5a, roughness: 0.8 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    floor.userData.isFloor = true;
    scene.add(floor);

    // Grid lines on floor — more visible
    const grid = new THREE.GridHelper(GAME.WORLD_SIZE * 2, 40, 0x777777, 0x555555);
    grid.position.y = 0.01;
    scene.add(grid);

    // Lighting — bright enough to see!
    const ambient = new THREE.AmbientLight(0x8899bb, 1.2);
    scene.add(ambient);

    // Directional light (sun-like) for overall visibility
    const dirLight = new THREE.DirectionalLight(0xffeedd, 1.0);
    dirLight.position.set(10, 20, 10);
    dirLight.castShadow = true;
    scene.add(dirLight);

    // Hemisphere light for natural feel
    const hemi = new THREE.HemisphereLight(0xaaccff, 0x445566, 0.8);
    scene.add(hemi);

    // Room definitions: [centerX, centerZ, width, depth]
    const rooms: [number, number, number, number][] = [
      [0, 0, 12, 12],      // Central arena
      [-18, 0, 8, 8],      // West room
      [18, 0, 8, 8],       // East room
      [0, -18, 8, 8],      // South room
      [0, 18, 10, 10],     // North room (larger)
    ];

    const wallMat = new THREE.MeshStandardMaterial({ color: 0x8899aa, roughness: 0.6 });
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

      // Room light — brighter, wider range
      const light = new THREE.PointLight(0xffeedd, 3.0, w * 4);
      light.position.set(cx, h - 0.3, cz);
      light.castShadow = true;
      scene.add(light);

      // Secondary fill light per room
      const fill = new THREE.PointLight(0xaabbff, 1.0, w * 3);
      fill.position.set(cx, h * 0.5, cz);
      scene.add(fill);

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

    // Subtle fog — don't eat all the light
    scene.fog = new THREE.Fog(0x334455, 40, GAME.FAR_CLIP * 0.8);
    scene.background = new THREE.Color(0x334455);
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
