import * as THREE from 'three';
import { GAME } from '../constants';

const raycaster = new THREE.Raycaster();
const downDir = new THREE.Vector3(0, -1, 0);

export function applyGravity(velocity: THREE.Vector3, delta: number, isGrounded: boolean): void {
  if (!isGrounded) {
    velocity.y += GAME.GRAVITY * delta;
  }
}

export function checkFloor(position: THREE.Vector3, scene: THREE.Scene): { grounded: boolean; height: number } {
  raycaster.set(new THREE.Vector3(position.x, position.y + 1, position.z), downDir);
  raycaster.far = 3;
  const hits = raycaster.intersectObjects(scene.children, true);
  for (const hit of hits) {
    if (hit.object.userData.isFloor || hit.object.userData.isWall) {
      const groundY = hit.point.y;
      if (position.y - groundY < 0.1) {
        return { grounded: true, height: groundY };
      }
    }
  }
  // Default floor at y=0
  if (position.y <= 0.01) {
    return { grounded: true, height: 0 };
  }
  return { grounded: false, height: 0 };
}

export function checkWallCollisions(
  position: THREE.Vector3,
  velocity: THREE.Vector3,
  walls: THREE.Mesh[]
): THREE.Vector3 {
  const newPos = position.clone().add(velocity);
  const playerRadius = 0.4;
  
  for (const wall of walls) {
    if (!wall.geometry.boundingBox) wall.geometry.computeBoundingBox();
    const box = wall.geometry.boundingBox!.clone();
    box.applyMatrix4(wall.matrixWorld);
    
    // Expand box by player radius
    box.min.x -= playerRadius;
    box.min.z -= playerRadius;
    box.max.x += playerRadius;
    box.max.z += playerRadius;

    if (newPos.x > box.min.x && newPos.x < box.max.x &&
        newPos.z > box.min.z && newPos.z < box.max.z &&
        newPos.y < box.max.y && newPos.y + GAME.PLAYER_HEIGHT > box.min.y) {
      
      // Push out along smallest penetration axis
      const dx1 = newPos.x - box.min.x;
      const dx2 = box.max.x - newPos.x;
      const dz1 = newPos.z - box.min.z;
      const dz2 = box.max.z - newPos.z;
      
      const minD = Math.min(dx1, dx2, dz1, dz2);
      if (minD === dx1) newPos.x = box.min.x;
      else if (minD === dx2) newPos.x = box.max.x;
      else if (minD === dz1) newPos.z = box.min.z;
      else newPos.z = box.max.z;
    }
  }
  
  return newPos;
}
