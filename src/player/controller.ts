import * as THREE from 'three';
import { GAME } from '../constants';
import { InputManager } from './input';
import { FPSCamera } from './camera';
import { Physics } from '../core/physics';

/**
 * PlayerController — WASD movement relative to camera, jumping,
 * gravity, and collision with the floor / walls.
 */
export class PlayerController {
  private position: THREE.Vector3 = new THREE.Vector3(0, GAME.PLAYER_HEIGHT, 0);
  private velocity: THREE.Vector3 = new THREE.Vector3();
  private grounded = false;
  private player: THREE.Object3D = new THREE.Object3D();
  private fpsCamera: FPSCamera;
  private walls: THREE.Mesh[] = [];
  private scene: THREE.Scene | null = null;

  constructor(fpsCamera: FPSCamera) {
    this.fpsCamera = fpsCamera;
    this.player.add(fpsCamera.getCamera());
    fpsCamera.getCamera().position.set(0, GAME.PLAYER_HEIGHT, 0);
  }

  /** Add the player object into the scene and store wall references */
  init(scene: THREE.Scene, walls: THREE.Mesh[] = []): void {
    this.scene = scene;
    this.walls = walls;
    scene.add(this.player);
    this.player.position.copy(this.position);
  }

  /** Per-frame update: read input, move, apply physics */
  update(delta: number, inputManager: InputManager): void {
    if (!this.scene) return;

    // ---- mouse look (only while locked) ----
    if (this.fpsCamera.isLocked()) {
      const md = inputManager.getMouseDelta();
      this.fpsCamera.applyMouseDelta(md.x, md.y);
      inputManager.resetMouseDelta();
    }

    // ---- movement direction ----
    const forward = new THREE.Vector3();
    const right   = new THREE.Vector3();
    const yaw     = this.fpsCamera.getYaw();

    forward.set(-Math.sin(yaw), 0, -Math.cos(yaw));
    right.set(Math.cos(yaw), 0, -Math.sin(yaw));

    const moveDir = new THREE.Vector3();

    if (inputManager.isKeyDown('w')) moveDir.add(forward);
    if (inputManager.isKeyDown('s')) moveDir.sub(forward);
    if (inputManager.isKeyDown('a')) moveDir.sub(right);
    if (inputManager.isKeyDown('d')) moveDir.add(right);

    if (moveDir.lengthSq() > 0) moveDir.normalize();

    // Sprint
    const speed = inputManager.isKeyDown('shift')
      ? GAME.PLAYER_SPRINT_SPEED
      : GAME.PLAYER_SPEED;

    // Horizontal velocity
    this.velocity.x = moveDir.x * speed;
    this.velocity.z = moveDir.z * speed;

    // ---- jump ----
    if (inputManager.isKeyDown(' ') && this.grounded) {
      this.velocity.y = GAME.PLAYER_JUMP_FORCE;
      this.grounded = false;
    }

    // ---- gravity ----
    Physics.applyGravity(this.velocity, delta, this.grounded);

    // ---- tentative new position ----
    const newPos = this.position.clone();
    newPos.x += this.velocity.x * delta;
    newPos.y += this.velocity.y * delta;
    newPos.z += this.velocity.z * delta;

    // ---- wall collisions (XZ only) ----
    const corrected = Physics.checkWallCollisions(newPos, this.velocity, this.walls);
    newPos.copy(corrected);

    // ---- floor check ----
    const floorY = Physics.checkFloor(newPos, this.scene);
    const feetY  = newPos.y - GAME.PLAYER_HEIGHT;

    if (feetY <= floorY) {
      newPos.y = floorY + GAME.PLAYER_HEIGHT;
      this.velocity.y = 0;
      this.grounded = true;
    } else {
      this.grounded = false;
    }

    // ---- commit position ----
    this.position.copy(newPos);
    this.player.position.copy(this.position);

    // ---- camera update ----
    const isMoving = moveDir.lengthSq() > 0 && this.grounded;
    this.fpsCamera.getCamera().position.set(0, GAME.PLAYER_HEIGHT, 0);
    this.fpsCamera.update(delta, isMoving, this.velocity);
  }

  getPosition(): THREE.Vector3 { return this.position.clone(); }
  getVelocity(): THREE.Vector3 { return this.velocity.clone(); }
  isGrounded(): boolean { return this.grounded; }
  getPlayer(): THREE.Object3D { return this.player; }
  getCamera(): FPSCamera { return this.fpsCamera; }

  /** Teleport the player to a given position */
  setPosition(pos: THREE.Vector3): void {
    this.position.copy(pos);
    this.position.y = pos.y + GAME.PLAYER_HEIGHT;
    this.player.position.copy(this.position);
  }
}
