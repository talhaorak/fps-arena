import * as THREE from 'three';

/**
 * InputManager — tracks keyboard and mouse state for the FPS controller.
 * Listens for WASD, Space, Shift, R, 1-3, Escape and mouse movement.
 */
export class InputManager {
  private keys: Set<string> = new Set();
  private mouseDelta: THREE.Vector2 = new THREE.Vector2();
  private boundKeyDown: (e: KeyboardEvent) => void;
  private boundKeyUp: (e: KeyboardEvent) => void;
  private boundMouseMove: (e: MouseEvent) => void;
  private initialized = false;

  constructor() {
    this.boundKeyDown = this.onKeyDown.bind(this);
    this.boundKeyUp = this.onKeyUp.bind(this);
    this.boundMouseMove = this.onMouseMove.bind(this);
  }

  /** Start listening for input events */
  init(): void {
    if (this.initialized) return;
    document.addEventListener('keydown', this.boundKeyDown);
    document.addEventListener('keyup', this.boundKeyUp);
    document.addEventListener('mousemove', this.boundMouseMove);
    this.initialized = true;
  }

  /** Remove all event listeners */
  dispose(): void {
    document.removeEventListener('keydown', this.boundKeyDown);
    document.removeEventListener('keyup', this.boundKeyUp);
    document.removeEventListener('mousemove', this.boundMouseMove);
    this.keys.clear();
    this.mouseDelta.set(0, 0);
    this.initialized = false;
  }

  /** Check whether a key is currently held down (case-insensitive) */
  isKeyDown(key: string): boolean {
    return this.keys.has(key.toLowerCase());
  }

  /** Get accumulated mouse movement since last reset */
  getMouseDelta(): THREE.Vector2 {
    return this.mouseDelta.clone();
  }

  /** Clear accumulated mouse delta — call once per frame after reading */
  resetMouseDelta(): void {
    this.mouseDelta.set(0, 0);
  }

  // ---- internal handlers ----

  private onKeyDown(e: KeyboardEvent): void {
    const key = e.key.toLowerCase();
    // Only track keys we care about
    const tracked = [
      'w', 'a', 's', 'd',
      ' ',          // Space
      'shift',
      'r',
      '1', '2', '3',
      'escape',
    ];
    if (tracked.includes(key)) {
      this.keys.add(key);
    }
  }

  private onKeyUp(e: KeyboardEvent): void {
    this.keys.delete(e.key.toLowerCase());
  }

  private onMouseMove(e: MouseEvent): void {
    // movementX/Y are only meaningful while pointer is locked,
    // but we accumulate regardless — camera checks lock state.
    this.mouseDelta.x += e.movementX;
    this.mouseDelta.y += e.movementY;
  }
}
