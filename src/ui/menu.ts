export class MenuManager {
  private startScreen: HTMLElement;
  private pauseScreen: HTMLElement;
  private gameOverScreen: HTMLElement;
  onStart?: () => void;
  onRestart?: () => void;

  constructor() {
    const base = 'position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.8);font-family:monospace;color:#fff;z-index:50;';
    const btn = 'padding:12px 32px;font-size:18px;background:#e33;color:#fff;border:none;cursor:pointer;font-family:monospace;margin:8px;';

    this.startScreen = document.createElement('div');
    this.startScreen.style.cssText = base;
    this.startScreen.innerHTML = `<h1 style="font-size:3em;margin-bottom:20px;">⚔️ FPS ARENA</h1><p style="color:#aaa;margin-bottom:30px;">WASD=Move | Mouse=Look | Click=Shoot | R=Reload | 1-3=Weapons</p><button style="${btn}">START GAME</button>`;

    this.pauseScreen = document.createElement('div');
    this.pauseScreen.style.cssText = base + 'display:none;';
    this.pauseScreen.innerHTML = `<h2 style="font-size:2em;">⏸ PAUSED</h2><button style="${btn}">RESUME</button>`;

    this.gameOverScreen = document.createElement('div');
    this.gameOverScreen.style.cssText = base + 'display:none;';
    this.gameOverScreen.innerHTML = `<h2 style="font-size:2em;color:#e33;">☠️ GAME OVER</h2><p class="go-score" style="font-size:1.5em;">Score: 0</p><p class="go-kills" style="color:#aaa;">Kills: 0</p><button style="${btn}">RESTART</button>`;

    document.body.appendChild(this.startScreen);
    document.body.appendChild(this.pauseScreen);
    document.body.appendChild(this.gameOverScreen);

    this.startScreen.querySelector('button')!.onclick = () => { this.hide(); this.onStart?.(); };
    this.pauseScreen.querySelector('button')!.onclick = () => { this.hide(); };
    this.gameOverScreen.querySelector('button')!.onclick = () => { this.hide(); this.onRestart?.(); };
  }

  showStart() { this.startScreen.style.display = 'flex'; this.pauseScreen.style.display = 'none'; this.gameOverScreen.style.display = 'none'; }
  showPause() { this.pauseScreen.style.display = 'flex'; }
  showGameOver(score: number, kills: number) {
    this.gameOverScreen.querySelector('.go-score')!.textContent = `Score: ${score}`;
    this.gameOverScreen.querySelector('.go-kills')!.textContent = `Kills: ${kills}`;
    this.gameOverScreen.style.display = 'flex';
  }
  hide() { this.startScreen.style.display = 'none'; this.pauseScreen.style.display = 'none'; this.gameOverScreen.style.display = 'none'; }
}
