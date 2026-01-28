import * as THREE from 'three';
import { GAME } from '../constants';
import { TextureFactory } from './textures';

export class SceneBuilder {
  private walls: THREE.Mesh[] = [];
  private spawnPoints: THREE.Vector3[] = [];
  private enemySpawnPoints: THREE.Vector3[] = [];

  build(scene: THREE.Scene) {
    const brickTex = TextureFactory.brick();
    const concreteTex = TextureFactory.concrete();
    const ceilingTex = TextureFactory.ceiling();
    const metalTex = TextureFactory.metal();
    const crateTex = TextureFactory.crate();

    // === FLOOR ===
    const floorGeo = new THREE.PlaneGeometry(GAME.WORLD_SIZE * 2, GAME.WORLD_SIZE * 2);
    const floorMat = new THREE.MeshStandardMaterial({ map: concreteTex, roughness: 0.85, metalness: 0.05 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    floor.userData.isFloor = true;
    scene.add(floor);

    // === LIGHTING ===
    const ambient = new THREE.AmbientLight(0x8899bb, 0.8);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffeedd, 0.9);
    dirLight.position.set(15, 25, 10);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.set(2048, 2048);
    dirLight.shadow.camera.near = 1;
    dirLight.shadow.camera.far = 80;
    dirLight.shadow.camera.left = -40;
    dirLight.shadow.camera.right = 40;
    dirLight.shadow.camera.top = 40;
    dirLight.shadow.camera.bottom = -40;
    scene.add(dirLight);

    const hemi = new THREE.HemisphereLight(0xaaccff, 0x445544, 0.6);
    scene.add(hemi);

    // === ROOMS ===
    const rooms: [number, number, number, number][] = [
      [0, 0, 14, 14],       // Central arena (bigger)
      [-20, 0, 9, 9],       // West room
      [20, 0, 9, 9],        // East room
      [0, -20, 9, 9],       // South room
      [0, 20, 11, 11],      // North room (larger)
    ];

    const h = GAME.WALL_HEIGHT;
    const t = 0.5;

    const wallMat = new THREE.MeshStandardMaterial({ map: brickTex, roughness: 0.75, metalness: 0.02 });
    const ceilMat = new THREE.MeshStandardMaterial({ map: ceilingTex, roughness: 0.9 });

    for (const [cx, cz, w, d] of rooms) {
      const hw = w / 2, hd = d / 2;

      // Room walls with doorway gaps
      // North wall
      if (cz + hd < GAME.WORLD_SIZE) {
        this.addWall(scene, wallMat, cx - hw / 2 - 1, h / 2, cz + hd, hw - 2, h, t);
        this.addWall(scene, wallMat, cx + hw / 2 + 1, h / 2, cz + hd, hw - 2, h, t);
      }
      // South wall
      if (cz - hd > -GAME.WORLD_SIZE) {
        this.addWall(scene, wallMat, cx - hw / 2 - 1, h / 2, cz - hd, hw - 2, h, t);
        this.addWall(scene, wallMat, cx + hw / 2 + 1, h / 2, cz - hd, hw - 2, h, t);
      }
      // East wall
      this.addWall(scene, wallMat, cx + hw, h / 2, cz - hd / 2 - 1, t, h, hd - 2);
      this.addWall(scene, wallMat, cx + hw, h / 2, cz + hd / 2 + 1, t, h, hd - 2);
      // West wall
      this.addWall(scene, wallMat, cx - hw, h / 2, cz - hd / 2 - 1, t, h, hd - 2);
      this.addWall(scene, wallMat, cx - hw, h / 2, cz + hd / 2 + 1, t, h, hd - 2);

      // === CEILING per room ===
      const ceilGeo = new THREE.PlaneGeometry(w, d);
      const ceil = new THREE.Mesh(ceilGeo, ceilMat);
      ceil.rotation.x = Math.PI / 2;
      ceil.position.set(cx, h, cz);
      ceil.receiveShadow = true;
      scene.add(ceil);

      // === ROOM LIGHTING — warm overhead + colored accent ===
      const mainLight = new THREE.PointLight(0xffeebb, 2.5, w * 3.5);
      mainLight.position.set(cx, h - 0.3, cz);
      mainLight.castShadow = true;
      mainLight.shadow.mapSize.set(512, 512);
      scene.add(mainLight);

      // Light fixture visual (cylinder hanging from ceiling)
      const fixtureGeo = new THREE.CylinderGeometry(0.15, 0.25, 0.3, 8);
      const fixtureMat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.8, roughness: 0.3 });
      const fixture = new THREE.Mesh(fixtureGeo, fixtureMat);
      fixture.position.set(cx, h - 0.15, cz);
      scene.add(fixture);
      // Glowing bulb
      const bulbGeo = new THREE.SphereGeometry(0.12, 8, 8);
      const bulbMat = new THREE.MeshStandardMaterial({ color: 0xffeecc, emissive: 0xffddaa, emissiveIntensity: 2 });
      const bulb = new THREE.Mesh(bulbGeo, bulbMat);
      bulb.position.set(cx, h - 0.35, cz);
      scene.add(bulb);

      // Fill light
      const fill = new THREE.PointLight(0x99aacc, 0.6, w * 2);
      fill.position.set(cx, h * 0.4, cz);
      scene.add(fill);

      // Spawn points
      this.spawnPoints.push(new THREE.Vector3(cx, 0, cz));
      this.enemySpawnPoints.push(
        new THREE.Vector3(cx + hw * 0.3, 0, cz + hd * 0.3),
        new THREE.Vector3(cx - hw * 0.3, 0, cz - hd * 0.3)
      );
    }

