import * as THREE from 'three';

// ============================================
// SHARED INTERFACES — DO NOT MODIFY WITHOUT
// ORCHESTRATOR APPROVAL
// ============================================

export interface GameState {
  player: Player;
  enemies: Enemy[];
  weapons: Weapon[];
  score: number;
  wave: number;
  kills: number;
  gameOver: boolean;
  paused: boolean;
}

export interface Player {
  position: THREE.Vector3;
  rotation: THREE.Euler;
  velocity: THREE.Vector3;
  health: number;
  maxHealth: number;
  speed: number;
  jumpForce: number;
  isGrounded: boolean;
  currentWeaponIndex: number;
}

export interface Enemy {
  id: string;
  mesh: THREE.Mesh | THREE.Group | null;
  position: THREE.Vector3;
  rotation: THREE.Euler;
  velocity: THREE.Vector3;
  health: number;
  maxHealth: number;
  speed: number;
  damage: number;
  attackRange: number;
  detectionRange: number;
  attackCooldown: number;
  lastAttackTime: number;
  state: EnemyState;
  waypoints: THREE.Vector3[];
  currentWaypoint: number;
}

export type EnemyState = 'idle' | 'patrol' | 'chase' | 'attack' | 'dead';

export interface Weapon {
  name: string;
  damage: number;
  fireRate: number; // shots per second
  ammo: number;
  maxAmmo: number;
  reserveAmmo: number;
  reloadTime: number; // seconds
  range: number;
  spread: number; // accuracy (0 = perfect, 1 = very inaccurate)
  isReloading: boolean;
  lastFireTime: number;
  mesh: THREE.Group | null;
}

export interface HUDData {
  health: number;
  maxHealth: number;
  ammo: number;
  maxAmmo: number;
  reserveAmmo: number;
  weaponName: string;
  score: number;
  kills: number;
  wave: number;
  isReloading: boolean;
  crosshairHit: boolean;
}

export interface AudioEvent {
  type: 'gunshot' | 'reload' | 'footstep' | 'hit' | 'kill' | 'damage' | 'ambient' | 'wave_start';
  position?: THREE.Vector3;
  volume?: number;
}

export interface LevelData {
  walls: WallDef[];
  floors: FloorDef[];
  lights: LightDef[];
  spawnPoints: THREE.Vector3[];
  enemySpawnPoints: THREE.Vector3[];
}

export interface WallDef {
  position: [number, number, number];
  size: [number, number, number];
  material?: string;
}

export interface FloorDef {
  position: [number, number, number];
  size: [number, number];
  material?: string;
}

export interface LightDef {
  type: 'point' | 'spot' | 'directional' | 'ambient';
  position?: [number, number, number];
  color: number;
  intensity: number;
}
