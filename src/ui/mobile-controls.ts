// ============================================
// Mobile Touch Controls
// Virtual joystick + action buttons
// ============================================

export interface MobileInput {
  moveX: number;      // -1 to 1 (left/right)
  moveY: number;      // -1 to 1 (forward/backward)
  lookX: number;      // Camera rotation delta
  lookY: number;      // Camera rotation delta
  fire: boolean;
  reload: boolean;
  jump: boolean;
  weapon1: boolean;
  weapon2: boolean;
  weapon3: boolean;
}

export class MobileControls {
  private container: HTMLElement;
  private joystickOuter: HTMLElement;
  private joystickInner: HTMLElement;
  private fireButton: HTMLElement;
  private reloadButton: HTMLElement;
  private jumpButton: HTMLElement;
  private weaponButtons: HTMLElement[] = [];
  
  private joystickActive = false;
  private joystickTouchId: number | null = null;
  private joystickCenter = { x: 0, y: 0 };
  private joystickPos = { x: 0, y: 0 };
  private joystickRadius = 50;
  
  private lookTouchId: number | null = null;
  private lastLookPos = { x: 0, y: 0 };
  private lookDelta = { x: 0, y: 0 };
  
  private input: MobileInput = {
    moveX: 0, moveY: 0,
    lookX: 0, lookY: 0,
    fire: false, reload: false, jump: false,
    weapon1: false, weapon2: false, weapon3: false,
  };
  
  public enabled = false;
  
