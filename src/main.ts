// ============================================
// MAIN ENTRY POINT
// Imports all modules and starts the game
// ============================================
// This file will be the integration point.
// Each agent works on their module independently.
// Orchestrator merges and wires everything here.

import * as THREE from 'three';
import { GAME } from './constants';

console.log('[FPS Game] Initializing...');
console.log('[FPS Game] Three.js version:', THREE.REVISION);
console.log('[FPS Game] Target FPS:', GAME.TARGET_FPS);

// Placeholder — will be replaced during integration
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);
scene.fog = new THREE.Fog(0x1a1a2e, 10, GAME.FAR_CLIP);

const camera = new THREE.PerspectiveCamera(
  GAME.FOV,
  window.innerWidth / window.innerHeight,
  GAME.NEAR_CLIP,
  GAME.FAR_CLIP
);
camera.position.set(0, GAME.PLAYER_HEIGHT, 0);

// Temporary: basic lighting + ground
const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(10, 20, 10);
dirLight.castShadow = true;
scene.add(dirLight);

const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(GAME.WORLD_SIZE * 2, GAME.WORLD_SIZE * 2),
  new THREE.MeshStandardMaterial({ color: 0x333333 })
);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

// Temporary game loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

console.log('[FPS Game] Scaffold ready. Awaiting module integration.');
