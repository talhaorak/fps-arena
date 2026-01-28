import * as THREE from 'three';

// ============================================
// Detailed Weapon Models — Procedural geometry
// ============================================

// Shared materials
const materials = {
  gunMetal: new THREE.MeshStandardMaterial({ 
    color: 0x2a2a2a, 
    metalness: 0.9, 
    roughness: 0.25,
  }),
  darkMetal: new THREE.MeshStandardMaterial({ 
    color: 0x1a1a1a, 
    metalness: 0.85, 
    roughness: 0.3,
  }),
  grip: new THREE.MeshStandardMaterial({ 
    color: 0x1a1a1a, 
    metalness: 0.2, 
    roughness: 0.9,
  }),
  wood: new THREE.MeshStandardMaterial({ 
    color: 0x4a3020, 
    metalness: 0.1, 
    roughness: 0.8,
  }),
  chrome: new THREE.MeshStandardMaterial({ 
    color: 0x888888, 
    metalness: 1.0, 
    roughness: 0.1,
  }),
  rubber: new THREE.MeshStandardMaterial({ 
    color: 0x111111, 
    metalness: 0.0, 
    roughness: 1.0,
  }),
  sight: new THREE.MeshStandardMaterial({ 
    color: 0x00ff00, 
    emissive: 0x00ff00, 
    emissiveIntensity: 0.5,
  }),
};

// Helper to create beveled box (chamfered edges)
function createBeveledBox(w: number, h: number, d: number, bevel: number = 0.005): THREE.BufferGeometry {
  // Use regular box with small bevel simulation via scaling
  const geo = new THREE.BoxGeometry(w - bevel * 2, h - bevel * 2, d - bevel * 2, 2, 2, 2);
  return geo;
}

// ============================================
// PISTOL — M1911-style semi-automatic
// ============================================
export function createPistolModel(): THREE.Group {
  const group = new THREE.Group();
  
  // Main slide (top part)
  const slide = new THREE.Mesh(
    createBeveledBox(0.032, 0.04, 0.16),
    materials.gunMetal
  );
  slide.position.set(0, 0.02, -0.02);
  group.add(slide);
  
  // Slide serrations (rear grip lines)
  for (let i = 0; i < 6; i++) {
    const line = new THREE.Mesh(
      new THREE.BoxGeometry(0.034, 0.002, 0.004),
      materials.darkMetal
    );
    line.position.set(0, 0.02, 0.04 + i * 0.008);
    group.add(line);
  }
  
  // Barrel (visible through ejection port)
  const barrel = new THREE.Mesh(
    new THREE.CylinderGeometry(0.006, 0.006, 0.18, 12),
    materials.chrome
  );
  barrel.rotation.x = Math.PI / 2;
  barrel.position.set(0, 0.025, -0.09);
  group.add(barrel);
  
  // Muzzle
  const muzzle = new THREE.Mesh(
    new THREE.CylinderGeometry(0.008, 0.01, 0.02, 12),
    materials.gunMetal
  );
  muzzle.rotation.x = Math.PI / 2;
  muzzle.position.set(0, 0.025, -0.11);
  group.add(muzzle);
  
  // Frame (lower receiver)
  const frame = new THREE.Mesh(
    createBeveledBox(0.028, 0.035, 0.12),
    materials.gunMetal
  );
  frame.position.set(0, -0.015, 0.0);
  group.add(frame);
  
  // Trigger guard
  const guardShape = new THREE.Shape();
  guardShape.moveTo(0, 0);
  guardShape.lineTo(0.03, 0);
  guardShape.lineTo(0.03, -0.025);
  guardShape.quadraticCurveTo(0.015, -0.035, 0, -0.025);
  guardShape.lineTo(0, 0);
  
  const guardGeo = new THREE.ExtrudeGeometry(guardShape, { 
    depth: 0.006, 
    bevelEnabled: false 
  });
  const guard = new THREE.Mesh(guardGeo, materials.gunMetal);
  guard.rotation.y = Math.PI / 2;
  guard.position.set(0.003, -0.015, -0.035);
  group.add(guard);
  
  // Trigger
  const trigger = new THREE.Mesh(
    new THREE.BoxGeometry(0.003, 0.018, 0.008),
    materials.chrome
  );
  trigger.position.set(0, -0.025, -0.025);
  trigger.rotation.x = 0.3;
  group.add(trigger);
  
  // Grip (handle)
  const grip = new THREE.Mesh(
    createBeveledBox(0.026, 0.08, 0.035),
    materials.grip
  );
  grip.position.set(0, -0.06, 0.025);
  grip.rotation.x = 0.15;
  group.add(grip);
  
  // Grip texture (checkering pattern simulation)
  for (let i = 0; i < 5; i++) {
    const check = new THREE.Mesh(
      new THREE.BoxGeometry(0.001, 0.012, 0.028),
      materials.rubber
    );
    check.position.set(0.014, -0.04 - i * 0.014, 0.025);
    group.add(check);
    const check2 = check.clone();
    check2.position.x = -0.014;
    group.add(check2);
  }
  
  // Magazine base
  const magBase = new THREE.Mesh(
    new THREE.BoxGeometry(0.022, 0.008, 0.028),
    materials.chrome
  );
  magBase.position.set(0, -0.1, 0.025);
  group.add(magBase);
  
  // Front sight
  const frontSight = new THREE.Mesh(
    new THREE.BoxGeometry(0.004, 0.008, 0.004),
    materials.darkMetal
  );
  frontSight.position.set(0, 0.045, -0.07);
  group.add(frontSight);
  
  // Rear sight
  const rearSight = new THREE.Mesh(
    new THREE.BoxGeometry(0.02, 0.008, 0.006),
    materials.darkMetal
  );
  rearSight.position.set(0, 0.045, 0.05);
  group.add(rearSight);
  
  // Rear sight notch
  const notch = new THREE.Mesh(
    new THREE.BoxGeometry(0.006, 0.01, 0.008),
    materials.gunMetal
  );
  notch.position.set(0, 0.045, 0.05);
  group.add(notch);
  
  // Hammer
  const hammer = new THREE.Mesh(
    new THREE.BoxGeometry(0.004, 0.015, 0.01),
    materials.chrome
  );
  hammer.position.set(0, 0.03, 0.07);
  hammer.rotation.x = -0.5;
  group.add(hammer);
  
  // Safety
  const safety = new THREE.Mesh(
    new THREE.CylinderGeometry(0.004, 0.004, 0.02, 8),
    materials.darkMetal
  );
  safety.rotation.z = Math.PI / 2;
  safety.position.set(0.02, 0.01, 0.04);
  group.add(safety);
  
  // Position for viewmodel
  group.position.set(0.28, -0.26, -0.45);
  group.rotation.y = -0.05;
  
  return group;
}

