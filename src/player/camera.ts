import * as THREE from 'three';
import { GAME } from '../constants';

const PITCH_LIMIT = THREE.MathUtils.degToRad(85);
const HEAD_BOB_SPEED = 14;     // oscillation speed while walking
const HEAD_BOB_AMOUNT = 0.04;  // vertical displacement

/**
 * FPSCamera — first-person camera with pointer-lock mouse look,
 * pitch clamping ±85°, and subtle head bob while walking.
 */
export class FPSCamera {
  private camera: THREE.PerspectiveCamera;
  private yaw = 0;   // rotation around Y axis (left / right)
  private pitch = 0;  // rotation around X axis (up / down)
  private bobTimer = 0;
  private domElement: HTMLElement | null = null;

  constructor() {
    this.camera = new THREE.PerspectiveCamera(
      GAME.FOV,
      window.innerWidth / window.innerHeight,
      GAME.NEAR_CLIP,
      GAME.FAR_CLIP,
    );
    this.camera.position.y = GAME.PLAYER_HEIGHT;
  }

  /** Attach to a DOM element and wire up PointerLock + resize */
  init(domElement: HTMLElement): void {
    this.domElement = domElement;

    // Handle resize
    const onResize = () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);
  }

  /**
   * Update camera orientation and head bob each frame.
   * @param delta  — seconds since last frame
   * @param isMoving — true when player is walking (enables head bob)
   * @param velocity — current player velocity (length used for bob intensity)
   */
  update(delta: number, isMoving: boolean, velocity: THREE.Vector3): void {
    // ---- head bob ----
    if (isMoving) {
      const speed = new THREE.Vector2(velocity.x, velocity.z).length();
      this.bobTimer += delta * HEAD_BOB_SPEED * (speed / GAME.PLAYER_SPEED);
    } else {
      // Smoothly return to 0
      this.bobTimer = 0;
    }
    const bobOffset = isMoving ? Math.sin(this.bobTimer) * HEAD_BOB_AMOUNT : 0;

    // ---- apply rotation via quaternion ----
    const euler = new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ');
    this.camera.quaternion.setFromEuler(euler);

    // Apply bob offset to camera Y (relative to player height, set externally)
    this.camera.position.y =
      this.camera.position.y; // kept as-is; engine sets absolute Y
    // We add bob as a local offset
    this.camera.position.y += bobOffset;
  }

  /** Apply raw mouse deltas — call before update() */
  applyMouseDelta(dx: number, dy: number): void {
    this.yaw   -= dx * GAME.MOUSE_SENSITIVITY;
    this.pitch -= dy * GAME.MOUSE_SENSITIVITY;
    this.pitch  = THREE.MathUtils.clamp(this.pitch, -PITCH_LIMIT, PITCH_LIMIT);
  }

  /** Get the underlying THREE.PerspectiveCamera */
  getCamera(): THREE.PerspectiveCamera {
    return this.camera;
  }

  /** Request pointer lock */
  lock(): void {
    this.domElement?.requestPointerLock();
  }

  /** Exit pointer lock */
  unlock(): void {
    document.exitPointerLock();
  }

  /** Whether the pointer is currently locked */
  isLocked(): boolean {
    return document.pointerLockElement === this.domElement;
  }

  /** Current yaw angle (used by PlayerController for movement direction) */
  getYaw(): number {
    return this.yaw;
  }
}
