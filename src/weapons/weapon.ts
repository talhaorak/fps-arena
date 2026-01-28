import * as THREE from 'three';
import { Weapon, HUDData } from '../types';
import { GAME } from '../constants';
import { ShootingSystem, HitResult } from './shooting';
import { WeaponEffects } from './effects';
import { createPistolModel, createShotgunModel, createAssaultRifleModel } from './models';

// ============================================
// WeaponManager — owns weapons, ammo, fire
// rate, reload timers, viewmodel meshes,
// shooting system & effects
// ============================================

export class WeaponManager {
  // Core state
  private weapons: Weapon[] = [];
  private currentIndex = 0;
  private scene: THREE.Scene | null = null;
  private camera: THREE.Camera | null = null;

  // Sub-systems
  private shootingSystem: ShootingSystem;
  private effects: WeaponEffects;

  // Reload bookkeeping
  private reloadTimer = 0;

  // Weapon bob / animation
  private bobTime = 0;

  // Visual viewmodel container (child of camera)
  private viewmodelContainer = new THREE.Group();

  constructor() {
    this.effects = new WeaponEffects();
    this.shootingSystem = new ShootingSystem(this.effects);
  }

  // -------------------------------------------
  // Initialise — build weapon objects from GAME.WEAPONS
  // -------------------------------------------
  init(scene: THREE.Scene, camera: THREE.Camera): void {
    this.scene = scene;
    this.camera = camera;

    this.effects.init(scene);
    this.shootingSystem.init(scene, camera);

    // Build weapon data from constants
    this.weapons = GAME.WEAPONS.map((def) => ({
      name: def.name,
      damage: def.damage,
      fireRate: def.fireRate,
      ammo: def.maxAmmo,
      maxAmmo: def.maxAmmo,
      reserveAmmo: def.reserveAmmo,
      reloadTime: def.reloadTime,
      range: def.range,
      spread: def.spread,
      isReloading: false,
      lastFireTime: 0,
      mesh: null,
    }));

    // Create viewmodel meshes
    this.weapons.forEach((w, i) => {
      w.mesh = this.createWeaponMesh(i);
      w.mesh.visible = i === this.currentIndex;
      w.mesh.userData.isWeaponModel = true;
      // Tag all children too
      w.mesh.traverse((c) => { c.userData.isWeaponModel = true; });
      this.viewmodelContainer.add(w.mesh);
    });

    // Attach viewmodel container to camera
    this.viewmodelContainer.position.set(0, 0, 0);
    camera.add(this.viewmodelContainer);

    // Make sure camera is in scene graph
    if (!camera.parent) scene.add(camera);
  }

  // -------------------------------------------
  // Create detailed Three.js geometry per weapon
  // Using models from models.ts
  // -------------------------------------------
  private createWeaponMesh(index: number): THREE.Group {
    switch (index) {
      case 0:
        return createPistolModel();
      case 1:
        return createShotgunModel();
      case 2:
        return createAssaultRifleModel();
      default:
        return createPistolModel();
    }
  }

  // -------------------------------------------
  // Switch weapon by index (0-2)
  // -------------------------------------------
  switchWeapon(index: number): void {
    if (index < 0 || index >= this.weapons.length) return;
    if (index === this.currentIndex) return;

    const cur = this.weapons[this.currentIndex];
    if (cur.isReloading) {
      cur.isReloading = false;
      this.reloadTimer = 0;
    }
    if (cur.mesh) cur.mesh.visible = false;

    this.currentIndex = index;
    const next = this.weapons[this.currentIndex];
    if (next.mesh) next.mesh.visible = true;
  }

