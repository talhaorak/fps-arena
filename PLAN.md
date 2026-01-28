# 🎮 3D FPS Game — Multi-Agent Development Plan

## Project Overview
A 3D First-Person Shooter game built with Three.js, developed by multiple AI agents working in parallel under orchestration.

## Tech Stack
- **Engine:** Three.js (WebGL)
- **Language:** TypeScript
- **Build:** Vite
- **3D Modeling:** Blender MCP
- **Textures:** Kenney free assets + AI-generated (nano-banana/DALL-E/Grok)
- **Audio:** Free SFX libraries

## Architecture

### Game Modules
1. **Core Engine** — Scene setup, renderer, game loop, physics
2. **Player Controller** — FPS camera, movement (WASD), mouse look, jumping
3. **Weapons System** — Gun models, shooting mechanics, ammo, reloading
4. **Level/Map** — 3D environment, walls, floors, obstacles, lighting
5. **Enemies/AI** — Basic enemy spawning, pathfinding, health
6. **HUD/UI** — Crosshair, health bar, ammo counter, minimap
7. **Audio** — Gunshots, footsteps, ambient sounds, hit feedback
8. **Assets Pipeline** — 3D models, textures, materials integration

## Agent Assignment

### Agent 1: Claude Code → Core Engine + Player Controller
- **Branch:** `feat/core-player`
- **Why:** Best at complex logic, architecture decisions
- **Tasks:**
  - Project scaffolding (Vite + Three.js + TypeScript)
  - Scene setup, renderer, game loop
  - FPS camera controller (PointerLock API)
  - Player movement (WASD + jump + crouch)
  - Basic collision detection
  - Physics (gravity, momentum)

### Agent 2: OpenAI Codex → Weapons + Combat System
- **Branch:** `feat/weapons-combat`
- **Why:** Good at self-contained modules
- **Tasks:**
  - Weapon class (position, fire rate, damage, ammo)
  - Raycasting for bullet hits
  - Muzzle flash effects
  - Reload mechanics
  - Hit detection & damage system
  - Weapon switching (1-3 keys)

### Agent 3: OpenCode → Enemies + AI
- **Branch:** `feat/enemies-ai`
- **Why:** Solid for algorithmic work
- **Tasks:**
  - Enemy class (health, speed, damage)
  - Basic patrol AI (waypoint following)
  - Aggro system (detect player proximity)
  - Enemy attack behavior
  - Death animation / respawn
  - Wave spawning system

### Agent 4: Qwen (Local) → HUD/UI + Audio
- **Branch:** `feat/hud-audio`
- **Why:** Lighter tasks, good for UI work
- **Tasks:**
  - HTML/CSS HUD overlay
  - Crosshair
  - Health bar + ammo counter
  - Kill counter / score
  - Menu screen (start/pause/game over)
  - Audio integration (Web Audio API)

### Orchestrator (Me - Rüstem Efendi) → Asset Pipeline + Integration
- **Responsibilities:**
  - Blender MCP for 3D models (gun, enemies, environment)
  - Texture sourcing (Kenney + AI-generated)
  - Branch merging & conflict resolution
  - Quality review (screenshot + gameplay testing)
  - Integration testing after each merge
  - Progress reporting to Talha

## Asset Strategy
1. **Environment:** Kenney 3D assets (modular dungeon/sci-fi kit)
2. **Weapons:** Blender MCP generated or Kenney weapon models
3. **Enemies:** Simple geometric enemies first, then Blender-refined
4. **Textures:** Mix of Kenney textures + AI-generated (for unique surfaces)
5. **Skybox:** AI-generated or free HDR from Poly Haven

## Development Phases

### Phase 1: Foundation (All agents start)
- [ ] Project scaffold + shared types/interfaces
- [ ] Each agent gets their module skeleton
- [ ] Shared constants file (physics, game settings)

### Phase 2: Core Development (Parallel)
- [ ] Agent 1: Playable character moving in empty scene
- [ ] Agent 2: Weapon mechanics (standalone test)
- [ ] Agent 3: Enemy AI (standalone test)
- [ ] Agent 4: HUD overlay (standalone test)

### Phase 3: First Integration
- [ ] Merge core + weapons → player can shoot
- [ ] Add enemies → player can shoot enemies
- [ ] Add HUD → player sees health/ammo
- [ ] Add audio → game has sound

### Phase 4: Level Design + Assets
- [ ] Build game level (Blender MCP or procedural)
- [ ] Apply textures and materials
- [ ] Lighting setup
- [ ] Environment props

### Phase 5: Polish + QA
- [ ] Visual review (screenshots)
- [ ] Gameplay testing (browser automation)
- [ ] Bug fixing
- [ ] Performance optimization
- [ ] Final delivery

## Shared Interfaces (agents must respect these)

```typescript
// types.ts — ALL agents import from here
export interface GameState {
  player: Player;
  enemies: Enemy[];
  weapons: Weapon[];
  score: number;
  wave: number;
  gameOver: boolean;
}

export interface Player {
  position: THREE.Vector3;
  rotation: THREE.Euler;
  health: number;
  maxHealth: number;
  speed: number;
  currentWeapon: number;
}

export interface Enemy {
  id: string;
  position: THREE.Vector3;
  health: number;
  speed: number;
  damage: number;
  state: 'patrol' | 'chase' | 'attack' | 'dead';
}

export interface Weapon {
  name: string;
  damage: number;
  fireRate: number;
  ammo: number;
  maxAmmo: number;
  reloadTime: number;
  range: number;
}
```

## File Structure
```
fps-game/
├── src/
│   ├── main.ts           (entry point)
│   ├── types.ts           (shared interfaces)
│   ├── constants.ts       (game settings)
│   ├── core/
│   │   ├── engine.ts      (Agent 1)
│   │   ├── scene.ts       (Agent 1)
│   │   └── physics.ts     (Agent 1)
│   ├── player/
│   │   ├── controller.ts  (Agent 1)
│   │   ├── camera.ts      (Agent 1)
│   │   └── input.ts       (Agent 1)
│   ├── weapons/
│   │   ├── weapon.ts      (Agent 2)
│   │   ├── shooting.ts    (Agent 2)
│   │   └── effects.ts     (Agent 2)
│   ├── enemies/
│   │   ├── enemy.ts       (Agent 3)
│   │   ├── ai.ts          (Agent 3)
│   │   └── spawner.ts     (Agent 3)
│   ├── ui/
│   │   ├── hud.ts         (Agent 4)
│   │   ├── menu.ts        (Agent 4)
│   │   └── crosshair.ts   (Agent 4)
│   ├── audio/
│   │   └── sound.ts       (Agent 4)
│   └── assets/
│       ├── models/
│       ├── textures/
│       └── sounds/
├── public/
│   └── index.html
├── PLAN.md
├── TODO.md
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Quality Gates
- Each module must compile independently
- Shared interfaces must not be modified without orchestrator approval
- Each merge gets a screenshot review
- Final build must run at 60fps in Chrome

## My Additions (Rüstem Efendi's suggestions)
1. **Procedural level generation** — not just a static map, random room generation adds replayability
2. **Particle effects** — blood splatter, sparks on wall hits, smoke
3. **Minimap** — top-down radar showing enemy positions
4. **Difficulty scaling** — enemies get harder each wave
5. **Performance budget** — target 60fps, LOD system for distant objects
6. **Sound spatialization** — 3D audio (enemies behind you sound different)
