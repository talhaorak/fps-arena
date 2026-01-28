import * as THREE from 'three';
import { GAME } from '../constants';
import { Enemy } from './enemy';

export interface AIAction {
  action: string;
  damage?: number;
}

export class EnemyAI {
  // Per-enemy state timers keyed by enemy id
  private idleTimers: Map<string, number> = new Map();
  private patrolPauseTimers: Map<string, number> = new Map();
  private patrolPaused: Map<string, boolean> = new Map();

  update(enemy: Enemy, delta: number, playerPosition: THREE.Vector3): AIAction {
    const data = enemy.data;
    if (data.state === 'dead') {
      return { action: 'dead' };
    }

    const toPlayer = new THREE.Vector3().subVectors(playerPosition, data.position);
    toPlayer.y = 0; // horizontal distance only
    const distToPlayer = toPlayer.length();

    // --- State transitions ---
    switch (data.state) {
      case 'idle':
        return this.handleIdle(enemy, delta, distToPlayer);

      case 'patrol':
        return this.handlePatrol(enemy, delta, distToPlayer, playerPosition);

      case 'chase':
        return this.handleChase(enemy, delta, distToPlayer, playerPosition);

      case 'attack':
        return this.handleAttack(enemy, delta, distToPlayer, playerPosition);

      default:
        return { action: 'idle' };
    }
  }

  private handleIdle(enemy: Enemy, delta: number, distToPlayer: number): AIAction {
    const data = enemy.data;

    // Detect player → chase
    if (distToPlayer <= data.detectionRange) {
      enemy.setState('chase');
      return { action: 'chase' };
    }

    // Wait in idle for a moment, then start patrolling
    const currentIdle = (this.idleTimers.get(data.id) ?? 0) + delta;
    this.idleTimers.set(data.id, currentIdle);

    if (currentIdle >= 1.5) {
      this.idleTimers.set(data.id, 0);
      this.generateWaypoints(enemy);
      enemy.setState('patrol');
      return { action: 'patrol' };
    }

    return { action: 'idle' };
  }

  private handlePatrol(
    enemy: Enemy,
    delta: number,
    distToPlayer: number,
    playerPosition: THREE.Vector3,
  ): AIAction {
    const data = enemy.data;

    // Detect player → chase
    if (distToPlayer <= data.detectionRange) {
      this.patrolPaused.delete(data.id);
      this.patrolPauseTimers.delete(data.id);
      enemy.setState('chase');
      return { action: 'chase' };
    }

    // Check if paused at waypoint
    if (this.patrolPaused.get(data.id)) {
      const pauseTime = (this.patrolPauseTimers.get(data.id) ?? 0) + delta;
      this.patrolPauseTimers.set(data.id, pauseTime);
      if (pauseTime >= 1.0) {
        this.patrolPaused.set(data.id, false);
        this.patrolPauseTimers.set(data.id, 0);
        data.currentWaypoint = (data.currentWaypoint + 1) % data.waypoints.length;
      }
      return { action: 'patrol_pause' };
    }

    // Move toward current waypoint
    if (data.waypoints.length === 0) {
      this.generateWaypoints(enemy);
    }

    const wp = data.waypoints[data.currentWaypoint];
    const toWP = new THREE.Vector3().subVectors(wp, data.position);
    toWP.y = 0;
    const distToWP = toWP.length();

    if (distToWP < 0.5) {
      // Reached waypoint → pause
      this.patrolPaused.set(data.id, true);
      this.patrolPauseTimers.set(data.id, 0);
      return { action: 'patrol_reached' };
    }

    // Walk toward waypoint at half speed
    const dir = toWP.normalize();
    const patrolSpeed = data.speed * 0.5;
    data.velocity.set(dir.x * patrolSpeed, 0, dir.z * patrolSpeed);
    data.position.x += data.velocity.x * delta;
    data.position.z += data.velocity.z * delta;

    // Face movement direction
    data.rotation.y = Math.atan2(dir.x, dir.z);

    return { action: 'patrol' };
  }

  private handleChase(
    enemy: Enemy,
    delta: number,
    distToPlayer: number,
    playerPosition: THREE.Vector3,
  ): AIAction {
    const data = enemy.data;

    // Lost player → back to patrol
    if (distToPlayer > data.detectionRange * 1.3) {
      this.generateWaypoints(enemy);
      enemy.setState('patrol');
      return { action: 'patrol' };
    }

    // Close enough → attack
    if (distToPlayer <= data.attackRange) {
      enemy.setState('attack');
      return this.handleAttack(enemy, delta, distToPlayer, playerPosition);
    }

    // Move toward player
    const toPlayer = new THREE.Vector3().subVectors(playerPosition, data.position);
    toPlayer.y = 0;
    const dir = toPlayer.normalize();

    data.velocity.set(dir.x * data.speed, 0, dir.z * data.speed);
    data.position.x += data.velocity.x * delta;
    data.position.z += data.velocity.z * delta;

    // Face player
    data.rotation.y = Math.atan2(dir.x, dir.z);

    return { action: 'chase' };
  }

  private handleAttack(
    enemy: Enemy,
    delta: number,
    distToPlayer: number,
    playerPosition: THREE.Vector3,
  ): AIAction {
    const data = enemy.data;

    // Out of range → chase
    if (distToPlayer > data.attackRange * 1.5) {
      enemy.setState('chase');
      return { action: 'chase' };
    }

    // Face the player
    const toPlayer = new THREE.Vector3().subVectors(playerPosition, data.position);
    toPlayer.y = 0;
    if (toPlayer.lengthSq() > 0.001) {
      data.rotation.y = Math.atan2(toPlayer.x, toPlayer.z);
    }

    // Check attack cooldown
    const now = performance.now() / 1000;
    if (now - data.lastAttackTime >= data.attackCooldown) {
      data.lastAttackTime = now;
      return { action: 'attack', damage: data.damage };
    }

    // Slowly creep toward player while waiting for cooldown
    if (distToPlayer > data.attackRange * 0.6) {
      const dir = toPlayer.normalize();
      const creepSpeed = data.speed * 0.3;
      data.position.x += dir.x * creepSpeed * delta;
      data.position.z += dir.z * creepSpeed * delta;
    }

    return { action: 'attack_cooldown' };
  }

  private generateWaypoints(enemy: Enemy): void {
    const data = enemy.data;
    const origin = data.position.clone();
    data.waypoints = [];

    const numPoints = 3 + Math.floor(Math.random() * 3); // 3-5 waypoints
    for (let i = 0; i < numPoints; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 3 + Math.random() * 7; // 3-10 units from current pos
      const wp = new THREE.Vector3(
        origin.x + Math.cos(angle) * radius,
        0,
        origin.z + Math.sin(angle) * radius,
      );
      // Clamp to world bounds
      const half = GAME.WORLD_SIZE / 2 - 2;
      wp.x = THREE.MathUtils.clamp(wp.x, -half, half);
      wp.z = THREE.MathUtils.clamp(wp.z, -half, half);
      data.waypoints.push(wp);
    }
    data.currentWaypoint = 0;
  }

  /** Reset all tracked state for an enemy (call on enemy removal) */
  clearEnemy(enemyId: string): void {
    this.idleTimers.delete(enemyId);
    this.patrolPauseTimers.delete(enemyId);
    this.patrolPaused.delete(enemyId);
  }
}
