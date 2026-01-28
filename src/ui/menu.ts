import { getHighScores, saveHighScore, formatHighScores } from './highscores';

export class MenuManager {
  private startScreen: HTMLElement;
  private pauseScreen: HTMLElement;
  private gameOverScreen: HTMLElement;
  onStart?: () => void;
  onRestart?: () => void;

  constructor() {
    const base = 'position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.85);font-family:monospace;color:#fff;z-index:50;';
    const btn = 'padding:14px 40px;font-size:18px;background:linear-gradient(180deg,#e44,#b22);color:#fff;border:none;cursor:pointer;font-family:monospace;margin:8px;border-radius:4px;text-transform:uppercase;letter-spacing:2px;transition:transform 0.1s;';
    const btnHover = 'onmouseenter="this.style.transform=\'scale(1.05)\'" onmouseleave="this.style.transform=\'scale(1)\'"';

    this.startScreen = document.createElement('div');
    this.startScreen.style.cssText = base;
    this.startScreen.innerHTML = `
      <h1 style="font-size:3.5em;margin-bottom:10px;text-shadow:0 0 20px rgba(255,50,50,0.5);">⚔️ FPS ARENA</h1>
      <p style="color:#888;margin-bottom:30px;font-size:0.9em;">WASD=Move | Mouse=Look | Click=Shoot | R=Reload | 1-3=Weapons</p>
      <button style="${btn}" ${btnHover}>START GAME</button>
      <div class="highscores" style="margin-top:40px;width:300px;background:rgba(255,255,255,0.05);padding:15px 20px;border-radius:8px;">
        <h3 style="margin:0 0 10px 0;color:#ff6;font-size:1.1em;">🏆 HIGH SCORES</h3>
        <div class="hs-list" style="font-size:0.85em;"></div>
      </div>
    `;

    this.pauseScreen = document.createElement('div');
    this.pauseScreen.style.cssText = base + 'display:none;';
    this.pauseScreen.innerHTML = `
      <h2 style="font-size:2.5em;margin-bottom:20px;">⏸ PAUSED</h2>
      <p style="color:#666;margin-bottom:20px;">Click to resume or press ESC</p>
      <button style="${btn}" ${btnHover}>RESUME</button>
    `;

    this.gameOverScreen = document.createElement('div');
    this.gameOverScreen.style.cssText = base + 'display:none;';
    this.gameOverScreen.innerHTML = `
      <h2 style="font-size:2.5em;color:#e33;margin-bottom:10px;text-shadow:0 0 30px rgba(255,0,0,0.5);">☠️ GAME OVER</h2>
      <div class="go-rank" style="color:#ff6;font-size:1.2em;margin-bottom:10px;"></div>
      <p class="go-score" style="font-size:2em;margin:5px 0;">Score: 0</p>
      <p class="go-kills" style="color:#aaa;margin-bottom:5px;">Kills: 0</p>
      <p class="go-wave" style="color:#aaa;margin-bottom:20px;">Wave: 0</p>
      <button style="${btn}" ${btnHover}>PLAY AGAIN</button>
      <div class="highscores" style="margin-top:30px;width:300px;background:rgba(255,255,255,0.05);padding:15px 20px;border-radius:8px;">
        <h3 style="margin:0 0 10px 0;color:#ff6;font-size:1.1em;">🏆 HIGH SCORES</h3>
        <div class="hs-list" style="font-size:0.85em;"></div>
      </div>
    `;

    document.body.appendChild(this.startScreen);
    document.body.appendChild(this.pauseScreen);
    document.body.appendChild(this.gameOverScreen);

    this.startScreen.querySelector('button')!.onclick = () => { this.hide(); this.onStart?.(); };
    this.pauseScreen.querySelector('button')!.onclick = () => { this.hide(); };
    this.gameOverScreen.querySelector('button')!.onclick = () => { this.hide(); this.onRestart?.(); };
  }

  private updateHighScoresList(container: HTMLElement) {
    const list = container.querySelector('.hs-list');
    if (list) {
      list.innerHTML = formatHighScores(getHighScores());
    }
  }

  showStart() {
    this.startScreen.style.display = 'flex';
    this.pauseScreen.style.display = 'none';
    this.gameOverScreen.style.display = 'none';
    this.updateHighScoresList(this.startScreen);
  }

  showPause() {
    this.pauseScreen.style.display = 'flex';
  }

  showGameOver(score: number, kills: number, wave: number = 0) {
    // Save the score and check rank
    const { rank, isNewHigh } = saveHighScore(score, kills, wave);
    
    this.gameOverScreen.querySelector('.go-score')!.textContent = `Score: ${score.toLocaleString()}`;
    this.gameOverScreen.querySelector('.go-kills')!.textContent = `Kills: ${kills}`;
    this.gameOverScreen.querySelector('.go-wave')!.textContent = `Wave: ${wave}`;
    
    const rankEl = this.gameOverScreen.querySelector('.go-rank')!;
    if (isNewHigh) {
      rankEl.innerHTML = '🎉 NEW HIGH SCORE! 🎉';
      rankEl.setAttribute('style', 'color:#ff6;font-size:1.4em;margin-bottom:15px;animation:pulse 0.5s infinite alternate;');
    } else if (rank > 0) {
      rankEl.textContent = `Rank #${rank}`;
      rankEl.setAttribute('style', 'color:#ff6;font-size:1.2em;margin-bottom:10px;');
    } else {
      rankEl.textContent = '';
    }
    
    this.gameOverScreen.style.display = 'flex';
    this.updateHighScoresList(this.gameOverScreen);
  }

  hide() {
    this.startScreen.style.display = 'none';
    this.pauseScreen.style.display = 'none';
    this.gameOverScreen.style.display = 'none';
  }
}
