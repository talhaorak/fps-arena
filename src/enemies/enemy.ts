import * as THREE from 'three';
import { Enemy as EnemyData, EnemyState } from '../types';
import { GAME } from '../constants';

let enemyIdCounter = 0;

export class Enemy {
  public data: EnemyData;

  private group: THREE.Group = new THREE.Group();
  private bodyMesh!: THREE.Mesh;
  private leftEye!: THREE.Mesh;
  private rightEye!: THREE.Mesh;
  private healthBarBg!: THREE.Mesh;
  private healthBarFg!: THREE.Mesh;

  private scene: THREE.Scene | null = null;
  private deathTimer = 0;
  private deathAnimating = false;
  private removed = false;
  private materials: THREE.MeshStandardMaterial[] = [];

  constructor() {
    this.data = {
      id: `enemy_${enemyIdCounter++}`,
      mesh: null,
      position: new THREE.Vector3(),
      rotation: new THREE.Euler(),
      velocity: new THREE.Vector3(),
      health: GAME.ENEMY_BASE_HEALTH,
      maxHealth: GAME.ENEMY_BASE_HEALTH,
      speed: GAME.ENEMY_BASE_SPEED,
      damage: GAME.ENEMY_BASE_DAMAGE,
      attackRange: GAME.ENEMY_ATTACK_RANGE,
      detectionRange: GAME.ENEMY_DETECTION_RANGE,
      attackCooldown: GAME.ENEMY_ATTACK_COOLDOWN,
      lastAttackTime: 0,
      state: 'idle' as EnemyState,
      waypoints: [],
      currentWaypoint: 0,
    };
  }