  constructor() {
    // Create container
    this.container = document.createElement('div');
    this.container.id = 'mobile-controls';
    this.container.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      pointer-events: none;
      z-index: 200;
      display: none;
      touch-action: none;
    `;
    
    // === LEFT SIDE: Movement Joystick ===
    this.joystickOuter = document.createElement('div');
    this.joystickOuter.style.cssText = `
      position: absolute;
      bottom: 30px; left: 30px;
      width: 120px; height: 120px;
      background: rgba(255,255,255,0.15);
      border: 3px solid rgba(255,255,255,0.3);
      border-radius: 50%;
      pointer-events: auto;
      touch-action: none;
    `;
    
    this.joystickInner = document.createElement('div');
    this.joystickInner.style.cssText = `
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 50px; height: 50px;
      background: rgba(255,255,255,0.5);
      border-radius: 50%;
      transition: none;
    `;
    this.joystickOuter.appendChild(this.joystickInner);
    this.container.appendChild(this.joystickOuter);
    
    // === RIGHT SIDE: Action Buttons ===
    // Fire button (big)
    this.fireButton = this.createButton('🔫', 80, 'bottom: 30px; right: 30px;', '#ff4444');
    this.container.appendChild(this.fireButton);
    
    // Reload button
    this.reloadButton = this.createButton('⟳', 50, 'bottom: 130px; right: 40px;', '#44aaff');
    this.container.appendChild(this.reloadButton);
    
    // Jump button
    this.jumpButton = this.createButton('⬆', 50, 'bottom: 130px; right: 110px;', '#44ff44');
    this.container.appendChild(this.jumpButton);
    
    // Weapon buttons (top right)
    const weapons = ['1', '2', '3'];
    weapons.forEach((num, i) => {
      const btn = this.createButton(num, 40, `top: 100px; right: ${30 + i * 50}px;`, '#888');
      this.weaponButtons.push(btn);
      this.container.appendChild(btn);
    });
    
    // === LOOK AREA (center-right of screen) ===
    const lookArea = document.createElement('div');
    lookArea.style.cssText = `
      position: absolute;
      top: 0; right: 0;
      width: 60%; height: 70%;
      pointer-events: auto;
      touch-action: none;
    `;
    lookArea.addEventListener('touchstart', this.onLookStart.bind(this), { passive: false });
    lookArea.addEventListener('touchmove', this.onLookMove.bind(this), { passive: false });
    lookArea.addEventListener('touchend', this.onLookEnd.bind(this), { passive: false });
    this.container.appendChild(lookArea);
    
    document.body.appendChild(this.container);
    
    // Setup event listeners
    this.setupJoystick();
    this.setupButtons();
  }
  
  private createButton(text: string, size: number, position: string, color: string): HTMLElement {
    const btn = document.createElement('div');
    btn.style.cssText = `
      position: absolute;
      ${position}
      width: ${size}px; height: ${size}px;
      background: ${color}44;
      border: 3px solid ${color}88;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${size * 0.4}px;
      color: white;
      pointer-events: auto;
      touch-action: none;
      user-select: none;
      -webkit-user-select: none;
    `;
    btn.textContent = text;
    return btn;
  }
  
  private setupJoystick() {
    this.joystickOuter.addEventListener('touchstart', (e) => {
      e.preventDefault();
      if (this.joystickTouchId !== null) return;
      
      const touch = e.changedTouches[0];
      this.joystickTouchId = touch.identifier;
      this.joystickActive = true;
      
      const rect = this.joystickOuter.getBoundingClientRect();
      this.joystickCenter = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
      this.joystickRadius = rect.width / 2 - 25;
      
      this.updateJoystick(touch.clientX, touch.clientY);
    }, { passive: false });
    
    document.addEventListener('touchmove', (e) => {
      if (!this.joystickActive) return;
      
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        if (touch.identifier === this.joystickTouchId) {
          e.preventDefault();
          this.updateJoystick(touch.clientX, touch.clientY);
          break;
        }
      }
    }, { passive: false });
    
    document.addEventListener('touchend', (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        if (touch.identifier === this.joystickTouchId) {
          this.joystickTouchId = null;
          this.joystickActive = false;
          this.joystickInner.style.transform = 'translate(-50%, -50%)';
          this.input.moveX = 0;
          this.input.moveY = 0;
          break;
        }
      }
    }, { passive: false });
  }
  
  private updateJoystick(touchX: number, touchY: number) {
    let dx = touchX - this.joystickCenter.x;
    let dy = touchY - this.joystickCenter.y;
    
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > this.joystickRadius) {
      dx = (dx / dist) * this.joystickRadius;
      dy = (dy / dist) * this.joystickRadius;
    }
    
    this.joystickInner.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
    
    // Normalize to -1 to 1
    this.input.moveX = dx / this.joystickRadius;
    this.input.moveY = -dy / this.joystickRadius; // Invert Y (up = forward)
  }
  
  private setupButtons() {
    // Fire button (hold to fire)
    this.fireButton.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.input.fire = true;
      this.fireButton.style.transform = 'scale(0.9)';
      this.fireButton.style.background = '#ff444488';
    }, { passive: false });
    
    this.fireButton.addEventListener('touchend', (e) => {
      e.preventDefault();
      this.input.fire = false;
      this.fireButton.style.transform = 'scale(1)';
      this.fireButton.style.background = '#ff444444';
    }, { passive: false });
    
    // Reload button (tap)
    this.reloadButton.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.input.reload = true;
      this.reloadButton.style.transform = 'scale(0.9)';
    }, { passive: false });
    
    this.reloadButton.addEventListener('touchend', (e) => {
      e.preventDefault();
      this.input.reload = false;
      this.reloadButton.style.transform = 'scale(1)';
    }, { passive: false });
    
    // Jump button (tap)
    this.jumpButton.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.input.jump = true;
      this.jumpButton.style.transform = 'scale(0.9)';
    }, { passive: false });
    
    this.jumpButton.addEventListener('touchend', (e) => {
      e.preventDefault();
      this.input.jump = false;
      this.jumpButton.style.transform = 'scale(1)';
    }, { passive: false });
    
    // Weapon buttons
    this.weaponButtons.forEach((btn, i) => {
      btn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        if (i === 0) this.input.weapon1 = true;
        if (i === 1) this.input.weapon2 = true;
        if (i === 2) this.input.weapon3 = true;
        btn.style.background = '#ffffff44';
      }, { passive: false });
      
      btn.addEventListener('touchend', (e) => {
        e.preventDefault();
        if (i === 0) this.input.weapon1 = false;
        if (i === 1) this.input.weapon2 = false;
        if (i === 2) this.input.weapon3 = false;
        btn.style.background = '#88888844';
      }, { passive: false });
    });
  }
  
  private onLookStart(e: TouchEvent) {
    if (this.lookTouchId !== null) return;
    e.preventDefault();
    
    const touch = e.changedTouches[0];
    this.lookTouchId = touch.identifier;
    this.lastLookPos = { x: touch.clientX, y: touch.clientY };
  }
  
  private onLookMove(e: TouchEvent) {
    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      if (touch.identifier === this.lookTouchId) {
        e.preventDefault();
        
        const dx = touch.clientX - this.lastLookPos.x;
        const dy = touch.clientY - this.lastLookPos.y;
        
        this.lookDelta.x += dx * 0.5; // Sensitivity
        this.lookDelta.y += dy * 0.5;
        
        this.lastLookPos = { x: touch.clientX, y: touch.clientY };
        break;
      }
    }
  }
  
  private onLookEnd(e: TouchEvent) {
    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      if (touch.identifier === this.lookTouchId) {
        this.lookTouchId = null;
        break;
      }
    }
  }
  
  show() {
    this.enabled = true;
    this.container.style.display = 'block';
  }
  
  hide() {
    this.enabled = false;
    this.container.style.display = 'none';
  }
  
  getInput(): MobileInput {
    // Get look delta and reset it
    this.input.lookX = this.lookDelta.x;
    this.input.lookY = this.lookDelta.y;
    this.lookDelta = { x: 0, y: 0 };
    
    return { ...this.input };
  }
  
  // Reset one-shot inputs (weapon switches)
  resetOneShot() {
    this.input.weapon1 = false;
    this.input.weapon2 = false;
    this.input.weapon3 = false;
    this.input.reload = false;
    this.input.jump = false;
  }
  
  static isMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      || (navigator.maxTouchPoints > 0 && window.innerWidth < 1024);
  }
}