    // === ENVIRONMENTAL PROPS ===
    const crateMatl = new THREE.MeshStandardMaterial({ map: crateTex, roughness: 0.8 });
    const barrelMat = new THREE.MeshStandardMaterial({ map: metalTex, color: 0x446644, roughness: 0.5, metalness: 0.3 });
    const barrelTopMat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.6, roughness: 0.4 });

    // Crates in rooms
    const cratePositions = [
      [-3, 0.5, -3], [4, 0.5, 2], [-19, 0.5, 2], [21, 0.5, -2],
      [2, 0.5, -19], [-1, 0.5, 19], [-2, 1.5, -3], // stacked
    ];
    for (const [x, y, z] of cratePositions) {
      const size = 0.7 + Math.random() * 0.5;
      const crate = new THREE.Mesh(new THREE.BoxGeometry(size, size, size), crateMatl);
      crate.position.set(x, y, z);
      crate.rotation.y = Math.random() * 0.4 - 0.2;
      crate.castShadow = true;
      crate.receiveShadow = true;
      crate.userData.isWall = true; // collide
      scene.add(crate);
      this.walls.push(crate);
    }

    // Barrels
    const barrelPositions = [
      [5, 0, -5], [-5, 0, 4], [18, 0, 3], [-18, 0, -3],
      [3, 0, 18], [-2, 0, -18],
    ];
    for (const [x, _, z] of barrelPositions) {
      const barrel = new THREE.Group();
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 1.2, 12), barrelMat);
      body.position.y = 0.6;
      body.castShadow = true;
      barrel.add(body);
      // Top rim
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.04, 8, 16), barrelTopMat);
      rim.rotation.x = Math.PI / 2;
      rim.position.y = 1.2;
      barrel.add(rim);
      // Bottom rim
      const rim2 = rim.clone();
      rim2.position.y = 0.02;
      barrel.add(rim2);
      // Middle band
      const band = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.03, 8, 16), barrelTopMat);
      band.rotation.x = Math.PI / 2;
      band.position.y = 0.6;
      barrel.add(band);

      barrel.position.set(x, 0, z);
      scene.add(barrel);
    }

    // === FLOOR DETAILS — darker patches under doorways ===
    const doorwayMat = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.95 });
    const dwGeo = new THREE.PlaneGeometry(2, 2);
    const doorways = [[0, 7], [0, -7], [7, 0], [-7, 0], [0, 14], [0, -14], [14, 0], [-14, 0]];
    for (const [dx, dz] of doorways) {
      const dw = new THREE.Mesh(dwGeo, doorwayMat);
      dw.rotation.x = -Math.PI / 2;
      dw.position.set(dx, 0.02, dz);
      dw.userData.isFloor = true;
      scene.add(dw);
    }

    // === OUTER BOUNDARY ===
    const s = GAME.WORLD_SIZE;
    const outerMat = new THREE.MeshStandardMaterial({ map: brickTex, color: 0x666677, roughness: 0.8 });
    this.addWall(scene, outerMat, 0, h / 2, s, s * 2, h, t);
    this.addWall(scene, outerMat, 0, h / 2, -s, s * 2, h, t);
    this.addWall(scene, outerMat, s, h / 2, 0, t, h, s * 2);
    this.addWall(scene, outerMat, -s, h / 2, 0, t, h, s * 2);

    // === ATMOSPHERE ===
    scene.fog = new THREE.FogExp2(0x2a3040, 0.018);
    scene.background = new THREE.Color(0x2a3040);
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
