import * as THREE from 'three';
import { WeaponEffects } from './effects';

// ============================================
// ShootingSystem — Raycasting hit detection
// and bullet trail creation
// ============================================

export interface HitResult {
  hit: boolean;
  point: THREE.Vector3;
  object: THREE.Object3D | null;
  distance: number;
  normal: THREE.Vector3 | null;
}

export class ShootingSystem {
  private raycaster = new THREE.Raycaster();
  private effects: WeaponEffects;
  private scene: THREE.Scene | null = null;
  private camera: THREE.Camera | null = null;

  constructor(effects: WeaponEffects) {
    this.effects = effects;
  }

  init(scene: THREE.Scene, camera: THREE.Camera): void {
    this.scene = scene;
    this.camera = camera;
  }

  // -------------------------------------------
  // Cast a single ray from camera centre
  // spread = radians of random angular offset
  // range  = max distance
  // -------------------------------------------
  shoot(spread: number, range: number): HitResult {
    if (!this.scene || !this.camera) {
      return { hit: false, point: new THREE.Vector3(), object: null, distance: 0, normal: null };
    }

    // Direction from camera, with optional spread
    const dir = new THREE.Vector3(0, 0, -1);
    dir.applyQuaternion(this.camera.quaternion);

    if (spread > 0) {
      dir.x += (Math.random() - 0.5) * spread;
      dir.y += (Math.random() - 0.5) * spread;
      dir.z += (Math.random() - 0.5) * spread;
      dir.normalize();
    }

    this.raycaster.set(this.camera.position, dir);
    this.raycaster.far = range;

    // Gather all meshes that aren't the weapon model layer (layer 0 = world)
    const intersects = this.raycaster.intersectObjects(this.scene.children, true)
      .filter((i) => {
        // skip objects on layers 1 (weapon viewmodel) or with userData.isEffect
        if (i.object.layers.test(new THREE.Layers())) {
          // default layer 0 is fine
        }
        return !i.object.userData.isEffect && !i.object.userData.isWeaponModel;
      });

    const origin = this.camera.position.clone();

    if (intersects.length > 0) {
      const first = intersects[0];
      const point = first.point.clone();
      const normal = first.face ? first.face.normal.clone() : null;

      // Bullet trail from gun to hit
      this.effects.createBulletTrail(origin, point);
      // Impact sparks
      this.effects.createImpactSparks(point, normal ?? undefined);

      return {
        hit: true,
        point,
        object: first.object,
        distance: first.distance,
        normal,
      };
    }

    // No hit — trail to max range
    const endPoint = origin.clone().add(dir.multiplyScalar(range));
    this.effects.createBulletTrail(origin, endPoint);

    return { hit: false, point: endPoint, object: null, distance: range, normal: null };
  }
}
