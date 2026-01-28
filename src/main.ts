import { GameEngine } from './core/engine';
import { SceneBuilder } from './core/scene';
import { FPSCamera } from './player/camera';
import { PlayerController } from './player/controller';
import { InputManager } from './player/input';
import { WeaponManager } from './weapons/weapon';
import { EnemyManager } from './enemies/spawner';
import { HUD } from './ui/hud';
import { Crosshair } from './ui/crosshair';
import { MenuManager } from './ui/menu';
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

const hud = new HUD();
hud.init();

const crosshair = new Crosshair();
crosshair.init();

const audio = new AudioManager();
audio.init();

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
  if (dead) {
    gameOver = true;
    fpsCamera.unlock();
    menu.showGameOver(score, kills);
  }
};

// === START / RESTART ===
function startGame() {
  score = 0; kills = 0; wave = 0; prevKillCount = 0;
  gameStarted = true; gameOver = false;
  player.reset(spawnPoints[0]);
  nextWave();
  fpsCamera.lock();
}

function nextWave() {
  wave++;
  enemies.spawnWave(wave);
  audio.play({ type: 'wave_start' });
}

menu.onStart = startGame;
menu.onRestart = startGame;
menu.showStart();

// === BLOCKER ===
const blocker = document.getElementById('blocker')!;
blocker.style.display = 'none';
document.addEventListener('pointerlockchange', () => {
  if (!document.pointerLockElement && gameStarted && !gameOver) {
    menu.showPause();
  }
});

// === GAME LOOP ===
engine.onUpdate((delta) => {
  if (!gameStarted || gameOver) return;
  if (!fpsCamera.isLocked()) return;

  // Player
  player.update(delta, input, fpsCamera);
  fpsCamera.setPosition(player.getPosition());
  audio.setListenerPosition(player.getPosition(), fpsCamera.getDirection());

  // Weapons
  weapons.update(delta);

  // Shooting
  if (input.isMouseDown(0)) {
    const hits = weapons.shoot();
    if (hits && hits.length > 0) {
      audio.play({ type: 'gunshot' });
      for (const hit of hits) {
        if (hit.object?.userData?.isEnemy) {
          const weapon = weapons.getCurrentWeapon();
          enemies.applyDamageAtPoint(hit.point, weapon.damage, 0.5);
          audio.play({ type: 'hit', position: hit.point });
        }
      }
    }
  }

  // Reload
  if (input.isKeyDown('KeyR')) weapons.reload();

  // Weapon switch
  if (input.isKeyDown('Digit1')) weapons.switchWeapon(0);
  if (input.isKeyDown('Digit2')) weapons.switchWeapon(1);
  if (input.isKeyDown('Digit3')) weapons.switchWeapon(2);

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

  // Wave complete?
  if (enemies.isWaveComplete() && wave > 0) {
    score += GAME.WAVE_BONUS;
    prevKillCount = 0;
    nextWave();
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
  });

  crosshair.update(false, wData.isReloading ?? false);

  // Escape = pause
  if (input.isKeyDown('Escape')) fpsCamera.unlock();
});

engine.start(fpsCamera.getCamera());

console.log('[FPS Game] Initialized!');
console.log(`[FPS Game] ${sceneBuilder.getWalls().length} walls, ${spawnPoints.length} rooms`);
