import * as THREE from 'three';

// ============================================
// Detailed Enemy Models — Humanoid creatures
// ============================================

// Shared materials
const materials = {
  skin: new THREE.MeshStandardMaterial({ 
    color: 0x882222, 
    roughness: 0.7, 
    metalness: 0.1,
  }),
  darkSkin: new THREE.MeshStandardMaterial({ 
    color: 0x551111, 
    roughness: 0.8, 
    metalness: 0.05,
  }),
  armor: new THREE.MeshStandardMaterial({ 
    color: 0x333333, 
    roughness: 0.4, 
    metalness: 0.6,
  }),
  cloth: new THREE.MeshStandardMaterial({ 
    color: 0x1a1a1a, 
    roughness: 0.9, 
    metalness: 0.0,
  }),
  eyes: new THREE.MeshStandardMaterial({ 
    color: 0xffff00, 
    emissive: 0xffcc00, 
    emissiveIntensity: 2.0,
  }),
  teeth: new THREE.MeshStandardMaterial({ 
    color: 0xccccaa, 
    roughness: 0.3, 
    metalness: 0.1,
  }),
  claws: new THREE.MeshStandardMaterial({ 
    color: 0x111111, 
    roughness: 0.2, 
    metalness: 0.3,
  }),
};

// ============================================
// GRUNT — Basic humanoid enemy
// ============================================
export function createGruntModel(): THREE.Group {
  const group = new THREE.Group();
  
  // === TORSO ===
  // Main chest
  const chest = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.55, 0.3),
    materials.skin
  );
  chest.position.set(0, 1.1, 0);
  group.add(chest);
  
  // Chest armor plate
  const chestPlate = new THREE.Mesh(
    new THREE.BoxGeometry(0.4, 0.35, 0.08),
    materials.armor
  );
  chestPlate.position.set(0, 1.15, 0.16);
  group.add(chestPlate);
  
  // Belly
  const belly = new THREE.Mesh(
    new THREE.SphereGeometry(0.22, 12, 10),
    materials.skin
  );
  belly.scale.set(1, 1.2, 0.8);
  belly.position.set(0, 0.75, 0.02);
  group.add(belly);
  
  // === HEAD ===
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.18, 12, 10),
    materials.skin
  );
  head.scale.set(1, 1.1, 0.9);
  head.position.set(0, 1.55, 0);
  group.add(head);
  
  // Brow ridge
  const browRidge = new THREE.Mesh(
    new THREE.BoxGeometry(0.25, 0.06, 0.1),
    materials.darkSkin
  );
  browRidge.position.set(0, 1.62, 0.12);
  group.add(browRidge);
  
  // Eyes
  const eyeGeo = new THREE.SphereGeometry(0.035, 8, 8);
  const leftEye = new THREE.Mesh(eyeGeo, materials.eyes);
  leftEye.position.set(-0.07, 1.57, 0.14);
  group.add(leftEye);
  
  const rightEye = new THREE.Mesh(eyeGeo, materials.eyes);
  rightEye.position.set(0.07, 1.57, 0.14);
  group.add(rightEye);
  
  // Nose
  const nose = new THREE.Mesh(
    new THREE.ConeGeometry(0.04, 0.08, 6),
    materials.darkSkin
  );
  nose.rotation.x = Math.PI / 2;
  nose.position.set(0, 1.5, 0.18);
  group.add(nose);
  
  // Mouth/jaw
  const jaw = new THREE.Mesh(
    new THREE.BoxGeometry(0.14, 0.08, 0.1),
    materials.darkSkin
  );
  jaw.position.set(0, 1.4, 0.12);
  group.add(jaw);
  
  // Teeth (jagged)
  for (let i = 0; i < 5; i++) {
    const tooth = new THREE.Mesh(
      new THREE.ConeGeometry(0.012, 0.03, 4),
      materials.teeth
    );
    tooth.rotation.x = Math.PI;
    tooth.position.set(-0.05 + i * 0.025, 1.43, 0.16);
    group.add(tooth);
  }
  
  // Ears (pointed)
  const earGeo = new THREE.ConeGeometry(0.04, 0.12, 4);
  const leftEar = new THREE.Mesh(earGeo, materials.skin);
  leftEar.rotation.z = 0.5;
  leftEar.rotation.x = 0.2;
  leftEar.position.set(-0.18, 1.6, 0);
  group.add(leftEar);
  
  const rightEar = new THREE.Mesh(earGeo, materials.skin);
  rightEar.rotation.z = -0.5;
  rightEar.rotation.x = 0.2;
  rightEar.position.set(0.18, 1.6, 0);
  group.add(rightEar);
  
  // === ARMS ===
  // Shoulders
  const shoulderGeo = new THREE.SphereGeometry(0.1, 8, 8);
  const leftShoulder = new THREE.Mesh(shoulderGeo, materials.skin);
  leftShoulder.position.set(-0.32, 1.25, 0);
  group.add(leftShoulder);
  
  const rightShoulder = new THREE.Mesh(shoulderGeo, materials.skin);
  rightShoulder.position.set(0.32, 1.25, 0);
  group.add(rightShoulder);
  
  // Shoulder armor
  const shoulderArmorGeo = new THREE.SphereGeometry(0.08, 8, 6, 0, Math.PI);
  const leftShoulderArmor = new THREE.Mesh(shoulderArmorGeo, materials.armor);
  leftShoulderArmor.rotation.z = Math.PI / 2;
  leftShoulderArmor.position.set(-0.35, 1.28, 0);
  group.add(leftShoulderArmor);
  
  const rightShoulderArmor = new THREE.Mesh(shoulderArmorGeo, materials.armor);
  rightShoulderArmor.rotation.z = -Math.PI / 2;
  rightShoulderArmor.position.set(0.35, 1.28, 0);
  group.add(rightShoulderArmor);
  
  // Upper arms
  const upperArmGeo = new THREE.CylinderGeometry(0.07, 0.06, 0.25, 8);
  const leftUpperArm = new THREE.Mesh(upperArmGeo, materials.skin);
  leftUpperArm.position.set(-0.38, 1.05, 0);
  leftUpperArm.rotation.z = 0.3;
  group.add(leftUpperArm);
  
  const rightUpperArm = new THREE.Mesh(upperArmGeo, materials.skin);
  rightUpperArm.position.set(0.38, 1.05, 0);
  rightUpperArm.rotation.z = -0.3;
  group.add(rightUpperArm);
  
  // Forearms
  const forearmGeo = new THREE.CylinderGeometry(0.06, 0.05, 0.25, 8);
  const leftForearm = new THREE.Mesh(forearmGeo, materials.skin);
  leftForearm.position.set(-0.45, 0.8, 0.05);
  leftForearm.rotation.z = 0.2;
  leftForearm.rotation.x = -0.3;
  group.add(leftForearm);
  
  const rightForearm = new THREE.Mesh(forearmGeo, materials.skin);
  rightForearm.position.set(0.45, 0.8, 0.05);
  rightForearm.rotation.z = -0.2;
  rightForearm.rotation.x = -0.3;
  group.add(rightForearm);
  
  // Hands
  const handGeo = new THREE.BoxGeometry(0.08, 0.12, 0.04);
  const leftHand = new THREE.Mesh(handGeo, materials.darkSkin);
  leftHand.position.set(-0.5, 0.6, 0.1);
  group.add(leftHand);
  
  const rightHand = new THREE.Mesh(handGeo, materials.darkSkin);
  rightHand.position.set(0.5, 0.6, 0.1);
  group.add(rightHand);
  
  // Claws (3 per hand)
  const clawGeo = new THREE.ConeGeometry(0.015, 0.08, 4);
  for (let i = 0; i < 3; i++) {
    const leftClaw = new THREE.Mesh(clawGeo, materials.claws);
    leftClaw.rotation.x = Math.PI / 2 + 0.3;
    leftClaw.position.set(-0.48 - i * 0.02, 0.56, 0.16);
    group.add(leftClaw);
    
    const rightClaw = new THREE.Mesh(clawGeo, materials.claws);
    rightClaw.rotation.x = Math.PI / 2 + 0.3;
    rightClaw.position.set(0.48 + i * 0.02, 0.56, 0.16);
    group.add(rightClaw);
  }
  
  // === LEGS ===
  // Hips
  const hips = new THREE.Mesh(
    new THREE.BoxGeometry(0.4, 0.15, 0.25),
    materials.cloth
  );
  hips.position.set(0, 0.55, 0);
  group.add(hips);
  
  // Belt
  const belt = new THREE.Mesh(
    new THREE.BoxGeometry(0.42, 0.06, 0.27),
    materials.armor
  );
  belt.position.set(0, 0.6, 0);
  group.add(belt);
  
  // Thighs
  const thighGeo = new THREE.CylinderGeometry(0.1, 0.08, 0.3, 8);
  const leftThigh = new THREE.Mesh(thighGeo, materials.skin);
  leftThigh.position.set(-0.12, 0.35, 0);
  group.add(leftThigh);
  
  const rightThigh = new THREE.Mesh(thighGeo, materials.skin);
  rightThigh.position.set(0.12, 0.35, 0);
  group.add(rightThigh);
  
  // Shins
  const shinGeo = new THREE.CylinderGeometry(0.07, 0.06, 0.28, 8);
  const leftShin = new THREE.Mesh(shinGeo, materials.skin);
  leftShin.position.set(-0.12, 0.08, 0);
  group.add(leftShin);
  
  const rightShin = new THREE.Mesh(shinGeo, materials.skin);
  rightShin.position.set(0.12, 0.08, 0);
  group.add(rightShin);
  
  // Feet
  const footGeo = new THREE.BoxGeometry(0.1, 0.06, 0.18);
  const leftFoot = new THREE.Mesh(footGeo, materials.darkSkin);
  leftFoot.position.set(-0.12, -0.05, 0.04);
  group.add(leftFoot);
  
  const rightFoot = new THREE.Mesh(footGeo, materials.darkSkin);
  rightFoot.position.set(0.12, -0.05, 0.04);
  group.add(rightFoot);
  
  // Enable shadows for all meshes
  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  
  return group;
}

// ============================================
// Get all materials for death animation fade
// ============================================
export function getEnemyMaterials(group: THREE.Group): THREE.MeshStandardMaterial[] {
  const mats: THREE.MeshStandardMaterial[] = [];
  group.traverse((child) => {
    if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
      // Clone material so we can fade independently
      const clonedMat = child.material.clone();
      clonedMat.transparent = true;
      child.material = clonedMat;
      mats.push(clonedMat);
    }
  });
  return mats;
}
