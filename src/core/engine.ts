import * as THREE from 'three';
import { GAME } from '../constants';

export type UpdateCallback = (delta: number) => void;

/**
 * GameEngine — sets up the Three.js renderer, scene, and runs
 * the main game loop with requestAnimationFrame + delta time.
 */
export class GameEngine {
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera: THREE.Camera | null = null;
  private callbacks: UpdateCallback[] = [];
  private running = false;
  private lastTime = 0;
  private rafId = 0;

  /** Create renderer + scene, attach to DOM */
  init(): void {
    // ---- renderer ----
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setClearColor(0x111122);
    document.body.appendChild(this.renderer.domElement);

    // ---- scene ----
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0x111122, 20, 80);

    // ---- resize handler ----
    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  /** Set the active camera (call after player is created) */
  setCamera(camera: THREE.Camera): void {
    this.camera = camera;
  }

  /** Start the game loop */
  start(): void {
    if (this.running) return;
    this.running = true;
    this.lastTime = performance.now();
    this.loop();
  }

  /** Stop the game loop */
  stop(): void {
    this.running = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = 0;
    }
  }

  /** Register a callback that fires every frame with delta (seconds) */
  onUpdate(cb: UpdateCallback): void {
    this.callbacks.push(cb);
  }

  getRenderer(): THREE.WebGLRenderer { return this.renderer; }
  getScene(): THREE.Scene { return this.scene; }
  getDomElement(): HTMLElement { return this.renderer.domElement; }

  // ---- private ----

  private loop = (): void => {
    if (!this.running) return;
    this.rafId = requestAnimationFrame(this.loop);

    const now = performance.now();
    let delta = (now - this.lastTime) / 1000;
    this.lastTime = now;

    // Clamp delta to avoid spiral-of-death when tab is backgrounded
    if (delta > 0.1) delta = 0.1;

    // Fire all update callbacks
    for (const cb of this.callbacks) {
      cb(delta);
    }

    // Render
    if (this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  };
}
