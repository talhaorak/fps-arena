import * as THREE from 'three';
import { GAME } from '../constants';

const PLAYER_RADIUS = 0.4; // approximate body radius for wall collision

const _raycaster = new THREE.Raycaster();
const _downDir   = new THREE.Vector3(0, -1, 0);

/**
 * Physics — static helpers for gravity, floor checking, and AABB wall collision.
 */
export class Physics {
  /**
   * Apply gravity to the velocity vector.
   * If the player is grounded we skip so velocity.y stays 0.
   */
  static applyGravity(velocity: THREE.Vector3, delta: number, isGrounded: boolean): void {
    if (!isGrounded) {
      velocity.y += GAME.GRAVITY * delta;
    }
  }

  /**
   * Cast a ray downward from `position` and return the Y coordinate
   * of the nearest floor surface (or 0 if nothing is hit).
   */
  static checkFloor(position: THREE.Vector3, scene: THREE.Scene): number {
    _raycaster.set(
      new THREE.Vector3(position.x, position.y, position.z),
      _downDir,
    );
    _raycaster.far = position.y + 10; // generous range

    const intersects = _raycaster.intersectObjects(scene.children, true);

    for (const hit of intersects) {
      // Skip non-mesh or invisible
      if (!(hit.object instanceof THREE.Mesh)) continue;
      // We consider anything roughly horizontal as floor
      if (hit.face) {
        const normal = hit.face.normal.clone();
        hit.object.updateMatrixWorld();
        normal.transformDirection(hit.object.matrixWorld);
        if (normal.y > 0.5) {
          return hit.point.y;
        }
      }
    }
    return 0; // default ground plane
  }

  /**
   * Simple AABB collision: push the player out of any wall mesh whose
   * bounding box they overlap with.  Returns the corrected position.
   */
  static checkWallCollisions(
    position: THREE.Vector3,
    velocity: THREE.Vector3,
    walls: THREE.Mesh[],
  ): THREE.Vector3 {
    const pos = position.clone();

    for (const wall of walls) {
      // Ensure bounding box is computed
      if (!wall.geometry.boundingBox) {
        wall.geometry.computeBoundingBox();
      }
      const bb = wall.geometry.boundingBox!.clone();
      bb.applyMatrix4(wall.matrixWorld);

      // Expand box by player radius
      const min = bb.min.clone().subScalar(PLAYER_RADIUS);
      const max = bb.max.clone().addScalar(PLAYER_RADIUS);

      // Check overlap (XZ + Y)
      if (
        pos.x > min.x && pos.x < max.x &&
        pos.z > min.z && pos.z < max.z &&
        pos.y > min.y && pos.y < max.y
      ) {
        // Find smallest penetration axis and push out
        const overlapXmin = pos.x - min.x;
        const overlapXmax = max.x - pos.x;
        const overlapZmin = pos.z - min.z;
        const overlapZmax = max.z - pos.z;

        const minOverlap = Math.min(overlapXmin, overlapXmax, overlapZmin, overlapZmax);

        if (minOverlap === overlapXmin) {
          pos.x = min.x;
          velocity.x = 0;
        } else if (minOverlap === overlapXmax) {
          pos.x = max.x;
          velocity.x = 0;
        } else if (minOverlap === overlapZmin) {
          pos.z = min.z;
          velocity.z = 0;
        } else {
          pos.z = max.z;
          velocity.z = 0;
        }
      }
    }

    return pos;
  }
}
