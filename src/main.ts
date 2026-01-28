import { GameEngine } from './core/engine';
import { SceneBuilder } from './core/scene';
import { ScreenEffects } from './core/effects';
import { FPSCamera } from './player/camera';
import { PlayerController } from './player/controller';
import { InputManager } from './player/input';
import { WeaponManager } from './weapons/weapon';
import { WeaponEffects } from './weapons/effects';
import { EnemyManager } from './enemies/spawner';
import { PickupManager } from './items/pickup';
import { HUD } from './ui/hud';
import { Crosshair } from './ui/crosshair';
import { MenuManager } from './ui/menu';
import { Minimap } from './ui/minimap';
import { MobileControls } from './ui/mobile-controls';
import { AudioManager } from './audio/sound';
import { GAME } from './constants';

// === SYSTEMS ===
const engine = new GameEngine();
engine.init();
const scene = engine.getScene();

const sceneBuilder = new SceneBuilder();
sceneBuilder.build(scene);

const fpsCamera = new FPSCamera();
fpsCamera.init(engine.getDomElement());

const input = new InputManager();
input.init();

const player = new PlayerController();
const spawnPoints = sceneBuilder.getSpawnPoints();
player.init(scene, sceneBuilder.getWalls(), spawnPoints[0]);

const weapons = new WeaponManager();
weapons.init(scene, fpsCamera.getCamera());

const enemies = new EnemyManager();
enemies.init(scene);

// Standalone effects system for enemy hit/death visuals
const enemyEffects = new WeaponEffects();
enemyEffects.init(scene);

// Wire up enemy effect callbacks
enemies.onEnemyHit = (point, direction) => {
  enemyEffects.createBloodSplatter(point, direction);
  screenFx.gunShake();
};

enemies.onEnemyDeath = (point) => {
  enemyEffects.createDeathExplosion(point);
  screenFx.explosionShake();
  // Spawn loot
  pickups.maybeSpawn(point, 0.5); // 50% chance for loot
};

// Headshot callback
enemies.onHeadshot = (point) => {
  screenFx.headshotSlowMo();
  screenFx.headshotFlash();
  audio.play({ type: 'headshot' });
  hud.showHeadshot();
};

const hud = new HUD();
hud.init();

const crosshair = new Crosshair();
crosshair.init();

const audio = new AudioManager();
audio.init();

const minimap = new Minimap();

const screenFx = new ScreenEffects();

// Mobile controls
const mobileControls = new MobileControls();
const isMobile = MobileControls.isMobile();

const pickups = new PickupManager();
pickups.init(scene);

// Pickup callbacks
pickups.onHealthPickup = (amount) => {
  player.heal(amount);
  audio.play({ type: 'pickup' });
  hud.showPickup('health', amount);
};

pickups.onAmmoPickup = (amount) => {
  weapons.addReserveAmmo(amount);
  audio.play({ type: 'pickup' });
  hud.showPickup('ammo', amount);
};

const menu = new MenuManager();

// === GAME STATE ===
let score = 0;
let kills = 0;
let wave = 0;
let gameStarted = false;
let gameOver = false;
let prevKillCount = 0;

// === Enemy damage callback ===
enemies.onPlayerDamage = (damage: number) => {
  const dead = player.takeDamage(damage);
  hud.showDamage();
  audio.play({ type: 'damage' });
  screenFx.damageShake();
  if (dead) {
    gameOver = true;
    fpsCamera.unlock();
    menu.showGameOver(score, kills, wave);
  }
};

// === START / RESTART ===
function startGame() {
  score = 0; kills = 0; wave = 0; prevKillCount = 0;
  gameStarted = true; gameOver = false;
  player.reset(spawnPoints[0]);
  pickups.clear();
  nextWave();
  
  if (isMobile) {
    fpsCamera.mobileMode = true;
    mobileControls.show();
    // On mobile, we don't use pointer lock - fullscreen instead
    document.documentElement.requestFullscreen?.().catch(() => {});
  } else {
    fpsCamera.lock();
  }
}

function nextWave() {
  wave++;
  enemies.spawnWave(wave);
  audio.play({ type: 'wave_start' });
  hud.showWaveStart(wave);
}

menu.onStart = startGame;
menu.onRestart = startGame;
menu.showStart();

// === BLOCKER ===
const blocker = document.getElementById('blocker')!;
if (blocker) blocker.style.display = 'none';

// Only use pointer lock change for desktop
if (!isMobile) {
  document.addEventListener('pointerlockchange', () => {
    if (!document.pointerLockElement && gameStarted && !gameOver) {
      menu.showPause();
    }
  });
}

