import * as THREE from 'three';
import { GAME } from '../constants';
import { Enemy } from './enemy';
import { EnemyAI, AIAction } from './ai';

export class EnemyManager {
  private scene: THREE.Scene | null = null;
  private enemies: Enemy[] = [];
  private ai: EnemyAI = new EnemyAI();
  private currentWave = 0;

  /** Callback the game can set to receive player damage events */
  public onPlayerDamage: ((damage: number) => void) | null = null;

  init(scene: THREE.Scene): void {
    this.scene = scene;
    this.enemies = [];
    this.currentWave = 0;
  }

  /**
   * Spawn a wave of enemies.
   * @param waveNumber 1-based wave number
   */
  spawnWave(waveNumber: number): void {
    if (!this.scene) return;
    this.currentWave = waveNumber;

    const count =
      GAME.ENEMIES_PER_WAVE_BASE + GAME.ENEMIES_PER_WAVE_INCREMENT * (waveNumber - 1);

    // Wave scaling
    const healthMultiplier = Math.pow(GAME.HEALTH_SCALE_PER_WAVE, waveNumber - 1);
    const speedMultiplier = Math.pow(GAME.SPEED_SCALE_PER_WAVE, waveNumber - 1);

    for (let i = 0; i < count; i++) {
      const enemy = new Enemy();

      // Random spawn position: radius 15-30 from center
      const angle = Math.random() * Math.PI * 2;
      const radius = 15 + Math.random() * 15;
      const pos = new THREE.Vector3(
        Math.cos(angle) * radius,
        0,
        Math.sin(angle) * radius,
      );

      // Clamp to world bounds
      const half = GAME.WORLD_SIZE / 2 - 2;
      pos.x = THREE.MathUtils.clamp(pos.x, -half, half);
      pos.z = THREE.MathUtils.clamp(pos.z, -half, half);

      enemy.init(this.scene, pos);

      // Apply wave scaling
      enemy.data.maxHealth = Math.round(GAME.ENEMY_BASE_HEALTH * healthMultiplier);
      enemy.data.health = enemy.data.maxHealth;
      enemy.data.speed = GAME.ENEMY_BASE_SPEED * speedMultiplier;
      enemy.data.damage = Math.round(
        GAME.ENEMY_BASE_DAMAGE * (1 + (waveNumber - 1) * 0.15),
      );

      this.enemies.push(enemy);
    }
  }

  /**
   * Update all enemies: run AI, apply movement, handle deaths.
   */
  update(delta: number, playerPosition: THREE.Vector3): void {
    const toRemove: number[] = [];

    for (let i = 0; i < this.enemies.length; i++) {
      const enemy = this.enemies[i];

      // Run AI state machine
      const aiResult: AIAction = this.ai.update(enemy, delta, playerPosition);

      // If AI says attack with damage, notify game
      if (aiResult.action === 'attack' && aiResult.damage != null) {
        if (this.onPlayerDamage) {
          this.onPlayerDamage(aiResult.damage);
        }
      }

      // Visual update (sync mesh, health bar, death anim)
      enemy.update(delta, playerPosition);

      // Mark fully-removed enemies for cleanup
      if (enemy.isRemoved()) {
        toRemove.push(i);
      }
    }

    // Remove dead+removed enemies from array (reverse order to preserve indices)
    for (let i = toRemove.length - 1; i >= 0; i--) {
      const idx = toRemove[i];
      this.ai.clearEnemy(this.enemies[idx].data.id);
      this.enemies.splice(idx, 1);
    }
  }

  /**
   * Apply damage to all enemies near a point (e.g., bullet impact or explosion).
   * Returns total kills from this call.
   */
  applyDamageAtPoint(
    point: THREE.Vector3,
    damage: number,
    range: number,
  ): number {
    let kills = 0;
    for (const enemy of this.enemies) {
      if (enemy.isDead()) continue;

      const dist = enemy.getPosition().distanceTo(point);
      if (dist <= range) {
        // Falloff: full damage at center, linear falloff to edge
        const falloff = range > 0 ? 1 - dist / range : 1;
        const actualDamage = Math.max(1, Math.round(damage * Math.max(falloff, 0.3)));
        const killed = enemy.takeDamage(actualDamage);
        if (killed) kills++;
      }
    }
    return kills;
  }

  /**
   * Check if the current wave is complete (all enemies dead or removed).
   */
  isWaveComplete(): boolean {
    return this.enemies.length === 0;
  }

  /**
   * Get all currently active (alive or dying) enemies.
   */
  getEnemies(): Enemy[] {
    return this.enemies;
  }

  /**
   * Get number of alive enemies (not yet in death state).
   */
  getAliveCount(): number {
    return this.enemies.filter((e) => !e.isDead()).length;
  }

  /**
   * Get current wave number.
   */
  getCurrentWave(): number {
    return this.currentWave;
  }
}
