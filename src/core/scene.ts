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
    const floorMat = new THREE.MeshStandardMaterial({ map: concreteTex, roughness: 0.8, metalness: 0.05, color: 0xbbbbbb });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    floor.userData.isFloor = true;
    scene.add(floor);

    // === LIGHTING ===
    const ambient = new THREE.AmbientLight(0x99aacc, 1.5);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffeedd, 1.2);
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
      const ceilGeo = new THREE.PlaneGeometry(w + 0.5, d + 0.5);
      const ceil = new THREE.Mesh(ceilGeo, ceilMat);
      ceil.rotation.x = Math.PI / 2;
      ceil.position.set(cx, h, cz);
      ceil.receiveShadow = true;
      scene.add(ceil);

      // === ROOM LIGHTING — warm overhead, attached to ceiling ===
      const mainLight = new THREE.PointLight(0xffeebb, 2.5, w * 3.5);
      mainLight.position.set(cx, h - 0.4, cz);
      mainLight.castShadow = true;
      mainLight.shadow.mapSize.set(512, 512);
      scene.add(mainLight);

      // Light fixture — hanging rod + housing + bulb (attached to ceiling)
      const rodGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.4, 6);
      const rodMat = new THREE.MeshStandardMaterial({ color: 0x555555, metalness: 0.7, roughness: 0.4 });
      const rod = new THREE.Mesh(rodGeo, rodMat);
      rod.position.set(cx, h - 0.2, cz);
      scene.add(rod);

      const housingGeo = new THREE.CylinderGeometry(0.08, 0.18, 0.15, 8);
      const housingMat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.8, roughness: 0.3 });
      const housing = new THREE.Mesh(housingGeo, housingMat);
      housing.position.set(cx, h - 0.42, cz);
      scene.add(housing);

      const bulbGeo = new THREE.SphereGeometry(0.08, 8, 8);
      const bulbMat = new THREE.MeshStandardMaterial({ color: 0xffeecc, emissive: 0xffddaa, emissiveIntensity: 3 });
      const bulb = new THREE.Mesh(bulbGeo, bulbMat);
      bulb.position.set(cx, h - 0.52, cz);
      scene.add(bulb);

      // Fill light from below
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

    // Crates in rooms — small military crates (~knee to waist height)
    const crateConfigs = [
      { pos: [-4, 0, -4], size: 0.45 },
      { pos: [4.5, 0, 3], size: 0.5 },
      { pos: [-19.5, 0, 2.5], size: 0.4 },
      { pos: [21, 0, -2.5], size: 0.45 },
      { pos: [2.5, 0, -19.5], size: 0.4 },
      { pos: [-1.5, 0, 19.5], size: 0.5 },
      { pos: [-4, 0.45, -4], size: 0.35 }, // stacked on first
      { pos: [4.9, 0, 3.4], size: 0.4 },
    ];
    for (const cfg of crateConfigs) {
      const s = cfg.size;
      const crate = new THREE.Mesh(new THREE.BoxGeometry(s, s, s), crateMatl);
      crate.position.set(cfg.pos[0], cfg.pos[1] + s / 2, cfg.pos[2]);
      crate.rotation.y = Math.random() * 0.3 - 0.15;
      crate.castShadow = true;
      crate.receiveShadow = true;
      crate.userData.isWall = true;
      scene.add(crate);
      this.walls.push(crate);
    }

    // Barrels — realistic scale (~0.6m diameter, ~0.9m tall, waist height)
    const barrelPositions = [
      [5, 0, -5], [-5, 0, 4], [18, 0, 3], [-18, 0, -3],
      [3, 0, 18], [-2, 0, -18],
    ];
    for (const [x, _, z] of barrelPositions) {
      const barrel = new THREE.Group();
      const bRadius = 0.22, bHeight = 0.75;
      const body = new THREE.Mesh(new THREE.CylinderGeometry(bRadius, bRadius * 0.95, bHeight, 16), barrelMat);
      body.position.y = bHeight / 2;
      body.castShadow = true;
      body.receiveShadow = true;
      barrel.add(body);
      // Top & bottom rims
      for (const ry of [bHeight, 0.02]) {
        const rim = new THREE.Mesh(new THREE.TorusGeometry(bRadius, 0.025, 8, 16), barrelTopMat);
        rim.rotation.x = Math.PI / 2;
        rim.position.y = ry;
        barrel.add(rim);
      }
      // Middle band
      const band = new THREE.Mesh(new THREE.TorusGeometry(bRadius + 0.01, 0.02, 8, 16), barrelTopMat);
      band.rotation.x = Math.PI / 2;
      band.position.y = bHeight / 2;
      barrel.add(band);

      barrel.position.set(x, 0, z);
      scene.add(barrel);
    }

    // === CORRIDOR CEILINGS — connect rooms ===
    const corridors: [number, number, number, number][] = [
      // [centerX, centerZ, width, depth]
      [0, 9.5, 3, 5],     // Central → North
      [0, -9.5, 3, 5],    // Central → South
      [10, 0, 6, 3],      // Central → East
      [-10, 0, 6, 3],     // Central → West
    ];
    for (const [ccx, ccz, cw, cd] of corridors) {
      const corrCeil = new THREE.Mesh(new THREE.PlaneGeometry(cw, cd), ceilMat);
      corrCeil.rotation.x = Math.PI / 2;
      corrCeil.position.set(ccx, h, ccz);
      scene.add(corrCeil);

      // Corridor light
      const corrLight = new THREE.PointLight(0xddccaa, 1.2, 8);
      corrLight.position.set(ccx, h - 0.3, ccz);
      scene.add(corrLight);

      // Small fixture in corridor
      const corrBulb = new THREE.Mesh(
        new THREE.SphereGeometry(0.06, 6, 6),
        new THREE.MeshStandardMaterial({ color: 0xffeecc, emissive: 0xffcc88, emissiveIntensity: 2 })
      );
      corrBulb.position.set(ccx, h - 0.15, ccz);
      scene.add(corrBulb);
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
