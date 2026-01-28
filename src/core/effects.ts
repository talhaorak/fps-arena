// ============================================
// Screen Effects — Shake, Flash, Slow-motion
// ============================================

export class ScreenEffects {
  private shakeIntensity = 0;
  private shakeDuration = 0;
  private shakeTime = 0;
  private shakeOffset = { x: 0, y: 0 };
  
  private slowMoScale = 1;
  private slowMoTarget = 1;
  private slowMoDuration = 0;
  
  private flashOpacity = 0;
  private flashElement: HTMLElement;
  
  private vignetteElement: HTMLElement;
  private vignetteIntensity = 0;
  
  constructor() {
    // Screen flash overlay
    this.flashElement = document.createElement('div');
    this.flashElement.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: white;
      pointer-events: none;
      opacity: 0;
      z-index: 100;
      mix-blend-mode: overlay;
    `;
    document.body.appendChild(this.flashElement);
    
    // Low health vignette
    this.vignetteElement = document.createElement('div');
    this.vignetteElement.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      pointer-events: none;
      opacity: 0;
      z-index: 99;
      background: radial-gradient(ellipse at center, transparent 40%, rgba(100,0,0,0.6) 100%);
    `;
    document.body.appendChild(this.vignetteElement);
  }
  
  // --- SCREEN SHAKE ---
  shake(intensity: number, duration: number): void {
    // Don't override stronger shake
    if (intensity > this.shakeIntensity) {
      this.shakeIntensity = intensity;
      this.shakeDuration = duration;
      this.shakeTime = 0;
    }
  }
  
  // Small shake for firing
  gunShake(): void {
    this.shake(2, 0.05);
  }
  
  // Medium shake for damage
  damageShake(): void {
    this.shake(8, 0.15);
  }
  
  // Big shake for explosions/kills
  explosionShake(): void {
    this.shake(12, 0.2);
  }
  
  getShakeOffset(): { x: number; y: number } {
    return this.shakeOffset;
  }
  
  // --- SLOW MOTION ---
  slowMotion(scale: number, duration: number): void {
    this.slowMoTarget = scale;
    this.slowMoDuration = duration;
  }
  
  // Dramatic slow-mo for wave clear
  waveSlowMo(): void {
    this.slowMotion(0.2, 1.5); // 20% speed for 1.5 seconds
  }
  
  // Brief slow-mo for headshots
  headshotSlowMo(): void {
    this.slowMotion(0.5, 0.3);
  }
  
  getTimeScale(): number {
    return this.slowMoScale;
  }
  
  // --- SCREEN FLASH ---
  flash(intensity: number = 0.3): void {
    this.flashOpacity = intensity;
  }
  
  muzzleFlash(): void {
    this.flash(0.1);
  }
  
  headshotFlash(): void {
    this.flash(0.4);
    this.flashElement.style.background = '#ff4400';
  }
  
  // --- LOW HEALTH VIGNETTE ---
  setHealthVignette(healthPercent: number): void {
    // Start showing at 50% health, max at 20%
    if (healthPercent < 50) {
      this.vignetteIntensity = (50 - healthPercent) / 30; // 0 to ~1
      this.vignetteIntensity = Math.min(1, this.vignetteIntensity);
    } else {
      this.vignetteIntensity = 0;
    }
  }
  
  // --- UPDATE ---
  update(delta: number): void {
    // Clamp delta to prevent freezing
    const safeDelta = Math.min(delta, 0.1);
    
    // Shake update
    if (this.shakeDuration > 0) {
      this.shakeTime += safeDelta;
      const progress = this.shakeTime / this.shakeDuration;
      
      if (progress < 1) {
        const decay = 1 - progress;
        const angle = Math.random() * Math.PI * 2;
        const magnitude = this.shakeIntensity * decay * Math.random();
        this.shakeOffset.x = Math.cos(angle) * magnitude;
        this.shakeOffset.y = Math.sin(angle) * magnitude;
      } else {
        this.shakeOffset.x = 0;
        this.shakeOffset.y = 0;
        this.shakeDuration = 0;
        this.shakeIntensity = 0;
      }
    }
    
    // Slow-mo update
    if (this.slowMoDuration > 0) {
      this.slowMoScale = Math.max(0.1, this.slowMoTarget); // Never go below 10% speed
      this.slowMoDuration -= safeDelta / Math.max(0.1, this.slowMoScale);
      if (this.slowMoDuration <= 0) {
        this.slowMoScale = 1;
        this.slowMoTarget = 1;
        this.slowMoDuration = 0;
      }
    } else {
      // Lerp back to normal speed
      this.slowMoScale += (1 - this.slowMoScale) * 5 * safeDelta;
      if (this.slowMoScale > 0.99) this.slowMoScale = 1;
    }
    
    // Safety: never let time scale go to 0
    this.slowMoScale = Math.max(0.1, Math.min(1, this.slowMoScale));
    
    // Flash decay
    if (this.flashOpacity > 0) {
      this.flashOpacity -= delta * 8;
      if (this.flashOpacity < 0) {
        this.flashOpacity = 0;
        this.flashElement.style.background = 'white';
      }
    }
    this.flashElement.style.opacity = this.flashOpacity.toString();
    
    // Vignette (pulsing when low health)
    const pulse = Math.sin(Date.now() * 0.005) * 0.15 + 0.85;
    this.vignetteElement.style.opacity = (this.vignetteIntensity * pulse).toString();
  }
}
