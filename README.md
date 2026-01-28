# FPS Arena 🎮

A 3D first-person shooter game built with Three.js and TypeScript.

## Features

- **FPS Controls**: WASD movement, mouse look, jump, sprint
- **3 Weapons**: Pistol, Shotgun, Assault Rifle with different stats
- **Wave-based Enemies**: AI with patrol/chase/attack states, scaling difficulty
- **Procedural Textures**: Brick walls, concrete floors, metal props
- **HUD**: Health bar, ammo counter, score, wave indicator
- **Audio**: Procedural sounds (gunshots, footsteps, hits, kills)

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Controls

| Key | Action |
|-----|--------|
| W/A/S/D | Move |
| Mouse | Look around |
| Left Click | Shoot |
| R | Reload |
| 1/2/3 | Switch weapons |
| Space | Jump |
| Shift | Sprint |
| Escape | Pause |

## Tech Stack

- **Three.js** — 3D rendering
- **TypeScript** — Type safety
- **Vite** — Build tool
- **Canvas2D** — Procedural textures

## Project Structure

```
src/
├── core/           # Engine, physics, scene builder
│   ├── engine.ts
│   ├── physics.ts
│   ├── scene.ts
│   └── textures.ts
├── player/         # Player controller, camera, input
├── weapons/        # Weapon system, shooting, effects
├── enemies/        # Enemy AI, spawner
├── ui/             # HUD, crosshair, menus
├── audio/          # Sound manager
├── constants.ts    # Game configuration
├── types.ts        # TypeScript interfaces
└── main.ts         # Entry point
```

## Development

Built using multi-agent orchestration:
- Agent 1: Core engine + player controller
- Agent 2: Weapon system + combat
- Agent 3: Enemy AI + wave spawner  
- Agent 4: HUD/UI + audio

Total: ~2,500 lines of TypeScript

## Roadmap

- [ ] 3D models (weapons, enemies) via Hunyuan3D
- [ ] Skybox / environment map
- [ ] Particle system improvements
- [ ] Sound effects (Web Audio samples)
- [ ] Leaderboard / high scores
- [ ] Mobile controls

## License

MIT
