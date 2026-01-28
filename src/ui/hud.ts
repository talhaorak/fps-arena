import { HUDData } from '../types';

// CSS Animations (injected once)
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeUp {
    0% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
    100% { opacity: 0; transform: translate(-50%, -120%) scale(0.8); }
  }
  @keyframes pulseGlow {
    0%, 100% { text-shadow: 0 0 10px currentColor; }
    50% { text-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
  }
  @keyframes slideIn {
    0% { transform: translateX(100px); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }
  .weapon-slot { 
    display: inline-block; 
    padding: 4px 10px; 
    margin: 0 2px;
    background: rgba(255,255,255,0.1); 
    border-radius: 4px;
    font-size: 12px;
    transition: all 0.2s;
  }
  .weapon-slot.active { 
    background: rgba(255,100,100,0.4); 
    border: 1px solid #f66;
    transform: scale(1.1);
  }
  .weapon-slot .key { 
    color: #888; 
    font-size: 10px; 
    margin-right: 4px;
  }
`;
document.head.appendChild(styleSheet);

export class HUD {
  private container: HTMLElement;
  private healthBar!: HTMLElement;
  private healthText!: HTMLElement;
  private ammoCounter!: HTMLElement;
  private weaponName!: HTMLElement;
  private weaponSlots!: HTMLElement;
  private scoreEl!: HTMLElement;
  private killsEl!: HTMLElement;
  private waveEl!: HTMLElement;
  private enemyCount!: HTMLElement;
  private reloadIndicator!: HTMLElement;
  private damageOverlay!: HTMLElement;
  private killNotifications!: HTMLElement;
  private comboCounter!: HTMLElement;
  
  private combo = 0;
  private comboTimer: number | null = null;

  constructor() {
    this.container = document.createElement('div');
    this.container.id = 'hud-overlay';
    this.container.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;font-family:monospace;color:#fff;z-index:10;';
    this.container.innerHTML = `
      <!-- Health Bar (bottom left) -->
      <div style="position:absolute;bottom:30px;left:20px;">
        <div style="display:flex;align-items:center;margin-bottom:5px;">
          <span style="font-size:20px;margin-right:8px;">❤️</span>
          <div style="width:180px;height:16px;background:#222;border:2px solid #444;border-radius:4px;overflow:hidden;">
            <div class="health-bar" style="width:100%;height:100%;background:linear-gradient(180deg,#f55,#a22);border-radius:2px;transition:width 0.3s;"></div>
          </div>
          <span class="health-text" style="margin-left:8px;font-size:14px;min-width:50px;">100/100</span>
        </div>
      </div>
      
      <!-- Ammo & Weapon (bottom right) -->
      <div style="position:absolute;bottom:30px;right:20px;text-align:right;">
        <div class="ammo-counter" style="font-size:32px;font-weight:bold;text-shadow:0 0 10px rgba(255,255,255,0.3);">0 / 0</div>
        <div class="weapon-name" style="font-size:16px;color:#f66;margin-top:2px;">Pistol</div>
        <div class="weapon-slots" style="margin-top:8px;">
          <span class="weapon-slot active"><span class="key">1</span>🔫</span>
          <span class="weapon-slot"><span class="key">2</span>💥</span>
          <span class="weapon-slot"><span class="key">3</span>🔥</span>
        </div>
        <div class="reload-indicator" style="font-size:18px;color:#ff0;margin-top:10px;display:none;animation:pulseGlow 0.5s infinite;">⟳ RELOADING</div>
      </div>
      
      <!-- Score & Stats (top right) -->
      <div style="position:absolute;top:20px;right:20px;text-align:right;background:rgba(0,0,0,0.3);padding:10px 15px;border-radius:8px;">
        <div class="score" style="font-size:24px;color:#ff6;font-weight:bold;">0</div>
        <div style="font-size:11px;color:#888;margin-top:2px;">SCORE</div>
        <div style="margin-top:10px;display:flex;gap:15px;">
          <div>
            <div class="kills" style="font-size:18px;">0</div>
            <div style="font-size:10px;color:#666;">KILLS</div>
          </div>
          <div>
            <div class="enemy-count" style="font-size:18px;color:#f66;">0</div>
            <div style="font-size:10px;color:#666;">ENEMIES</div>
          </div>
        </div>
      </div>
      
      <!-- Wave (top left) -->
      <div style="position:absolute;top:20px;left:20px;background:rgba(0,0,0,0.3);padding:10px 15px;border-radius:8px;">
        <div class="wave" style="font-size:22px;color:#6cf;">WAVE 1</div>
      </div>
      
      <!-- Combo Counter (center) -->
      <div class="combo-counter" style="position:absolute;top:30%;left:50%;transform:translateX(-50%);font-size:32px;color:#ff6;font-weight:bold;opacity:0;transition:all 0.3s;text-shadow:0 0 20px #ff6;"></div>
      
      <!-- Overlays -->
      <div class="damage-overlay" style="position:absolute;top:0;left:0;width:100%;height:100%;background:radial-gradient(transparent 40%, rgba(255,0,0,0.6));opacity:0;transition:opacity 0.15s;pointer-events:none;"></div>
      <div class="kill-notifications" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;"></div>
    `;
    document.body.appendChild(this.container);
  }

  init() {
    this.healthBar = this.container.querySelector('.health-bar')!;
    this.healthText = this.container.querySelector('.health-text')!;
    this.ammoCounter = this.container.querySelector('.ammo-counter')!;
    this.weaponName = this.container.querySelector('.weapon-name')!;
    this.weaponSlots = this.container.querySelector('.weapon-slots')!;
    this.scoreEl = this.container.querySelector('.score')!;
    this.killsEl = this.container.querySelector('.kills')!;
    this.waveEl = this.container.querySelector('.wave')!;
    this.enemyCount = this.container.querySelector('.enemy-count')!;
    this.reloadIndicator = this.container.querySelector('.reload-indicator')!;
    this.damageOverlay = this.container.querySelector('.damage-overlay')!;
    this.killNotifications = this.container.querySelector('.kill-notifications')!;
    this.comboCounter = this.container.querySelector('.combo-counter')!;
  }

  update(data: HUDData & { enemyCount?: number; currentWeapon?: number }) {
    // Health
    const healthPercent = (data.health / data.maxHealth) * 100;
    this.healthBar.style.width = `${healthPercent}%`;
    this.healthText.textContent = `${Math.ceil(data.health)}/${data.maxHealth}`;
    
    if (healthPercent < 25) {
      this.healthBar.style.background = 'linear-gradient(180deg,#f22,#800)';
    } else if (healthPercent < 50) {
      this.healthBar.style.background = 'linear-gradient(180deg,#f80,#a50)';
    } else {
      this.healthBar.style.background = 'linear-gradient(180deg,#f55,#a22)';
    }
    
    // Ammo
    const ammoColor = data.ammo <= 3 ? '#f66' : '#fff';
    this.ammoCounter.style.color = ammoColor;
    this.ammoCounter.textContent = `${data.ammo} / ${data.reserveAmmo}`;
    
    // Weapon
    this.weaponName.textContent = data.weaponName;
    
    // Update weapon slots
    const slots = this.weaponSlots.querySelectorAll('.weapon-slot');
    const weaponIndex = data.weaponName === 'Pistol' ? 0 : data.weaponName === 'Shotgun' ? 1 : 2;
    slots.forEach((slot, i) => {
      slot.classList.toggle('active', i === weaponIndex);
    });
    
    // Stats
    this.scoreEl.textContent = data.score.toLocaleString();
    this.killsEl.textContent = data.kills.toString();
    this.waveEl.textContent = `WAVE ${data.wave}`;
    
    if (data.enemyCount !== undefined) {
      this.enemyCount.textContent = data.enemyCount.toString();
    }
    
    // Reload indicator
    this.reloadIndicator.style.display = data.isReloading ? 'block' : 'none';
  }

  showDamage() {
    this.damageOverlay.style.opacity = '0.7';
    setTimeout(() => { this.damageOverlay.style.opacity = '0'; }, 150);
  }

  showKill(points: number) {
    // Increment combo
    this.combo++;
    if (this.comboTimer) clearTimeout(this.comboTimer);
    this.comboTimer = window.setTimeout(() => {
      this.combo = 0;
      this.comboCounter.style.opacity = '0';
    }, 2000);
    
    // Show combo if > 1
    if (this.combo > 1) {
      this.comboCounter.textContent = `${this.combo}x COMBO!`;
      this.comboCounter.style.opacity = '1';
      this.comboCounter.style.transform = 'translateX(-50%) scale(1.2)';
      setTimeout(() => {
        this.comboCounter.style.transform = 'translateX(-50%) scale(1)';
      }, 100);
    }
    
    // Kill popup with random position offset
    const el = document.createElement('div');
    const bonusPoints = this.combo > 1 ? Math.floor(points * (this.combo - 1) * 0.1) : 0;
    const totalPoints = points + bonusPoints;
    el.innerHTML = this.combo > 1 
      ? `+${totalPoints} <span style="font-size:16px;color:#f80;">×${this.combo}</span>`
      : `+${points}`;
    
    const offsetX = (Math.random() - 0.5) * 100;
    const offsetY = (Math.random() - 0.5) * 50;
    el.style.cssText = `
      position:absolute;
      left:calc(50% + ${offsetX}px);
      top:calc(40% + ${offsetY}px);
      transform:translate(-50%,-50%) scale(1.3);
      font-size:28px;
      color:#ff6;
      font-weight:bold;
      animation:fadeUp 1.2s forwards;
      pointer-events:none;
      text-shadow: 0 0 10px rgba(255,255,0,0.8), 2px 2px 4px rgba(0,0,0,0.5);
    `;
    this.killNotifications.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  }
  
  showWaveStart(wave: number) {
    const el = document.createElement('div');
    el.textContent = `WAVE ${wave}`;
    el.style.cssText = `
      position:absolute;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
      font-size:64px;
      color:#6cf;
      font-weight:bold;
      opacity:0;
      animation:slideIn 0.5s forwards, fadeUp 2s 0.5s forwards;
      pointer-events:none;
      text-shadow: 0 0 30px rgba(100,200,255,0.8);
    `;
    this.killNotifications.appendChild(el);
    setTimeout(() => el.remove(), 2500);
  }
  
  showPickup(type: 'health' | 'ammo', amount: number) {
    const el = document.createElement('div');
    const icon = type === 'health' ? '❤️' : '🔫';
    const color = type === 'health' ? '#4f4' : '#fa0';
    el.innerHTML = `${icon} +${amount}`;
    el.style.cssText = `
      position:absolute;
      left:50%;
      top:60%;
      transform:translate(-50%,-50%);
      font-size:24px;
      color:${color};
      font-weight:bold;
      animation:fadeUp 1s forwards;
      pointer-events:none;
      text-shadow: 0 0 10px ${color};
    `;
    this.killNotifications.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }
  
  showHeadshot() {
    const el = document.createElement('div');
    el.textContent = '💀 HEADSHOT!';
    el.style.cssText = `
      position:absolute;
      left:50%;
      top:35%;
      transform:translate(-50%,-50%) scale(1.5);
      font-size:28px;
      color:#f40;
      font-weight:bold;
      animation:fadeUp 1.5s forwards;
      pointer-events:none;
      text-shadow: 0 0 20px rgba(255,68,0,0.8), 0 0 40px rgba(255,68,0,0.5);
    `;
    this.killNotifications.appendChild(el);
    setTimeout(() => el.remove(), 1500);
  }
}
