# TODO — FPS Game Multi-Agent Development

## Status Legend
- ⬜ Not started
- 🔄 In progress
- ✅ Done
- ❌ Blocked
- 🔀 Merging

---

## Phase 0: Setup
- ⬜ Initialize git repo + branches
- ⬜ Create project scaffold (Vite + Three.js + TS)
- ⬜ Create shared types.ts and constants.ts
- ⬜ Push skeleton to all branches
- ⬜ Verify all agents (Claude Code, Codex, OpenCode, Qwen) are ready

## Phase 1: Foundation — Agent Assignment
| Task | Agent | Branch | Status |
|------|-------|--------|--------|
| Project scaffold | Orchestrator | main | ⬜ |
| Core engine + game loop | Claude Code | feat/core-player | ⬜ |
| FPS camera + movement | Claude Code | feat/core-player | ⬜ |
| Weapon system | Codex CLI | feat/weapons-combat | ⬜ |
| Enemy AI | OpenCode | feat/enemies-ai | ⬜ |
| HUD + UI | Qwen (local) | feat/hud-audio | ⬜ |

## Phase 2: Parallel Development
| Task | Agent | Status | Notes |
|------|-------|--------|-------|
| Scene + renderer + loop | Claude Code | ⬜ | |
| Player controller | Claude Code | ⬜ | |
| Collision detection | Claude Code | ⬜ | |
| Weapon class + raycasting | Codex CLI | ⬜ | |
| Reload + ammo | Codex CLI | ⬜ | |
| Muzzle flash + effects | Codex CLI | ⬜ | |
| Enemy class + health | OpenCode | ⬜ | |
| Patrol AI + aggro | OpenCode | ⬜ | |
| Wave spawner | OpenCode | ⬜ | |
| HUD overlay | Qwen | ⬜ | |
| Menu screens | Qwen | ⬜ | |
| Audio system | Qwen | ⬜ | |

## Phase 3: Integration
| Task | Status | Notes |
|------|--------|-------|
| Merge core-player → main | ⬜ | |
| Merge weapons-combat → main | ⬜ | |
| Merge enemies-ai → main | ⬜ | |
| Merge hud-audio → main | ⬜ | |
| Integration testing | ⬜ | |
| Screenshot review | ⬜ | |

## Phase 4: Assets + Level
| Task | Status | Notes |
|------|--------|-------|
| Download Kenney 3D assets | ⬜ | |
| Generate textures (AI) | ⬜ | |
| Build level geometry | ⬜ | |
| Apply materials + lighting | ⬜ | |
| Skybox | ⬜ | |

## Phase 5: Polish
| Task | Status | Notes |
|------|--------|-------|
| Particle effects | ⬜ | |
| 3D audio | ⬜ | |
| Minimap | ⬜ | |
| Performance optimization | ⬜ | |
| Final QA | ⬜ | |
| Delivery | ⬜ | |

---

## Agent Status Tracker
| Agent | Process ID | Status | Last Update |
|-------|-----------|--------|-------------|
| Claude Code | — | Not started | — |
| Codex CLI | — | Not started | — |
| OpenCode | — | Not started | — |
| Qwen (local) | — | Not started | — |

## Issues / Blockers
(none yet)

## Merge Log
(empty)
