import * as THREE from 'three';
import { GAME } from '../constants';

// ============================================
// Minimap — Top-down radar showing enemies
// ============================================

export class Minimap {
  private container: HTMLElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private size = 150;
  private scale: number;

  constructor() {
    this.scale = this.size / (GAME.WORLD_SIZE * 2);
    
    this.container = document.createElement('div');
    this.container.style.cssText = `
      position: absolute;
      bottom: 100px;
      left: 20px;
      width: ${this.size}px;
      height: ${this.size}px;
      background: rgba(0, 0, 0, 0.6);
      border: 2px solid rgba(100, 200, 255, 0.5);
      border-radius: 50%;
      overflow: hidden;
      z-index: 15;
    `;
    
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.size;
    this.canvas.height = this.size;
    this.canvas.style.cssText = 'width: 100%; height: 100%;';
    
    this.ctx = this.canvas.getContext('2d')!;
    this.container.appendChild(this.canvas);
    document.body.appendChild(this.container);
  }

  update(
    playerPos: THREE.Vector3,
    playerRotation: number,
    enemies: { position: THREE.Vector3; isDead: boolean }[],
  ): void {
    const ctx = this.ctx;
    const center = this.size / 2;
    
    // Clear
    ctx.clearRect(0, 0, this.size, this.size);
    
    // Background with grid
    ctx.fillStyle = 'rgba(10, 20, 30, 0.8)';
    ctx.beginPath();
    ctx.arc(center, center, center - 2, 0, Math.PI * 2);
    ctx.fill();
    
    // Grid circles
    ctx.strokeStyle = 'rgba(100, 200, 255, 0.15)';
    ctx.lineWidth = 1;
    for (let r = 25; r < center; r += 25) {
      ctx.beginPath();
      ctx.arc(center, center, r, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    // Grid lines
    ctx.beginPath();
    ctx.moveTo(center, 0);
    ctx.lineTo(center, this.size);
    ctx.moveTo(0, center);
    ctx.lineTo(this.size, center);
    ctx.stroke();
    
    // Save context for rotation
    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(-playerRotation); // Rotate map opposite to player facing
    
    // Draw enemies (relative to player)
    for (const enemy of enemies) {
      if (enemy.isDead) continue;
      
      const relX = (enemy.position.x - playerPos.x) * this.scale;
      const relZ = (enemy.position.z - playerPos.z) * this.scale;
      
      // Only show enemies within radar range
      const dist = Math.sqrt(relX * relX + relZ * relZ);
      if (dist > center - 10) continue;
      
      // Enemy blip - red pulsing dot
      const pulse = 0.8 + Math.sin(Date.now() * 0.01) * 0.2;
      ctx.fillStyle = `rgba(255, 80, 80, ${pulse})`;
      ctx.beginPath();
      ctx.arc(relX, relZ, 4, 0, Math.PI * 2);
      ctx.fill();
      
      // Enemy glow
      ctx.fillStyle = 'rgba(255, 80, 80, 0.3)';
      ctx.beginPath();
      ctx.arc(relX, relZ, 7, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.restore();
    
    // Player indicator (always at center, shows direction)
    ctx.save();
    ctx.translate(center, center);
    
    // Player triangle (pointing up = forward)
    ctx.fillStyle = '#6cf';
    ctx.beginPath();
    ctx.moveTo(0, -8);
    ctx.lineTo(-5, 6);
    ctx.lineTo(5, 6);
    ctx.closePath();
    ctx.fill();
    
    // Player glow
    ctx.fillStyle = 'rgba(100, 200, 255, 0.3)';
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
    
    // Compass directions
    ctx.font = '10px monospace';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(100, 200, 255, 0.6)';
    ctx.fillText('N', center, 12);
    ctx.fillText('S', center, this.size - 4);
    ctx.fillText('E', this.size - 6, center + 4);
    ctx.fillText('W', 8, center + 4);
  }

  show(): void {
    this.container.style.display = 'block';
  }

  hide(): void {
    this.container.style.display = 'none';
  }
}
