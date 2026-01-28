import { GameEngine } from './core/engine';
import { SceneBuilder } from './core/scene';
import { InputManager } from './player/input';
import { FPSCamera } from './player/camera';
import { PlayerController } from './player/controller';

// ---- bootstrap ----
const engine   = new GameEngine();
const sceneBuilder = new SceneBuilder();
const input    = new InputManager();
const fpsCamera = new FPSCamera();
const player   = new PlayerController(fpsCamera);

function main(): void {
  // 1. Engine (renderer + scene)
  engine.init();

  // 2. Build level
  const scene = engine.getScene();
  sceneBuilder.build(scene);

  // 3. Player + camera
  const domElement = engine.getDomElement();
  fpsCamera.init(domElement);
  player.init(scene, sceneBuilder.getWalls());

  // Place player at first spawn point
  const spawns = sceneBuilder.getSpawnPoints();
  if (spawns.length > 0) {
    player.setPosition(spawns[0]);
  }

  // 4. Input
  input.init();

  // 5. Tell engine which camera to render with
  engine.setCamera(fpsCamera.getCamera());

  // 6. Game loop callback
  engine.onUpdate((delta) => {
    player.update(delta, input);
  });

  // 7. Pointer-lock click-to-start
  const overlay = createOverlay();
  overlay.addEventListener('click', () => {
    fpsCamera.lock();
  });

  document.addEventListener('pointerlockchange', () => {
    overlay.style.display = fpsCamera.isLocked() ? 'none' : 'flex';
  });

  // 8. Start!
  engine.start();
}

/** Simple full-screen overlay prompting the user to click */
function createOverlay(): HTMLDivElement {
  const overlay = document.createElement('div');
  overlay.id = 'start-overlay';
  Object.assign(overlay.style, {
    position: 'fixed',
    inset: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0,0,0,0.75)',
    color: '#fff',
    fontFamily: 'monospace',
    fontSize: '24px',
    cursor: 'pointer',
    zIndex: '1000',
    userSelect: 'none',
  });
  overlay.textContent = '🎯 Click to Start';
  document.body.appendChild(overlay);
  return overlay;
}

// Remove default margin/padding
const style = document.createElement('style');
style.textContent = `* { margin: 0; padding: 0; } body { overflow: hidden; }`;
document.head.appendChild(style);

main();
