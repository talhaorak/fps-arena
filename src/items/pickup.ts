import * as THREE from 'three';

// ============================================
// Pickups — Health packs and ammo drops
// ============================================

export type PickupType = 'health' | 'ammo';

export interface PickupItem {
  type: PickupType;
  mesh: THREE.Group;
  position: THREE.Vector3;
  value: number;
  lifetime: number;
  bobOffset: number;
}

export class PickupManager {
  private scene: THREE.Scene | null = null;
  private pickups: PickupItem[] = [];
  
  // Callbacks
  public onHealthPickup: ((amount: number) => void) | null = null;
  public onAmmoPickup: ((amount: number) => void) | null = null;
  
  init(scene: THREE.Scene): void {
    this.scene = scene;
    this.pickups = [];
  }
  
  // Spawn a pickup at position (called when enemy dies)
  spawn(position: THREE.Vector3, type?: PickupType): void {
    if (!this.scene) return;
    
    // Random type if not specified (70% ammo, 30% health)
    const pickupType = type ?? (Math.random() < 0.3 ? 'health' : 'ammo');
    
    const mesh = this.createPickupMesh(pickupType);
    mesh.position.copy(position);
    mesh.position.y = 0.3; // Float above ground
    
    this.scene.add(mesh);
    
    this.pickups.push({
      type: pickupType,
      mesh,
      position: mesh.position.clone(),
      value: pickupType === 'health' ? 25 : 15, // Health gives 25, ammo gives 15
      lifetime: 15, // Disappears after 15 seconds
      bobOffset: Math.random() * Math.PI * 2, // Random phase for bobbing
    });
  }
  
  // Spawn with chance (not guaranteed)
  maybeSpawn(position: THREE.Vector3, chance: number = 0.4): void {
    if (Math.random() < chance) {
      this.spawn(position);
    }
  }
  
  private createPickupMesh(type: PickupType): THREE.Group {
    const group = new THREE.Group();
    
    if (type === 'health') {
      // Health pack: green box with cross
      const boxMat = new THREE.MeshStandardMaterial({
        color: 0x22aa22,
        emissive: 0x115511,
        emissiveIntensity: 0.5,
        metalness: 0.3,
        roughness: 0.5,
      });
      
      const box = new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 0.2, 0.3),
        boxMat
      );
      group.add(box);
      
      // White cross
      const crossMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 0.3,
      });
      const crossH = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.05, 0.06),
        crossMat
      );
      crossH.position.z = 0.16;
      group.add(crossH);
      const crossV = new THREE.Mesh(
        new THREE.BoxGeometry(0.06, 0.05, 0.2),
        crossMat
      );
      crossV.position.z = 0.16;
      group.add(crossV);
      
      // Glow light
      const light = new THREE.PointLight(0x44ff44, 1, 3);
      light.position.y = 0.2;
      group.add(light);
      
    } else {
      // Ammo: orange/yellow box with bullet symbol
      const boxMat = new THREE.MeshStandardMaterial({
        color: 0xddaa22,
        emissive: 0x664400,
        emissiveIntensity: 0.5,
        metalness: 0.4,
        roughness: 0.4,
      });
      
      const box = new THREE.Mesh(
        new THREE.BoxGeometry(0.25, 0.15, 0.35),
        boxMat
      );
      group.add(box);
      
      // Bullet shapes on top
      const bulletMat = new THREE.MeshStandardMaterial({
        color: 0x886622,
        metalness: 0.8,
        roughness: 0.2,
      });
      for (let i = 0; i < 3; i++) {
        const bullet = new THREE.Mesh(
          new THREE.CylinderGeometry(0.025, 0.025, 0.08, 6),
          bulletMat
        );
        bullet.position.set(-0.05 + i * 0.05, 0.1, 0);
        group.add(bullet);
        
        const tip = new THREE.Mesh(
          new THREE.ConeGeometry(0.025, 0.04, 6),
          bulletMat
        );
        tip.position.set(-0.05 + i * 0.05, 0.16, 0);
        group.add(tip);
      }
      
      // Glow light
      const light = new THREE.PointLight(0xffaa22, 1, 3);
      light.position.y = 0.2;
      group.add(light);
    }
    
    return group;
  }
  
  update(delta: number, playerPosition: THREE.Vector3): void {
    const pickupRadius = 1.2; // Player picks up within this distance
    const toRemove: number[] = [];
    
    for (let i = 0; i < this.pickups.length; i++) {
      const pickup = this.pickups[i];
      
      // Lifetime countdown
      pickup.lifetime -= delta;
      if (pickup.lifetime <= 0) {
        toRemove.push(i);
        continue;
      }
      
      // Bobbing animation
      const bob = Math.sin(Date.now() * 0.003 + pickup.bobOffset) * 0.1;
      pickup.mesh.position.y = pickup.position.y + bob;
      
      // Rotation
      pickup.mesh.rotation.y += delta * 2;
      
      // Fade out when almost expired
      if (pickup.lifetime < 3) {
        const alpha = pickup.lifetime / 3;
        pickup.mesh.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            const mat = child.material as THREE.MeshStandardMaterial;
            if (!mat.transparent) {
              mat.transparent = true;
            }
            mat.opacity = alpha;
          }
        });
      }
      
      // Check pickup collision
      const dist = pickup.mesh.position.distanceTo(playerPosition);
      if (dist < pickupRadius) {
        // Pickup!
        if (pickup.type === 'health' && this.onHealthPickup) {
          this.onHealthPickup(pickup.value);
        } else if (pickup.type === 'ammo' && this.onAmmoPickup) {
          this.onAmmoPickup(pickup.value);
        }
        toRemove.push(i);
      }
    }
    
    // Remove collected/expired pickups
    for (let i = toRemove.length - 1; i >= 0; i--) {
      const idx = toRemove[i];
      const pickup = this.pickups[idx];
      if (this.scene) {
        this.scene.remove(pickup.mesh);
      }
      // Dispose
      pickup.mesh.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach(m => m.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
      this.pickups.splice(idx, 1);
    }
  }
  
  clear(): void {
    for (const pickup of this.pickups) {
      if (this.scene) {
        this.scene.remove(pickup.mesh);
      }
    }
    this.pickups = [];
  }
}