// === GAME LOOP ===
engine.onUpdate((realDelta) => {
  if (!gameStarted || gameOver) return;
  
  // On desktop, require pointer lock; on mobile, always run
  if (!isMobile && !fpsCamera.isLocked()) return;
  
  // Update screen effects (always at real time)
  screenFx.update(realDelta);
  
  // Apply time scale for slow-motion
  const delta = realDelta * screenFx.getTimeScale();
  
  // Apply screen shake to camera
  const shake = screenFx.getShakeOffset();
  
  // Get mobile input if on mobile
  const mobileInput = isMobile ? mobileControls.getInput() : null;
  
  // Player update (with mobile input support)
  if (isMobile && mobileInput) {
    player.updateMobile(delta, mobileInput, fpsCamera);
  } else {
    player.update(delta, input, fpsCamera);
  }
  
  const playerPos = player.getPosition();
  fpsCamera.setPosition(playerPos);
  fpsCamera.applyShake(shake.x, shake.y);
  audio.setListenerPosition(playerPos, fpsCamera.getDirection());
  
  // Low health vignette
  screenFx.setHealthVignette((player.getHealth() / GAME.PLAYER_MAX_HEALTH) * 100);

  // Weapons
  weapons.update(delta);
  
  // Enemy effects (blood, explosions)
  enemyEffects.update(delta);
  
  // Pickups
  pickups.update(delta, playerPos);

  // Shooting (desktop or mobile)
  const isFiring = isMobile ? (mobileInput?.fire ?? false) : input.isMouseDown(0);
  if (isFiring) {
    try {
      const hits = weapons.shoot();
      if (hits && hits.length > 0) {
        audio.play({ type: 'gunshot' });
        screenFx.gunShake();
        for (const hit of hits) {
          if (hit.object?.userData?.isEnemy) {
            const weapon = weapons.getCurrentWeapon();
            const hitDirection = fpsCamera.getDirection();
            enemies.applyDamageAtPoint(hit.point, weapon.damage, 0.5, hitDirection);
            audio.play({ type: 'hit', position: hit.point });
          }
        }
      }
    } catch (err) {
      console.error('Shooting error:', err);
    }
  }

  // Reload (desktop or mobile)
  if (isMobile ? (mobileInput?.reload ?? false) : input.isKeyDown('KeyR')) {
    weapons.reload();
  }

  // Weapon switch (desktop or mobile)
  if (isMobile ? (mobileInput?.weapon1 ?? false) : input.isKeyDown('Digit1')) weapons.switchWeapon(0);
  if (isMobile ? (mobileInput?.weapon2 ?? false) : input.isKeyDown('Digit2')) weapons.switchWeapon(1);
  if (isMobile ? (mobileInput?.weapon3 ?? false) : input.isKeyDown('Digit3')) weapons.switchWeapon(2);
  
  // Reset mobile one-shot inputs
  if (isMobile) mobileControls.resetOneShot();

  // Enemies
  enemies.update(delta, player.getPosition());

  // Track kills
  const activeEnemies = enemies.getEnemies();
  const totalSpawned = wave * (GAME.ENEMIES_PER_WAVE_BASE + (wave - 1) * GAME.ENEMIES_PER_WAVE_INCREMENT);
  const currentKills = totalSpawned - activeEnemies.length;
  if (currentKills > prevKillCount) {
    const newKills = currentKills - prevKillCount;
    kills += newKills;
    score += newKills * GAME.KILL_SCORE;
    for (let i = 0; i < newKills; i++) {
      audio.play({ type: 'kill' });
      hud.showKill(GAME.KILL_SCORE);
    }
    prevKillCount = currentKills;
  }

  // Wave complete? Trigger dramatic slow-mo!
  if (enemies.isWaveComplete() && wave > 0) {
    score += GAME.WAVE_BONUS;
    prevKillCount = 0;
    screenFx.waveSlowMo(); // Dramatic slow-motion
    // Delay next wave spawn until slow-mo ends
    setTimeout(() => {
      if (gameStarted && !gameOver) {
        nextWave();
      }
    }, 2000);
  }

  // HUD
  const wData = weapons.getHUDData();
  hud.update({
    health: player.getHealth(),
    maxHealth: GAME.PLAYER_MAX_HEALTH,
    ammo: wData.ammo ?? 0,
    maxAmmo: wData.maxAmmo ?? 0,
    reserveAmmo: wData.reserveAmmo ?? 0,
    weaponName: wData.weaponName ?? 'Unknown',
    score,
    kills,
    wave,
    isReloading: wData.isReloading ?? false,
    crosshairHit: false,
    enemyCount: enemies.getAliveCount(),
  });

  crosshair.update(false, wData.isReloading ?? false);
  
  // Minimap
  const enemyData = enemies.getEnemies().map(e => ({
    position: e.getPosition(),
    isDead: e.isDead(),
  }));
  minimap.update(player.getPosition(), fpsCamera.getCamera().rotation.y, enemyData);

  // Escape = pause
  if (input.isKeyDown('Escape')) fpsCamera.unlock();
});

engine.start(fpsCamera.getCamera());

console.log('[FPS Game] Initialized!');
console.log(`[FPS Game] ${sceneBuilder.getWalls().length} walls, ${spawnPoints.length} rooms`);
