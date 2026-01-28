import * as THREE from 'three';
import { GAME } from '../constants';
import { LevelData, WallDef, FloorDef, LightDef } from '../types';

// ---- Room / corridor layout definitions ----

interface RoomLayout {
  cx: number;  // centre X
  cz: number;  // centre Z
  w: number;   // width  (X)
  d: number;   // depth  (Z)
}

const ROOMS: RoomLayout[] = [
  { cx:  0,  cz:  0,  w: 14, d: 14 },  // Room 0 — central hub
  { cx: -20, cz:  0,  w: 10, d: 10 },  // Room 1 — west
  { cx:  20, cz:  0,  w: 10, d: 10 },  // Room 2 — east
  { cx:  0,  cz: -20, w: 10, d: 10 },  // Room 3 — north
  { cx:  0,  cz:  20, w: 10, d: 10 },  // Room 4 — south
  { cx: -20, cz: -20, w: 8,  d: 8  },  // Room 5 — NW corner
];

interface Corridor {
  cx: number; cz: number; w: number; d: number;
}

const CORRIDORS: Corridor[] = [
  { cx: -10, cz: 0,   w: 7,  d: 4  },  // hub ↔ west
  { cx:  10, cz: 0,   w: 7,  d: 4  },  // hub ↔ east
  { cx:  0,  cz: -10, w: 4,  d: 7  },  // hub ↔ north
  { cx:  0,  cz:  10, w: 4,  d: 7  },  // hub ↔ south
  { cx: -20, cz: -10, w: 4,  d: 7  },  // west ↔ NW
];

const WALL_H  = GAME.WALL_HEIGHT;
const WALL_T  = 0.5; // wall thickness

/**
 * SceneBuilder — procedurally constructs a multi-room FPS level.
 */
export class SceneBuilder {
  private walls: THREE.Mesh[] = [];
  private spawnPoints: THREE.Vector3[] = [];
  private enemySpawnPoints: THREE.Vector3[] = [];

