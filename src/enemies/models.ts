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
// RUNNER — Fast, agile enemy (smaller, hunched)
// ============================================
export function createRunnerModel(): THREE.Group {
  const group = new THREE.Group();
  
  const fastSkin = new THREE.MeshStandardMaterial({ 
    color: 0x226622, roughness: 0.6, metalness: 0.1 
  });
  const darkGreen = new THREE.MeshStandardMaterial({ 
    color: 0x113311, roughness: 0.7, metalness: 0.05 
  });
  
  // Hunched torso (leaning forward)
  const torso = new THREE.Mesh(
    new THREE.BoxGeometry(0.35, 0.4, 0.25),
    fastSkin
  );
  torso.position.set(0, 0.8, 0.1);
  torso.rotation.x = 0.4; // Leaning forward
  group.add(torso);
  
  // Small head
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.12, 10, 8),
    fastSkin
  );
  head.position.set(0, 1.1, 0.2);
  group.add(head);
  
  // Large glowing eyes (bug-like)
  const eyeGeo = new THREE.SphereGeometry(0.05, 8, 8);
  const eyeMat = new THREE.MeshStandardMaterial({ 
    color: 0x00ff00, emissive: 0x00ff00, emissiveIntensity: 3.0 
  });
  const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
  leftEye.position.set(-0.06, 1.12, 0.28);
  group.add(leftEye);
  const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
  rightEye.position.set(0.06, 1.12, 0.28);
  group.add(rightEye);
  
  // Long arms (reaching forward)
  const armGeo = new THREE.CylinderGeometry(0.04, 0.03, 0.4, 6);
  const leftArm = new THREE.Mesh(armGeo, fastSkin);
  leftArm.position.set(-0.25, 0.7, 0.2);
  leftArm.rotation.z = 0.8;
  leftArm.rotation.x = -0.5;
  group.add(leftArm);
  const rightArm = new THREE.Mesh(armGeo, fastSkin);
  rightArm.position.set(0.25, 0.7, 0.2);
  rightArm.rotation.z = -0.8;
  rightArm.rotation.x = -0.5;
  group.add(rightArm);
  
  // Claws
  const clawGeo = new THREE.ConeGeometry(0.02, 0.1, 4);
  for (let i = 0; i < 3; i++) {
    const lClaw = new THREE.Mesh(clawGeo, darkGreen);
    lClaw.rotation.x = Math.PI / 2;
    lClaw.position.set(-0.4 - i * 0.025, 0.5, 0.35);
    group.add(lClaw);
    const rClaw = new THREE.Mesh(clawGeo, darkGreen);
    rClaw.rotation.x = Math.PI / 2;
    rClaw.position.set(0.4 + i * 0.025, 0.5, 0.35);
    group.add(rClaw);
  }
  
  // Digitigrade legs (bent backward)
  const thighGeo = new THREE.CylinderGeometry(0.06, 0.05, 0.25, 6);
  const leftThigh = new THREE.Mesh(thighGeo, fastSkin);
  leftThigh.position.set(-0.1, 0.5, -0.05);
  leftThigh.rotation.x = 0.3;
  group.add(leftThigh);
  const rightThigh = new THREE.Mesh(thighGeo, fastSkin);
  rightThigh.position.set(0.1, 0.5, -0.05);
  rightThigh.rotation.x = 0.3;
  group.add(rightThigh);
  
  const shinGeo = new THREE.CylinderGeometry(0.04, 0.03, 0.25, 6);
  const leftShin = new THREE.Mesh(shinGeo, fastSkin);
  leftShin.position.set(-0.1, 0.2, 0.05);
  leftShin.rotation.x = -0.5;
  group.add(leftShin);
  const rightShin = new THREE.Mesh(shinGeo, fastSkin);
  rightShin.position.set(0.1, 0.2, 0.05);
  rightShin.rotation.x = -0.5;
  group.add(rightShin);
  
  // Enable shadows
  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  
  return group;
}

