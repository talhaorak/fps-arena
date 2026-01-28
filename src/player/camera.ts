import * as THREE from 'three';
import { GAME } from '../constants';

export class FPSCamera {
  private camera: THREE.PerspectiveCamera;
  private pitch = 0;
  private yaw = 0;
  private bobTimer = 0;
  private bobAmount = 0;
  private locked = false;

  constructor() {
    this.camera = new THREE.PerspectiveCamera(
      GAME.FOV,
      window.innerWidth / window.innerHeight,
      GAME.NEAR_CLIP,
      GAME.FAR_CLIP
    );
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    });
  }

  init(domElement: HTMLElement) {
    domElement.addEventListener('click', () => {
      if (!this.locked) domElement.requestPointerLock();
    });
    document.addEventListener('pointerlockchange', () => {
      this.locked = !!document.pointerLockElement;
    });
  }

  update(delta: number, isMoving: boolean, mouseDelta: { x: number; y: number }) {
    if (!this.locked) return;

    this.yaw -= mouseDelta.x * GAME.MOUSE_SENSITIVITY;
    this.pitch -= mouseDelta.y * GAME.MOUSE_SENSITIVITY;
    this.pitch = Math.max(-Math.PI * 85 / 180, Math.min(Math.PI * 85 / 180, this.pitch));

    const euler = new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ');
    this.camera.quaternion.setFromEuler(euler);

    // Head bob
    if (isMoving) {
      this.bobTimer += delta * 10;
      this.bobAmount = Math.sin(this.bobTimer) * 0.05;
    } else {
      this.bobAmount *= 0.9;
      this.bobTimer = 0;
    }
  }

  setPosition(pos: THREE.Vector3) {
    this.camera.position.set(pos.x, pos.y + GAME.PLAYER_HEIGHT + this.bobAmount, pos.z);
  }
  
  applyShake(offsetX: number, offsetY: number) {
    // Apply shake offset to camera rotation
    const euler = new THREE.Euler(
      this.pitch + offsetY * 0.01,
      this.yaw + offsetX * 0.01,
      0,
      'YXZ'
    );
    this.camera.quaternion.setFromEuler(euler);
  }

  getCamera(): THREE.PerspectiveCamera { return this.camera; }
  isLocked(): boolean { return this.locked; }
  getYaw(): number { return this.yaw; }
  getDirection(): THREE.Vector3 {
    const dir = new THREE.Vector3();
    this.camera.getWorldDirection(dir);
    return dir;
  }
  lock() { document.body.requestPointerLock(); }
  unlock() { document.exitPointerLock(); }
}