// ============================================
// SHOTGUN — Pump-action tactical
// ============================================
export function createShotgunModel(): THREE.Group {
  const group = new THREE.Group();
  
  // Receiver (main body)
  const receiver = new THREE.Mesh(
    createBeveledBox(0.045, 0.055, 0.18),
    materials.gunMetal
  );
  receiver.position.set(0, 0, 0);
  group.add(receiver);
  
  // Barrel
  const barrel = new THREE.Mesh(
    new THREE.CylinderGeometry(0.018, 0.02, 0.45, 16),
    materials.darkMetal
  );
  barrel.rotation.x = Math.PI / 2;
  barrel.position.set(0, 0.015, -0.28);
  group.add(barrel);
  
  // Barrel interior (darker)
  const barrelInner = new THREE.Mesh(
    new THREE.CylinderGeometry(0.014, 0.014, 0.1, 12),
    materials.rubber
  );
  barrelInner.rotation.x = Math.PI / 2;
  barrelInner.position.set(0, 0.015, -0.51);
  group.add(barrelInner);
  
  // Magazine tube (under barrel)
  const magTube = new THREE.Mesh(
    new THREE.CylinderGeometry(0.014, 0.014, 0.35, 12),
    materials.gunMetal
  );
  magTube.rotation.x = Math.PI / 2;
  magTube.position.set(0, -0.02, -0.22);
  group.add(magTube);
  
  // Pump/forend
  const pump = new THREE.Mesh(
    createBeveledBox(0.05, 0.055, 0.1),
    materials.grip
  );
  pump.position.set(0, -0.005, -0.12);
  group.add(pump);
  
  // Pump ridges
  for (let i = 0; i < 8; i++) {
    const ridge = new THREE.Mesh(
      new THREE.BoxGeometry(0.052, 0.003, 0.008),
      materials.rubber
    );
    ridge.position.set(0, -0.005, -0.16 + i * 0.012);
    group.add(ridge);
  }
  
  // Ejection port
  const port = new THREE.Mesh(
    new THREE.BoxGeometry(0.035, 0.025, 0.04),
    materials.darkMetal
  );
  port.position.set(0.01, 0.025, 0.02);
  group.add(port);
  
  // Stock
  const stock = new THREE.Mesh(
    createBeveledBox(0.04, 0.065, 0.18),
    materials.grip
  );
  stock.position.set(0, -0.01, 0.17);
  group.add(stock);
  
  // Stock buttpad
  const buttpad = new THREE.Mesh(
    new THREE.BoxGeometry(0.042, 0.07, 0.015),
    materials.rubber
  );
  buttpad.position.set(0, -0.01, 0.27);
  group.add(buttpad);
  
  // Pistol grip
  const pistolGrip = new THREE.Mesh(
    createBeveledBox(0.03, 0.07, 0.04),
    materials.grip
  );
  pistolGrip.position.set(0, -0.055, 0.05);
  pistolGrip.rotation.x = 0.25;
  group.add(pistolGrip);
  
  // Trigger guard
  const tGuard = new THREE.Mesh(
    new THREE.TorusGeometry(0.02, 0.004, 8, 12, Math.PI),
    materials.gunMetal
  );
  tGuard.rotation.y = Math.PI / 2;
  tGuard.rotation.x = Math.PI;
  tGuard.position.set(0, -0.04, 0.0);
  group.add(tGuard);
  
  // Trigger
  const trigger = new THREE.Mesh(
    new THREE.BoxGeometry(0.004, 0.02, 0.01),
    materials.chrome
  );
  trigger.position.set(0, -0.035, 0.0);
  group.add(trigger);
  
  // Front bead sight
  const frontBead = new THREE.Mesh(
    new THREE.SphereGeometry(0.004, 8, 8),
    materials.sight
  );
  frontBead.position.set(0, 0.04, -0.45);
  group.add(frontBead);
  
  // Shell carrier
  const carrier = new THREE.Mesh(
    new THREE.BoxGeometry(0.03, 0.02, 0.06),
    materials.chrome
  );
  carrier.position.set(0, -0.04, 0.0);
  group.add(carrier);
  
  // Position for viewmodel
  group.position.set(0.25, -0.28, -0.4);
  group.rotation.y = -0.03;
  
  return group;
}

