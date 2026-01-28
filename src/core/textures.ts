import * as THREE from 'three';

/** Procedural texture generator using Canvas2D */
export class TextureFactory {

  /** Brick wall texture */
  static brick(width = 512, height = 512): THREE.CanvasTexture {
    const c = document.createElement('canvas');
    c.width = width; c.height = height;
    const ctx = c.getContext('2d')!;

    // Base mortar color
    ctx.fillStyle = '#6b6b60';
    ctx.fillRect(0, 0, width, height);

    const bw = 64, bh = 28, gap = 4;
    const colors = ['#8b4533', '#7a3e2e', '#9c5040', '#6d3a2a', '#a0584a', '#7f4638'];

    for (let row = 0; row < height / (bh + gap); row++) {
      const offset = (row % 2) * (bw / 2);
      for (let col = -1; col < width / (bw + gap) + 1; col++) {
        const x = col * (bw + gap) + offset;
        const y = row * (bh + gap);

        // Random brick color
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillRect(x, y, bw, bh);

        // Subtle noise on each brick
        for (let i = 0; i < 30; i++) {
          const nx = x + Math.random() * bw;
          const ny = y + Math.random() * bh;
          ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.15})`;
          ctx.fillRect(nx, ny, 2, 2);
        }
        // Light edge highlight
        ctx.strokeStyle = 'rgba(255,255,255,0.08)';
        ctx.strokeRect(x + 1, y + 1, bw - 2, bh - 2);
      }
    }

    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(2, 2);
    return tex;
  }

  /** Concrete floor texture */
  static concrete(width = 512, height = 512): THREE.CanvasTexture {
    const c = document.createElement('canvas');
    c.width = width; c.height = height;
    const ctx = c.getContext('2d')!;

    // Base
    ctx.fillStyle = '#707878';
    ctx.fillRect(0, 0, width, height);

    // Noise grain
    for (let i = 0; i < 8000; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const v = Math.random() * 0.12;
      ctx.fillStyle = Math.random() > 0.5 ? `rgba(255,255,255,${v})` : `rgba(0,0,0,${v})`;
      ctx.fillRect(x, y, Math.random() * 3 + 1, Math.random() * 3 + 1);
    }

    // Tile grid lines
    const tileSize = 128;
    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    ctx.lineWidth = 2;
    for (let x = 0; x < width; x += tileSize) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
    }
    for (let y = 0; y < height; y += tileSize) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
    }

    // Occasional stains
    for (let i = 0; i < 5; i++) {
      const sx = Math.random() * width;
      const sy = Math.random() * height;
      const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, 30 + Math.random() * 40);
      grad.addColorStop(0, 'rgba(50,45,40,0.15)');
      grad.addColorStop(1, 'rgba(50,45,40,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(sx - 60, sy - 60, 120, 120);
    }

    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(8, 8);
    return tex;
  }

  /** Metal/industrial texture for props */
  static metal(width = 256, height = 256): THREE.CanvasTexture {
    const c = document.createElement('canvas');
    c.width = width; c.height = height;
    const ctx = c.getContext('2d')!;

    // Brushed metal base
    const grad = ctx.createLinearGradient(0, 0, 0, height);
    grad.addColorStop(0, '#5a5e65');
    grad.addColorStop(0.5, '#6a6e75');
    grad.addColorStop(1, '#4a4e55');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Brushed lines
    for (let y = 0; y < height; y += 2) {
      ctx.fillStyle = `rgba(${Math.random() > 0.5 ? 255 : 0},${Math.random() > 0.5 ? 255 : 0},${Math.random() > 0.5 ? 255 : 0},${Math.random() * 0.04})`;
      ctx.fillRect(0, y, width, 1);
    }

    // Rivets / bolts at corners
    const rivetPos = [[20, 20], [width-20, 20], [20, height-20], [width-20, height-20]];
    for (const [rx, ry] of rivetPos) {
      const rg = ctx.createRadialGradient(rx-1, ry-1, 0, rx, ry, 6);
      rg.addColorStop(0, '#888');
      rg.addColorStop(0.5, '#666');
      rg.addColorStop(1, '#444');
      ctx.fillStyle = rg;
      ctx.beginPath(); ctx.arc(rx, ry, 6, 0, Math.PI * 2); ctx.fill();
    }

    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    return tex;
  }

  /** Crate/wood texture */
  static crate(width = 256, height = 256): THREE.CanvasTexture {
    const c = document.createElement('canvas');
    c.width = width; c.height = height;
    const ctx = c.getContext('2d')!;

    // Wood base
    ctx.fillStyle = '#8B6914';
    ctx.fillRect(0, 0, width, height);

    // Wood grain
    for (let y = 0; y < height; y++) {
      const wobble = Math.sin(y * 0.1) * 5;
      const brightness = 0.85 + Math.sin(y * 0.3 + wobble) * 0.15;
      ctx.fillStyle = `rgba(139,105,20,${brightness})`;
      ctx.fillRect(0, y, width, 1);
    }

    // Plank borders
    ctx.strokeStyle = '#5a3a08';
    ctx.lineWidth = 3;
    const margin = 12;
    ctx.strokeRect(margin, margin, width - margin * 2, height - margin * 2);
    // Cross braces
    ctx.beginPath();
    ctx.moveTo(margin, margin); ctx.lineTo(width - margin, height - margin);
    ctx.moveTo(width - margin, margin); ctx.lineTo(margin, height - margin);
    ctx.stroke();

    // Nails
    const nailPos = [[margin+4, margin+4], [width-margin-4, margin+4], [margin+4, height-margin-4], [width-margin-4, height-margin-4], [width/2, height/2]];
    for (const [nx, ny] of nailPos) {
      ctx.fillStyle = '#888';
      ctx.beginPath(); ctx.arc(nx, ny, 3, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#aaa';
      ctx.beginPath(); ctx.arc(nx-1, ny-1, 1.5, 0, Math.PI * 2); ctx.fill();
    }

    const tex = new THREE.CanvasTexture(c);
    return tex;
  }

  /** Ceiling texture - industrial panels */
  static ceiling(width = 512, height = 512): THREE.CanvasTexture {
    const c = document.createElement('canvas');
    c.width = width; c.height = height;
    const ctx = c.getContext('2d')!;

    ctx.fillStyle = '#4a4a50';
    ctx.fillRect(0, 0, width, height);

    // Panel grid
    const panelSize = 128;
    ctx.strokeStyle = 'rgba(0,0,0,0.3)';
    ctx.lineWidth = 2;
    for (let x = 0; x < width; x += panelSize) {
      for (let y = 0; y < height; y += panelSize) {
        ctx.strokeRect(x + 2, y + 2, panelSize - 4, panelSize - 4);
        // Inner highlight
        ctx.strokeStyle = 'rgba(255,255,255,0.05)';
        ctx.strokeRect(x + 4, y + 4, panelSize - 8, panelSize - 8);
        ctx.strokeStyle = 'rgba(0,0,0,0.3)';
      }
    }

    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(4, 4);
    return tex;
  }
}
