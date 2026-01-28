import * as THREE from 'three';

export class GameEngine {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private running = false;
  private clock = new THREE.Clock();
  private updateCallbacks: ((delta: number) => void)[] = [];

  constructor() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();

    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  init() {
    this.clock.start();
  }

  start(camera: THREE.Camera) {
    this.running = true;
    const loop = () => {
      if (!this.running) return;
      requestAnimationFrame(loop);
      const delta = Math.min(this.clock.getDelta(), 0.05); // cap at 50ms
      for (const cb of this.updateCallbacks) cb(delta);
      this.renderer.render(this.scene, camera);
    };
    loop();
  }

  stop() { this.running = false; }
  onUpdate(cb: (delta: number) => void) { this.updateCallbacks.push(cb); }
  getRenderer(): THREE.WebGLRenderer { return this.renderer; }
  getScene(): THREE.Scene { return this.scene; }
  getDomElement(): HTMLElement { return this.renderer.domElement; }
}
