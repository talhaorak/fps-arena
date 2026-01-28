import { HUDData } from '../types';

export class HUD {
  private container: HTMLElement;
  private healthBar!: HTMLElement;
  private ammoCounter!: HTMLElement;
  private weaponName!: HTMLElement;
  private scoreEl!: HTMLElement;
  private killsEl!: HTMLElement;
  private waveEl!: HTMLElement;
  private reloadIndicator!: HTMLElement;
  private damageOverlay!: HTMLElement;
  private killNotifications!: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.id = 'hud-overlay';
    this.container.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;font-family:monospace;color:#fff;z-index:10;';
    this.container.innerHTML = `
      <div style="position:absolute;bottom:40px;left:20px;">
        <div style="width:200px;height:12px;background:#333;border:1px solid #555;border-radius:3px;">
          <div class="health-bar" style="width:100%;height:100%;background:#e33;border-radius:2px;transition:width 0.3s;"></div>
        </div>
      </div>
      <div class="ammo-counter" style="position:absolute;bottom:40px;right:20px;font-size:28px;">0/0</div>
      <div class="weapon-name" style="position:absolute;bottom:20px;right:20px;font-size:14px;color:#aaa;">Weapon</div>
      <div class="score" style="position:absolute;top:20px;right:20px;font-size:18px;">Score: 0</div>
      <div class="kills" style="position:absolute;top:45px;right:20px;font-size:14px;color:#aaa;">Kills: 0</div>
      <div class="wave" style="position:absolute;top:20px;left:20px;font-size:18px;">Wave: 1</div>
      <div class="reload-indicator" style="position:absolute;bottom:80px;right:20px;font-size:16px;color:#ff0;display:none;">RELOADING...</div>
      <div class="damage-overlay" style="position:absolute;top:0;left:0;width:100%;height:100%;background:red;opacity:0;transition:opacity 0.2s;pointer-events:none;"></div>
      <div class="kill-notifications" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;"></div>
    `;
    document.body.appendChild(this.container);
  }

  init() {
    this.healthBar = this.container.querySelector('.health-bar')!;
    this.ammoCounter = this.container.querySelector('.ammo-counter')!;
    this.weaponName = this.container.querySelector('.weapon-name')!;
    this.scoreEl = this.container.querySelector('.score')!;
    this.killsEl = this.container.querySelector('.kills')!;
    this.waveEl = this.container.querySelector('.wave')!;
    this.reloadIndicator = this.container.querySelector('.reload-indicator')!;
    this.damageOverlay = this.container.querySelector('.damage-overlay')!;
    this.killNotifications = this.container.querySelector('.kill-notifications')!;
  }

  update(data: HUDData) {
    const healthPercent = (data.health / data.maxHealth) * 100;
    this.healthBar.style.width = `${healthPercent}%`;
    if (healthPercent < 25) this.healthBar.style.background = '#f00';
    else if (healthPercent < 50) this.healthBar.style.background = '#f80';
    else this.healthBar.style.background = '#e33';
    this.ammoCounter.textContent = `${data.ammo} / ${data.reserveAmmo}`;
    this.weaponName.textContent = data.weaponName;
    this.scoreEl.textContent = `Score: ${data.score}`;
    this.killsEl.textContent = `Kills: ${data.kills}`;
    this.waveEl.textContent = `Wave: ${data.wave}`;
    this.reloadIndicator.style.display = data.isReloading ? 'block' : 'none';
  }

  showDamage() {
    this.damageOverlay.style.opacity = '0.5';
    setTimeout(() => { this.damageOverlay.style.opacity = '0'; }, 200);
  }

  showKill(points: number) {
    const el = document.createElement('div');
    el.textContent = `+${points}`;
    el.style.cssText = `position:absolute;left:50%;top:40%;transform:translate(-50%,-50%);font-size:24px;color:#ff0;font-weight:bold;animation:fadeUp 1.5s forwards;pointer-events:none;`;
    this.killNotifications.appendChild(el);
    setTimeout(() => el.remove(), 1500);
  }
}