  init(scene: THREE.Scene, position: THREE.Vector3): void {
    this.scene = scene;
    this.data.position.copy(position);

    // --- Body: capsule-like shape (cylinder + two hemispheres) ---
    const bodyRadius = 0.4;
    const bodyHeight = 1.2;
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xaa2222,
      roughness: 0.6,
      metalness: 0.2,
      transparent: true,
      opacity: 1.0,
    });
    this.materials.push(bodyMat);

    // Main cylinder torso
    const bodyGeo = new THREE.CylinderGeometry(bodyRadius, bodyRadius * 0.85, bodyHeight, 10);
    this.bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    this.bodyMesh.position.y = bodyHeight / 2 + 0.1;
    this.bodyMesh.castShadow = true;
    this.bodyMesh.receiveShadow = true;
    this.group.add(this.bodyMesh);

    // Head sphere
    const headGeo = new THREE.SphereGeometry(bodyRadius * 0.9, 10, 8);
    const headMesh = new THREE.Mesh(headGeo, bodyMat);
    headMesh.position.y = bodyHeight + 0.1 + bodyRadius * 0.5;
    headMesh.castShadow = true;
    this.group.add(headMesh);

    // --- Glowing emissive eyes ---
    const eyeGeo = new THREE.SphereGeometry(0.07, 6, 6);
    const eyeMat = new THREE.MeshStandardMaterial({
      color: 0xffff44,
      emissive: 0xffcc00,
      emissiveIntensity: 2.5,
      transparent: true,
      opacity: 1.0,
    });
    this.materials.push(eyeMat);

    this.leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    this.leftEye.position.set(-0.15, bodyHeight + 0.1 + bodyRadius * 0.55, bodyRadius * 0.7);
    this.group.add(this.leftEye);

    this.rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    this.rightEye.position.set(0.15, bodyHeight + 0.1 + bodyRadius * 0.55, bodyRadius * 0.7);
    this.group.add(this.rightEye);

    // --- Health bar ---
    const hbWidth = 0.8;
    const hbHeight = 0.08;
    const hbY = bodyHeight + 0.1 + bodyRadius * 2 + 0.3;

    // Background (dark)
    const hbBgGeo = new THREE.PlaneGeometry(hbWidth, hbHeight);
    const hbBgMat = new THREE.MeshBasicMaterial({
      color: 0x333333,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
      depthTest: false,
    });
    this.healthBarBg = new THREE.Mesh(hbBgGeo, hbBgMat);
    this.healthBarBg.position.y = hbY;
    this.healthBarBg.renderOrder = 999;
    this.group.add(this.healthBarBg);

    // Foreground (green → red)
    const hbFgGeo = new THREE.PlaneGeometry(hbWidth, hbHeight);
    const hbFgMat = new THREE.MeshBasicMaterial({
      color: 0x44ff44,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
      depthTest: false,
    });
    this.healthBarFg = new THREE.Mesh(hbFgGeo, hbFgMat);
    this.healthBarFg.position.y = hbY;
    this.healthBarFg.position.z = 0.001; // slightly in front
    this.healthBarFg.renderOrder = 1000;
    this.group.add(this.healthBarFg);

    // Position the group
    this.group.position.copy(position);
    this.data.mesh = this.group;

    scene.add(this.group);
  }

  update(delta: number, playerPos: THREE.Vector3): void {
    if (this.removed) return;

    // Death animation
    if (this.deathAnimating) {
      this.deathTimer += delta;

      // Tip over: rotate on X axis
      const tipAngle = Math.min(this.deathTimer * 2.0, Math.PI / 2);
      this.group.rotation.x = tipAngle;

      // Fade out all materials
      const fadeProgress = Math.min(this.deathTimer / 2.0, 1.0);
      for (const mat of this.materials) {
        mat.opacity = 1.0 - fadeProgress;
      }

      // Remove after 2 seconds
      if (this.deathTimer >= 2.0) {
        this.removeFromScene();
      }
      return;
    }

    // Sync group position from data
    this.group.position.copy(this.data.position);
    this.group.rotation.y = this.data.rotation.y;

    // Update health bar scale and color
    this.updateHealthBar(playerPos);
  }

  private updateHealthBar(playerPos: THREE.Vector3): void {
    const healthPct = Math.max(0, this.data.health / this.data.maxHealth);

    // Scale foreground bar
    this.healthBarFg.scale.x = healthPct;
    // Shift to keep left-aligned
    this.healthBarFg.position.x = -(1 - healthPct) * 0.4;

    // Color: green → yellow → red
    const r = healthPct < 0.5 ? 1.0 : 1.0 - (healthPct - 0.5) * 2;
    const g = healthPct > 0.5 ? 1.0 : healthPct * 2;
    (this.healthBarFg.material as THREE.MeshBasicMaterial).color.setRGB(r, g, 0);

    // Billboard: make health bar face the player
    const lookDir = new THREE.Vector3().subVectors(playerPos, this.group.position);
    lookDir.y = 0;
    if (lookDir.lengthSq() > 0.001) {
      const angle = Math.atan2(lookDir.x, lookDir.z);
      this.healthBarBg.rotation.y = angle - this.group.rotation.y;
      this.healthBarFg.rotation.y = angle - this.group.rotation.y;
    }

    // Hide health bar when at full health
    const show = healthPct < 1.0;
    this.healthBarBg.visible = show;
    this.healthBarFg.visible = show;
  }

  takeDamage(amount: number): boolean {
    if (this.data.state === 'dead') return false;

    this.data.health -= amount;

    // Flash effect: briefly make body white
    const bodyMat = this.bodyMesh.material as THREE.MeshStandardMaterial;
    const originalColor = bodyMat.color.clone();
    bodyMat.emissive.set(0xffffff);
    bodyMat.emissiveIntensity = 0.8;
    setTimeout(() => {
      if (!this.removed) {
        bodyMat.emissive.set(0x000000);
        bodyMat.emissiveIntensity = 0;
      }
    }, 80);

    if (this.data.health <= 0) {
      this.data.health = 0;
      this.data.state = 'dead';
      this.deathAnimating = true;
      this.deathTimer = 0;
      return true; // killed
    }
    return false;
  }

  isDead(): boolean {
    return this.data.state === 'dead';
  }

  isRemoved(): boolean {
    return this.removed;
  }

  getMesh(): THREE.Group {
    return this.group;
  }

  getPosition(): THREE.Vector3 {
    return this.data.position;
  }

  getState(): EnemyState {
    return this.data.state;
  }

  setState(state: EnemyState): void {
    this.data.state = state;
  }

  private removeFromScene(): void {
    if (this.removed || !this.scene) return;
    this.removed = true;
    this.scene.remove(this.group);

    // Dispose geometries and materials
    this.group.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
        if (Array.isArray(child.material)) {
          child.material.forEach((m) => m.dispose());
        } else {
          child.material.dispose();
        }
      }
    });
  }
}