  /** Build the entire level into the given scene */
  build(scene: THREE.Scene): void {
    this.walls = [];

    // ---- materials ----
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x556677,
      roughness: 0.85,
      metalness: 0.1,
    });

    const floorMat = this.createGridMaterial();

    const ceilMat = new THREE.MeshStandardMaterial({
      color: 0x334455,
      roughness: 0.9,
    });

    // ---- collect all walkable rects (rooms + corridors) ----
    const rects = [
      ...ROOMS.map(r => ({ cx: r.cx, cz: r.cz, w: r.w, d: r.d })),
      ...CORRIDORS,
    ];

    // ---- floors & ceilings ----
    for (const r of rects) {
      // Floor
      const floorGeo = new THREE.BoxGeometry(r.w, 0.2, r.d);
      const floor = new THREE.Mesh(floorGeo, floorMat);
      floor.position.set(r.cx, -0.1, r.cz);
      floor.receiveShadow = true;
      scene.add(floor);

      // Ceiling
      const ceilGeo = new THREE.BoxGeometry(r.w, 0.2, r.d);
      const ceil = new THREE.Mesh(ceilGeo, ceilMat);
      ceil.position.set(r.cx, WALL_H + 0.1, r.cz);
      scene.add(ceil);
    }

    // ---- walls for each room ----
    for (const room of ROOMS) {
      this.buildRoomWalls(scene, room, wallMat);
    }

    // ---- lights ----
    // Ambient
    const ambient = new THREE.AmbientLight(0x404060, 0.6);
    scene.add(ambient);

    // Per-room point lights
    for (const room of ROOMS) {
      const light = new THREE.PointLight(0xffeedd, 1.2, room.w * 2.5);
      light.position.set(room.cx, WALL_H - 0.5, room.cz);
      light.castShadow = true;
      scene.add(light);
    }

    // Corridor lights (dimmer)
    for (const cor of CORRIDORS) {
      const light = new THREE.PointLight(0xccddff, 0.6, 12);
      light.position.set(cor.cx, WALL_H - 0.5, cor.cz);
      scene.add(light);
    }

    // ---- spawn points ----
    this.spawnPoints = [
      new THREE.Vector3(0, 0, 0),                // hub centre
      new THREE.Vector3(ROOMS[1].cx, 0, ROOMS[1].cz),
      new THREE.Vector3(ROOMS[2].cx, 0, ROOMS[2].cz),
    ];

    this.enemySpawnPoints = [
      new THREE.Vector3(ROOMS[3].cx, 0, ROOMS[3].cz),
      new THREE.Vector3(ROOMS[4].cx, 0, ROOMS[4].cz),
      new THREE.Vector3(ROOMS[5].cx, 0, ROOMS[5].cz),
      new THREE.Vector3(ROOMS[1].cx + 3, 0, ROOMS[1].cz),
      new THREE.Vector3(ROOMS[2].cx - 3, 0, ROOMS[2].cz),
    ];
  }

  // ---- helpers ----

  private buildRoomWalls(
    scene: THREE.Scene,
    room: RoomLayout,
    mat: THREE.Material,
  ): void {
    const hw = room.w / 2;
    const hd = room.d / 2;

    // Four walls: N, S, E, W — each one is a set of segments with
    // openings where corridors connect.

    // North wall (z = cz - hd)
    this.buildWallWithOpenings(scene, mat, room, 'north');
    // South wall (z = cz + hd)
    this.buildWallWithOpenings(scene, mat, room, 'south');
    // West wall  (x = cx - hw)
    this.buildWallWithOpenings(scene, mat, room, 'west');
    // East wall   (x = cx + hw)
    this.buildWallWithOpenings(scene, mat, room, 'east');
  }

  /**
   * Build one wall of a room, automatically cutting openings for corridors.
   */
  private buildWallWithOpenings(
    scene: THREE.Scene,
    mat: THREE.Material,
    room: RoomLayout,
    side: 'north' | 'south' | 'east' | 'west',
  ): void {
    const hw = room.w / 2;
    const hd = room.d / 2;

    // Determine the wall line and gather corridor intersections
    const openings: { min: number; max: number }[] = [];

    for (const cor of CORRIDORS) {
      const chw = cor.w / 2;
      const chd = cor.d / 2;

      if (side === 'north') {
        // wall at z = cz - hd
        const wz = room.cz - hd;
        if (Math.abs(wz - (cor.cz + chd)) < WALL_T * 2 || Math.abs(wz - (cor.cz - chd)) < WALL_T * 2 ||
            (cor.cz - chd < wz && cor.cz + chd > wz)) {
          // corridor crosses this wall in X
          if (cor.cx - chw < room.cx + hw && cor.cx + chw > room.cx - hw) {
            openings.push({
              min: Math.max(cor.cx - chw, room.cx - hw),
              max: Math.min(cor.cx + chw, room.cx + hw),
            });
          }
        }
      } else if (side === 'south') {
        const wz = room.cz + hd;
        if (Math.abs(wz - (cor.cz - chd)) < WALL_T * 2 || Math.abs(wz - (cor.cz + chd)) < WALL_T * 2 ||
            (cor.cz - chd < wz && cor.cz + chd > wz)) {
          if (cor.cx - chw < room.cx + hw && cor.cx + chw > room.cx - hw) {
            openings.push({
              min: Math.max(cor.cx - chw, room.cx - hw),
              max: Math.min(cor.cx + chw, room.cx + hw),
            });
          }
        }
      } else if (side === 'west') {
        const wx = room.cx - hw;
        if (Math.abs(wx - (cor.cx + chw)) < WALL_T * 2 || Math.abs(wx - (cor.cx - chw)) < WALL_T * 2 ||
            (cor.cx - chw < wx && cor.cx + chw > wx)) {
          if (cor.cz - chd < room.cz + hd && cor.cz + chd > room.cz - hd) {
            openings.push({
              min: Math.max(cor.cz - chd, room.cz - hd),
              max: Math.min(cor.cz + chd, room.cz + hd),
            });
          }
        }
      } else { // east
        const wx = room.cx + hw;
        if (Math.abs(wx - (cor.cx - chw)) < WALL_T * 2 || Math.abs(wx - (cor.cx + chw)) < WALL_T * 2 ||
            (cor.cx - chw < wx && cor.cx + chw > wx)) {
          if (cor.cz - chd < room.cz + hd && cor.cz + chd > room.cz - hd) {
            openings.push({
              min: Math.max(cor.cz - chd, room.cz - hd),
              max: Math.min(cor.cz + chd, room.cz + hd),
            });
          }
        }
      }
    }

    // Sort openings
    openings.sort((a, b) => a.min - b.min);

    // Generate wall segments around openings
    const isHorizontal = side === 'north' || side === 'south';

    const wallStart = isHorizontal ? room.cx - hw : room.cz - hd;
    const wallEnd   = isHorizontal ? room.cx + hw : room.cz + hd;

    const segments: { start: number; end: number }[] = [];
    let cursor = wallStart;

    for (const op of openings) {
      if (op.min > cursor + 0.01) {
        segments.push({ start: cursor, end: op.min });
      }
      cursor = op.max;
    }
    if (wallEnd > cursor + 0.01) {
      segments.push({ start: cursor, end: wallEnd });
    }

    // Create mesh for each segment
    for (const seg of segments) {
      const len = seg.end - seg.start;
      if (len < 0.1) continue;
      const mid = (seg.start + seg.end) / 2;

      let geo: THREE.BoxGeometry;
      let pos: THREE.Vector3;

      if (side === 'north') {
        geo = new THREE.BoxGeometry(len, WALL_H, WALL_T);
        pos = new THREE.Vector3(mid, WALL_H / 2, room.cz - hd);
      } else if (side === 'south') {
        geo = new THREE.BoxGeometry(len, WALL_H, WALL_T);
        pos = new THREE.Vector3(mid, WALL_H / 2, room.cz + hd);
      } else if (side === 'west') {
        geo = new THREE.BoxGeometry(WALL_T, WALL_H, len);
        pos = new THREE.Vector3(room.cx - hw, WALL_H / 2, mid);
      } else {
        geo = new THREE.BoxGeometry(WALL_T, WALL_H, len);
        pos = new THREE.Vector3(room.cx + hw, WALL_H / 2, mid);
      }

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(pos);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
      this.walls.push(mesh);
    }
  }

  /** Create a programmatic grid-textured material for floors */
  private createGridMaterial(): THREE.MeshStandardMaterial {
    const size = 512;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#3a3a4a';
    ctx.fillRect(0, 0, size, size);

    ctx.strokeStyle = '#50506a';
    ctx.lineWidth = 2;
    const step = size / 8;
    for (let i = 0; i <= size; i += step) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, size); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(size, i); ctx.stroke();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(4, 4);

    return new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.9,
      metalness: 0.05,
    });
  }

  getWalls(): THREE.Mesh[] { return this.walls; }
  getSpawnPoints(): THREE.Vector3[] { return this.spawnPoints; }
  getEnemySpawnPoints(): THREE.Vector3[] { return this.enemySpawnPoints; }
}
