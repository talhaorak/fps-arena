import { GameEngine } from './core/engine';
import { SceneBuilder } from './core/scene';
import { FPSCamera } from './player/camera';
import { PlayerController } from './player/controller';
import { InputManager } from './player/input';
import { GAME } from './constants';

// === INIT ===
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

// === BLOCKER ===
const blocker = document.getElementById('blocker')!;
document.addEventListener('pointerlockchange', () => {
  blocker.style.display = document.pointerLockElement ? 'none' : 'flex';
});

// === GAME LOOP ===
engine.onUpdate((delta) => {
  player.update(delta, input, fpsCamera);
  fpsCamera.setPosition(player.getPosition());
});

engine.start(fpsCamera.getCamera());

console.log('[FPS Game] Running! Click to play.');
console.log('[FPS Game] Rooms:', spawnPoints.length, '| Walls:', sceneBuilder.getWalls().length);