  // -------------------------------------------
  // Shoot — returns array of HitResults
  // (single for pistol/rifle, multi for shotgun)
  // -------------------------------------------
  shoot(): HitResult[] {
    if (!this.scene || !this.camera) return [];

    const weapon = this.weapons[this.currentIndex];
    if (weapon.isReloading) return [];
    if (weapon.ammo <= 0) {
      this.reload();
      return [];
    }

    // Fire rate limiting
    const now = performance.now() / 1000;
    const interval = 1 / weapon.fireRate;
    if (now - weapon.lastFireTime < interval) return [];

    weapon.lastFireTime = now;
    weapon.ammo--;

    // Muzzle flash at barrel tip (world space)
    if (weapon.mesh) {
      const muzzlePos = new THREE.Vector3(0, 0.03, -0.45);
      weapon.mesh.localToWorld(muzzlePos);
      this.effects.createMuzzleFlash(muzzlePos);
    }

    // Recoil kick
    this.applyRecoil();

    const results: HitResult[] = [];

    if (this.currentIndex === 1) {
      // Shotgun: 6 pellets with spread
      for (let i = 0; i < 6; i++) {
        results.push(this.shootingSystem.shoot(weapon.spread, weapon.range));
      }
    } else {
      results.push(this.shootingSystem.shoot(weapon.spread, weapon.range));
    }

    return results;
  }

  // -------------------------------------------
  // Reload current weapon
  // -------------------------------------------
  reload(): void {
    const weapon = this.weapons[this.currentIndex];
    if (weapon.isReloading) return;
    if (weapon.ammo >= weapon.maxAmmo) return;
    if (weapon.reserveAmmo <= 0) return;

    weapon.isReloading = true;
    this.reloadTimer = weapon.reloadTime;
  }

  // -------------------------------------------
  // Update — reload timer, bob, effects
  // -------------------------------------------
  update(delta: number): void {
    const weapon = this.weapons[this.currentIndex];

    // Reload timer
    if (weapon.isReloading) {
      this.reloadTimer -= delta;
      if (this.reloadTimer <= 0) {
        const needed = weapon.maxAmmo - weapon.ammo;
        const available = Math.min(needed, weapon.reserveAmmo);
        weapon.ammo += available;
        weapon.reserveAmmo -= available;
        weapon.isReloading = false;
        this.reloadTimer = 0;
      }
    }

    // Weapon bob (subtle idle sway)
    this.bobTime += delta * 2;
    if (weapon.mesh) {
      const basePos = weapon.mesh.position.clone();
      // Keep original x/z, only bob y
      weapon.mesh.position.y += Math.sin(this.bobTime) * 0.002;
    }

    // Update effects (muzzle flash, sparks, trails)
    this.effects.update(delta);
  }

  // -------------------------------------------
  // Recoil — brief upward kick on viewmodel
  // -------------------------------------------
  private applyRecoil(): void {
    const weapon = this.weapons[this.currentIndex];
    if (!weapon.mesh) return;

    const kickZ = 0.04;
    const kickRot = -0.06;
    weapon.mesh.position.z += kickZ;
    weapon.mesh.rotation.x += kickRot;

    // Tween back over a few frames (simple lerp in update would be better,
    // but for now snap back after a micro timeout for simplicity)
    const mesh = weapon.mesh;
    const origZ = mesh.position.z - kickZ;
    const origRx = mesh.rotation.x - kickRot;
    setTimeout(() => {
      mesh.position.z = origZ;
      mesh.rotation.x = origRx;
    }, 60);
  }

  // -------------------------------------------
  // Accessors
  // -------------------------------------------
  getCurrentWeapon(): Weapon {
    return this.weapons[this.currentIndex];
  }

  getHUDData(): Partial<HUDData> {
    const w = this.weapons[this.currentIndex];
    return {
      ammo: w.ammo,
      maxAmmo: w.maxAmmo,
      reserveAmmo: w.reserveAmmo,
      weaponName: w.name,
      isReloading: w.isReloading,
    };
  }

  getWeapons(): Weapon[] {
    return this.weapons;
  }

  dispose(): void {
    this.effects.dispose();
    this.weapons.forEach((w) => {
      if (w.mesh) {
        w.mesh.traverse((c) => {
          if ((c as THREE.Mesh).geometry) (c as THREE.Mesh).geometry.dispose();
          if ((c as THREE.Mesh).material) {
            const m = (c as THREE.Mesh).material;
            if (Array.isArray(m)) m.forEach((mt) => mt.dispose());
            else (m as THREE.Material).dispose();
          }
        });
      }
    });
    if (this.camera) {
      this.camera.remove(this.viewmodelContainer);
    }
  }
}
