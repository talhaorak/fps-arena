// ============================================
// GAME CONSTANTS — Shared across all modules
// ============================================

export const GAME = {
  // Player
  PLAYER_SPEED: 8,
  PLAYER_SPRINT_SPEED: 12,
  PLAYER_JUMP_FORCE: 10,
  PLAYER_HEIGHT: 1.8,
  PLAYER_MAX_HEALTH: 100,
  MOUSE_SENSITIVITY: 0.002,
  
  // Physics
  GRAVITY: -25,
  FRICTION: 0.9,
  
  // World
  WORLD_SIZE: 50,
  WALL_HEIGHT: 4,
  CELL_SIZE: 5,
  
  // Enemies
  ENEMY_BASE_HEALTH: 50,
  ENEMY_BASE_SPEED: 3,
  ENEMY_BASE_DAMAGE: 10,
  ENEMY_DETECTION_RANGE: 20,
  ENEMY_ATTACK_RANGE: 2,
  ENEMY_ATTACK_COOLDOWN: 1.5, // seconds
  HEALTH_SCALE_PER_WAVE: 1.2,
  SPEED_SCALE_PER_WAVE: 1.05,
  ENEMIES_PER_WAVE_BASE: 5,
  ENEMIES_PER_WAVE_INCREMENT: 3,
  
  // Weapons
  WEAPONS: [
    {
      name: 'Pistol',
      damage: 25,
      fireRate: 4,
      maxAmmo: 12,
      reserveAmmo: 48,
      reloadTime: 1.5,
      range: 100,
      spread: 0.02,
    },
    {
      name: 'Shotgun',
      damage: 15, // per pellet, 6 pellets
      fireRate: 1.2,
      maxAmmo: 6,
      reserveAmmo: 24,
      reloadTime: 2.5,
      range: 30,
      spread: 0.1,
    },
    {
      name: 'Assault Rifle',
      damage: 18,
      fireRate: 10,
      maxAmmo: 30,
      reserveAmmo: 90,
      reloadTime: 2.0,
      range: 80,
      spread: 0.04,
    },
  ],
  
  // Scoring
  KILL_SCORE: 100,
  WAVE_BONUS: 500,
  
  // Rendering
  FOV: 75,
  NEAR_CLIP: 0.1,
  FAR_CLIP: 200,
  TARGET_FPS: 60,
} as const;
