import * as THREE from 'three';

// ============================================
// WeaponEffects — Muzzle flash, impact sparks,
// particle lifecycle management
// ============================================

interface ParticleEffect {
  object: THREE.Object3D;
  lifetime: number;
  maxLifetime: number;
  update?: (effect: ParticleEffect, delta: number) => void;
}

export class WeaponEffects {
  private scene: THREE.Scene | null = null;
  private effects: ParticleEffect[] = [];

  init(scene: THREE.Scene): void {
    this.scene = scene;
  }

  // -------------------------------------------
  // Muzzle flash: point light + sprite burst
  // -------------------------------------------
  createMuzzleFlash(position: THREE.Vector3): void {
    if (!this.scene) return;

    // Point light — brief bright flash
    const light = new THREE.PointLight(0xffaa33, 3, 8);
    light.position.copy(position);
    this.scene.add(light);

    this.effects.push({
      object: light,
      lifetime: 0,
      maxLifetime: 0.06, // ~1-2 frames
      update: (eff) => {
        const ratio = 1 - eff.lifetime / eff.maxLifetime;
        (eff.object as THREE.PointLight).intensity = 3 * ratio;
      },
    });

    // Small additive sprite quad as flash glow
    const spriteMat = new THREE.SpriteMaterial({
      color: 0xffdd66,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.position.copy(position);
    sprite.scale.set(0.4, 0.4, 0.4);
    this.scene.add(sprite);

    this.effects.push({
      object: sprite,
      lifetime: 0,
      maxLifetime: 0.08,
      update: (eff) => {
        const ratio = 1 - eff.lifetime / eff.maxLifetime;
        (eff.object as THREE.Sprite).material.opacity = 0.9 * ratio;
        const s = 0.4 + 0.3 * (eff.lifetime / eff.maxLifetime);
        eff.object.scale.set(s, s, s);
      },
    });
  }

  // -------------------------------------------
  // Impact sparks: small particle burst at hit
  // -------------------------------------------
  createImpactSparks(point: THREE.Vector3, normal?: THREE.Vector3): void {
    if (!this.scene) return;

    const count = 12;
    const positions = new Float32Array(count * 3);
    const velocities: THREE.Vector3[] = [];

    const baseDir = normal ? normal.clone() : new THREE.Vector3(0, 1, 0);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = point.x;
      positions[i * 3 + 1] = point.y;
      positions[i * 3 + 2] = point.z;

      // Randomise velocity biased along the surface normal
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
      );
      vel.add(baseDir.clone().multiplyScalar(2 + Math.random() * 3));
      velocities.push(vel);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0xffcc44,
      size: 0.08,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geo, mat);
    this.scene.add(points);

    this.effects.push({
      object: points,
      lifetime: 0,
      maxLifetime: 0.4,
      update: (eff, delta) => {
        const posAttr = (eff.object as THREE.Points).geometry.getAttribute('position') as THREE.BufferAttribute;
        for (let i = 0; i < count; i++) {
          velocities[i].y -= 9.8 * delta; // gravity
          posAttr.setXYZ(
            i,
            posAttr.getX(i) + velocities[i].x * delta,
            posAttr.getY(i) + velocities[i].y * delta,
            posAttr.getZ(i) + velocities[i].z * delta,
          );
        }
        posAttr.needsUpdate = true;

        const ratio = 1 - eff.lifetime / eff.maxLifetime;
        ((eff.object as THREE.Points).material as THREE.PointsMaterial).opacity = ratio;
      },
    });
  }

  // -------------------------------------------
  // Bullet trail: thin fading line
  // -------------------------------------------
  createBulletTrail(from: THREE.Vector3, to: THREE.Vector3): void {
    if (!this.scene) return;

    const geo = new THREE.BufferGeometry().setFromPoints([from.clone(), to.clone()]);
    const mat = new THREE.LineBasicMaterial({
      color: 0xffffaa,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const line = new THREE.Line(geo, mat);
    this.scene.add(line);

    this.effects.push({
      object: line,
      lifetime: 0,
      maxLifetime: 0.15,
      update: (eff) => {
        const ratio = 1 - eff.lifetime / eff.maxLifetime;
        ((eff.object as THREE.Line).material as THREE.LineBasicMaterial).opacity = 0.6 * ratio;
      },
    });
  }

  // -------------------------------------------
  // Tick — advance & cull expired effects
  // -------------------------------------------
  update(delta: number): void {
    for (let i = this.effects.length - 1; i >= 0; i--) {
      const eff = this.effects[i];
      eff.lifetime += delta;

      if (eff.update) eff.update(eff, delta);

      if (eff.lifetime >= eff.maxLifetime) {
        this.scene?.remove(eff.object);
        // Dispose geometry / material
        if ((eff.object as any).geometry) (eff.object as any).geometry.dispose();
        if ((eff.object as any).material) {
          const m = (eff.object as any).material;
          if (Array.isArray(m)) m.forEach((mt: THREE.Material) => mt.dispose());
          else m.dispose();
        }
        this.effects.splice(i, 1);
      }
    }
  }

  dispose(): void {
    for (const eff of this.effects) {
      this.scene?.remove(eff.object);
      if ((eff.object as any).geometry) (eff.object as any).geometry.dispose();
      if ((eff.object as any).material) {
        const m = (eff.object as any).material;
        if (Array.isArray(m)) m.forEach((mt: THREE.Material) => mt.dispose());
        else m.dispose();
      }
    }
    this.effects.length = 0;
  }
}
