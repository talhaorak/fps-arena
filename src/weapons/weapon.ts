import * as THREE from 'three';
import { Weapon, HUDData } from '../types';
import { GAME } from '../constants';
import { ShootingSystem, HitResult } from './shooting';
import { WeaponEffects } from './effects';

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
  // Create simple Three.js geometry per weapon
  // Positioned in bottom-right of view
  // -------------------------------------------
  private createWeaponMesh(index: number): THREE.Group {
    const group = new THREE.Group();
    const gunMetal = new THREE.MeshStandardMaterial({ color: 0x444444, metalness: 0.8, roughness: 0.3 });
    const grip = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.4, roughness: 0.7 });

    switch (index) {
      case 0: { // Pistol — compact box + short barrel
        const body = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.1, 0.15), gunMetal);
        const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.18, 8), gunMetal);
        barrel.rotation.x = Math.PI / 2;
        barrel.position.set(0, 0.03, -0.15);
        const handle = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.1, 0.04), grip);
        handle.position.set(0, -0.08, 0.03);
        handle.rotation.x = 0.2;
        group.add(body, barrel, handle);
        group.position.set(0.3, -0.28, -0.5);
        break;
      }
      case 1: { // Shotgun — longer barrel, wider body
        const body = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, 0.35), gunMetal);
        const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.35, 8), gunMetal);
        barrel.rotation.x = Math.PI / 2;
        barrel.position.set(0, 0.02, -0.32);
        const pump = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.045, 0.12), grip);
        pump.position.set(0, -0.04, -0.08);
        const stock = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.08, 0.15), grip);
        stock.position.set(0, -0.01, 0.22);
        group.add(body, barrel, pump, stock);
        group.position.set(0.32, -0.3, -0.5);
        break;
      }
      case 2: { // Assault Rifle — long body + magazine
        const body = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.065, 0.4), gunMetal);
        const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.25, 8), gunMetal);
        barrel.rotation.x = Math.PI / 2;
        barrel.position.set(0, 0.015, -0.3);
        const mag = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.05), grip);
        mag.position.set(0, -0.09, 0.0);
        mag.rotation.x = -0.15;
        const stock = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.07, 0.14), grip);
        stock.position.set(0, -0.01, 0.24);
        group.add(body, barrel, mag, stock);
        group.position.set(0.3, -0.3, -0.5);
        break;
      }
    }

    return group;
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