// ============================================
// ASSAULT RIFLE — M4-style carbine
// ============================================
export function createAssaultRifleModel(): THREE.Group {
  const group = new THREE.Group();
  
  // Upper receiver
  const upper = new THREE.Mesh(
    createBeveledBox(0.038, 0.045, 0.22),
    materials.gunMetal
  );
  upper.position.set(0, 0.01, 0);
  group.add(upper);
  
  // Lower receiver
  const lower = new THREE.Mesh(
    createBeveledBox(0.036, 0.04, 0.15),
    materials.gunMetal
  );
  lower.position.set(0, -0.025, 0.02);
  group.add(lower);
  
  // Barrel
  const barrel = new THREE.Mesh(
    new THREE.CylinderGeometry(0.01, 0.012, 0.35, 12),
    materials.darkMetal
  );
  barrel.rotation.x = Math.PI / 2;
  barrel.position.set(0, 0.015, -0.26);
  group.add(barrel);
  
  // Barrel shroud / handguard
  const handguard = new THREE.Mesh(
    new THREE.CylinderGeometry(0.022, 0.025, 0.18, 8),
    materials.grip
  );
  handguard.rotation.x = Math.PI / 2;
  handguard.position.set(0, 0.01, -0.15);
  group.add(handguard);
  
  // Handguard rails (picatinny style)
  const railGeo = new THREE.BoxGeometry(0.025, 0.006, 0.16);
  const topRail = new THREE.Mesh(railGeo, materials.gunMetal);
  topRail.position.set(0, 0.035, -0.14);
  group.add(topRail);
  
  // Rail teeth
  for (let i = 0; i < 12; i++) {
    const tooth = new THREE.Mesh(
      new THREE.BoxGeometry(0.026, 0.003, 0.004),
      materials.darkMetal
    );
    tooth.position.set(0, 0.04, -0.22 + i * 0.013);
    group.add(tooth);
  }
  
  // Flash hider / muzzle device
  const flashHider = new THREE.Mesh(
    new THREE.CylinderGeometry(0.012, 0.015, 0.04, 12),
    materials.darkMetal
  );
  flashHider.rotation.x = Math.PI / 2;
  flashHider.position.set(0, 0.015, -0.44);
  group.add(flashHider);
  
  // Flash hider slots
  for (let i = 0; i < 4; i++) {
    const slot = new THREE.Mesh(
      new THREE.BoxGeometry(0.004, 0.03, 0.02),
      materials.rubber
    );
    slot.position.set(
      Math.cos(i * Math.PI / 2) * 0.012, 
      0.015 + Math.sin(i * Math.PI / 2) * 0.012, 
      -0.44
    );
    group.add(slot);
  }
  
  // Gas block
  const gasBlock = new THREE.Mesh(
    new THREE.BoxGeometry(0.02, 0.025, 0.025),
    materials.gunMetal
  );
  gasBlock.position.set(0, 0.025, -0.25);
  group.add(gasBlock);
  
  // Front sight
  const frontSight = new THREE.Mesh(
    new THREE.BoxGeometry(0.006, 0.035, 0.015),
    materials.darkMetal
  );
  frontSight.position.set(0, 0.045, -0.25);
  group.add(frontSight);
  
  // Front sight post
  const sightPost = new THREE.Mesh(
    new THREE.CylinderGeometry(0.002, 0.002, 0.015, 6),
    materials.chrome
  );
  sightPost.position.set(0, 0.06, -0.25);
  group.add(sightPost);
  
  // Carry handle / rear sight
  const carryHandle = new THREE.Mesh(
    createBeveledBox(0.025, 0.03, 0.08),
    materials.gunMetal
  );
  carryHandle.position.set(0, 0.045, 0.04);
  group.add(carryHandle);
  
  // Charging handle
  const chargingHandle = new THREE.Mesh(
    new THREE.BoxGeometry(0.015, 0.01, 0.03),
    materials.darkMetal
  );
  chargingHandle.position.set(0, 0.025, 0.1);
  group.add(chargingHandle);
  
  // Ejection port cover
  const ejectionPort = new THREE.Mesh(
    new THREE.BoxGeometry(0.002, 0.02, 0.04),
    materials.gunMetal
  );
  ejectionPort.position.set(0.02, 0.01, 0.02);
  group.add(ejectionPort);
  
  // Magazine
  const magazine = new THREE.Mesh(
    createBeveledBox(0.025, 0.12, 0.04),
    materials.darkMetal
  );
  magazine.position.set(0, -0.085, 0.0);
  magazine.rotation.x = -0.1;
  group.add(magazine);
  
  // Magazine ridges
  for (let i = 0; i < 5; i++) {
    const magRidge = new THREE.Mesh(
      new THREE.BoxGeometry(0.027, 0.004, 0.042),
      materials.gunMetal
    );
    magRidge.position.set(0, -0.05 - i * 0.018, 0.0);
    magRidge.rotation.x = -0.1;
    group.add(magRidge);
  }
  
  // Pistol grip
  const pistolGrip = new THREE.Mesh(
    createBeveledBox(0.028, 0.07, 0.035),
    materials.grip
  );
  pistolGrip.position.set(0, -0.06, 0.06);
  pistolGrip.rotation.x = 0.2;
  group.add(pistolGrip);
  
  // Trigger guard
  const triggerGuard = new THREE.Mesh(
    new THREE.TorusGeometry(0.018, 0.004, 8, 12, Math.PI),
    materials.gunMetal
  );
  triggerGuard.rotation.y = Math.PI / 2;
  triggerGuard.rotation.x = Math.PI;
  triggerGuard.position.set(0, -0.035, 0.02);
  group.add(triggerGuard);
  
  // Trigger
  const trigger = new THREE.Mesh(
    new THREE.BoxGeometry(0.004, 0.018, 0.008),
    materials.chrome
  );
  trigger.position.set(0, -0.03, 0.02);
  trigger.rotation.x = 0.2;
  group.add(trigger);
  
  // Buffer tube
  const bufferTube = new THREE.Mesh(
    new THREE.CylinderGeometry(0.014, 0.014, 0.12, 12),
    materials.gunMetal
  );
  bufferTube.rotation.x = Math.PI / 2;
  bufferTube.position.set(0, 0.0, 0.17);
  group.add(bufferTube);
  
  // Stock
  const stock = new THREE.Mesh(
    createBeveledBox(0.035, 0.055, 0.12),
    materials.grip
  );
  stock.position.set(0, -0.01, 0.26);
  group.add(stock);
  
  // Stock buttpad
  const buttpad = new THREE.Mesh(
    new THREE.BoxGeometry(0.037, 0.06, 0.01),
    materials.rubber
  );
  buttpad.position.set(0, -0.01, 0.325);
  group.add(buttpad);
  
  // Sling mount
  const slingMount = new THREE.Mesh(
    new THREE.TorusGeometry(0.008, 0.003, 6, 12),
    materials.chrome
  );
  slingMount.rotation.y = Math.PI / 2;
  slingMount.position.set(0.025, -0.02, 0.15);
  group.add(slingMount);
  
  // Position for viewmodel
  group.position.set(0.22, -0.26, -0.35);
  group.rotation.y = -0.02;
  
  return group;
}