// ============================================
// TANK — Heavy armored enemy (big, slow)
// ============================================
export function createTankModel(): THREE.Group {
  const group = new THREE.Group();
  
  const tankSkin = new THREE.MeshStandardMaterial({ 
    color: 0x553333, roughness: 0.8, metalness: 0.1 
  });
  const armor = new THREE.MeshStandardMaterial({ 
    color: 0x222222, roughness: 0.3, metalness: 0.7 
  });
  const glow = new THREE.MeshStandardMaterial({ 
    color: 0xff3300, emissive: 0xff2200, emissiveIntensity: 2.0 
  });
  
  // Massive torso
  const torso = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 0.7, 0.5),
    tankSkin
  );
  torso.position.set(0, 1.2, 0);
  group.add(torso);
  
  // Heavy chest armor
  const chestPlate = new THREE.Mesh(
    new THREE.BoxGeometry(0.75, 0.5, 0.15),
    armor
  );
  chestPlate.position.set(0, 1.25, 0.3);
  group.add(chestPlate);
  
  // Shoulder pads
  const shoulderGeo = new THREE.SphereGeometry(0.2, 8, 6, 0, Math.PI);
  const leftShoulder = new THREE.Mesh(shoulderGeo, armor);
  leftShoulder.rotation.z = Math.PI / 2;
  leftShoulder.position.set(-0.5, 1.4, 0);
  group.add(leftShoulder);
  const rightShoulder = new THREE.Mesh(shoulderGeo, armor);
  rightShoulder.rotation.z = -Math.PI / 2;
  rightShoulder.position.set(0.5, 1.4, 0);
  group.add(rightShoulder);
  
  // Small armored head
  const head = new THREE.Mesh(
    new THREE.BoxGeometry(0.25, 0.25, 0.2),
    armor
  );
  head.position.set(0, 1.7, 0.05);
  group.add(head);
  
  // Glowing visor slit
  const visor = new THREE.Mesh(
    new THREE.BoxGeometry(0.2, 0.04, 0.05),
    glow
  );
  visor.position.set(0, 1.7, 0.15);
  group.add(visor);
  
  // Thick arms
  const armGeo = new THREE.CylinderGeometry(0.12, 0.1, 0.35, 8);
  const leftArm = new THREE.Mesh(armGeo, tankSkin);
  leftArm.position.set(-0.55, 1.0, 0);
  group.add(leftArm);
  const rightArm = new THREE.Mesh(armGeo, tankSkin);
  rightArm.position.set(0.55, 1.0, 0);
  group.add(rightArm);
  
  // Arm bracers
  const bracerGeo = new THREE.CylinderGeometry(0.14, 0.12, 0.15, 8);
  const leftBracer = new THREE.Mesh(bracerGeo, armor);
  leftBracer.position.set(-0.55, 0.85, 0.05);
  group.add(leftBracer);
  const rightBracer = new THREE.Mesh(bracerGeo, armor);
  rightBracer.position.set(0.55, 0.85, 0.05);
  group.add(rightBracer);
  
  // Massive fists
  const fistGeo = new THREE.BoxGeometry(0.18, 0.2, 0.15);
  const leftFist = new THREE.Mesh(fistGeo, tankSkin);
  leftFist.position.set(-0.55, 0.65, 0.1);
  group.add(leftFist);
  const rightFist = new THREE.Mesh(fistGeo, tankSkin);
  rightFist.position.set(0.55, 0.65, 0.1);
  group.add(rightFist);
  
  // Belt with pouches
  const belt = new THREE.Mesh(
    new THREE.BoxGeometry(0.85, 0.12, 0.55),
    armor
  );
  belt.position.set(0, 0.8, 0);
  group.add(belt);
  
  // Thick legs
  const legGeo = new THREE.CylinderGeometry(0.14, 0.12, 0.4, 8);
  const leftLeg = new THREE.Mesh(legGeo, tankSkin);
  leftLeg.position.set(-0.2, 0.5, 0);
  group.add(leftLeg);
  const rightLeg = new THREE.Mesh(legGeo, tankSkin);
  rightLeg.position.set(0.2, 0.5, 0);
  group.add(rightLeg);
  
  // Shin guards
  const shinGuardGeo = new THREE.BoxGeometry(0.16, 0.25, 0.1);
  const leftGuard = new THREE.Mesh(shinGuardGeo, armor);
  leftGuard.position.set(-0.2, 0.25, 0.1);
  group.add(leftGuard);
  const rightGuard = new THREE.Mesh(shinGuardGeo, armor);
  rightGuard.position.set(0.2, 0.25, 0.1);
  group.add(rightGuard);
  
  // Heavy boots
  const bootGeo = new THREE.BoxGeometry(0.18, 0.1, 0.25);
  const leftBoot = new THREE.Mesh(bootGeo, armor);
  leftBoot.position.set(-0.2, 0.0, 0.05);
  group.add(leftBoot);
  const rightBoot = new THREE.Mesh(bootGeo, armor);
  rightBoot.position.set(0.2, 0.0, 0.05);
  group.add(rightBoot);
  
  // Enable shadows
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
