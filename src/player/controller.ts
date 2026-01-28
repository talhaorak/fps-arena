import * as THREE from 'three';
import { GAME } from '../constants';
import { InputManager } from './input';
import { FPSCamera } from './camera';
import { applyGravity, checkFloor, checkWallCollisions } from '../core/physics';

export class PlayerController {
  private position = new THREE.Vector3(0, 0, 0);
  private velocity = new THREE.Vector3();
  private grounded = false;
  private health: number = GAME.PLAYER_MAX_HEALTH as number;
  private walls: THREE.Mesh[] = [];
  private scene!: THREE.Scene;

  init(scene: THREE.Scene, walls: THREE.Mesh[], spawnPos?: THREE.Vector3) {
    this.scene = scene;
    this.walls = walls;
    if (spawnPos) this.position.copy(spawnPos);
  }

  update(delta: number, input: InputManager, camera: FPSCamera) {
    if (!camera.isLocked()) return;

    // Movement direction relative to camera
    const forward = new THREE.Vector3(0, 0, -1);
    const right = new THREE.Vector3(1, 0, 0);
    const yaw = camera.getYaw();
    forward.applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
    right.applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);

    const moveDir = new THREE.Vector3();
    if (input.isKeyDown('KeyW')) moveDir.add(forward);
    if (input.isKeyDown('KeyS')) moveDir.sub(forward);
    if (input.isKeyDown('KeyD')) moveDir.add(right);
    if (input.isKeyDown('KeyA')) moveDir.sub(right);

    if (moveDir.length() > 0) moveDir.normalize();

    const speed = input.isKeyDown('ShiftLeft') ? GAME.PLAYER_SPRINT_SPEED : GAME.PLAYER_SPEED;
    this.velocity.x = moveDir.x * speed * delta;
    this.velocity.z = moveDir.z * speed * delta;

    // Jump
    if (input.isKeyDown('Space') && this.grounded) {
      this.velocity.y = GAME.PLAYER_JUMP_FORCE * delta * 3;
      this.grounded = false;
    }

    // Gravity
    applyGravity(this.velocity, delta, this.grounded);
    this.position.y += this.velocity.y * delta;

    // Wall collisions
    const newPos = checkWallCollisions(this.position, new THREE.Vector3(this.velocity.x, 0, this.velocity.z), this.walls);
    this.position.x = newPos.x;
    this.position.z = newPos.z;

    // Floor check
    const floor = checkFloor(this.position, this.scene);
    this.grounded = floor.grounded;
    if (this.grounded && this.position.y < floor.height) {
      this.position.y = floor.height;
      this.velocity.y = 0;
    }

    // Update camera position
    camera.setPosition(this.position);

    // Mouse look
    const mouseDelta = input.getMouseDelta();
    camera.update(delta, moveDir.length() > 0, mouseDelta);
    input.resetMouseDelta();
  }

  takeDamage(amount: number): boolean {
    this.health -= amount;
    if (this.health <= 0) { this.health = 0; return true; }
    return false;
  }
  
  heal(amount: number): void {
    this.health = Math.min(GAME.PLAYER_MAX_HEALTH, this.health + amount);
  }

  getPosition(): THREE.Vector3 { return this.position.clone(); }
  getVelocity(): THREE.Vector3 { return this.velocity.clone(); }
  isGrounded(): boolean { return this.grounded; }
  getHealth(): number { return this.health; }
  isMoving(): boolean { return this.velocity.x !== 0 || this.velocity.z !== 0; }
  reset(pos: THREE.Vector3) { this.position.copy(pos); this.velocity.set(0, 0, 0); this.health = GAME.PLAYER_MAX_HEALTH; }
}
