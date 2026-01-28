// ============================================
// High Score System — LocalStorage persistence
// ============================================

export interface HighScore {
  score: number;
  kills: number;
  wave: number;
  date: string;
}

const STORAGE_KEY = 'fps_arena_highscores';
const MAX_SCORES = 5;

export function getHighScores(): HighScore[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.warn('Failed to load high scores:', e);
  }
  return [];
}

export function saveHighScore(score: number, kills: number, wave: number): { rank: number; isNewHigh: boolean } {
  const scores = getHighScores();
  
  const newEntry: HighScore = {
    score,
    kills,
    wave,
    date: new Date().toLocaleDateString(),
  };
  
  scores.push(newEntry);
  scores.sort((a, b) => b.score - a.score);
  
  // Find rank (1-indexed)
  const rank = scores.findIndex(s => s === newEntry) + 1;
  const isNewHigh = rank === 1;
  
  // Keep only top scores
  const trimmed = scores.slice(0, MAX_SCORES);
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
  } catch (e) {
    console.warn('Failed to save high scores:', e);
  }
  
  return { rank: rank <= MAX_SCORES ? rank : 0, isNewHigh };
}

export function formatHighScores(scores: HighScore[]): string {
  if (scores.length === 0) {
    return '<p style="color:#666;">No scores yet. Be the first!</p>';
  }
  
  return scores.map((s, i) => {
    const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}.`;
    return `<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #333;">
      <span>${medal} ${s.score.toLocaleString()}</span>
      <span style="color:#888;">Wave ${s.wave} • ${s.kills} kills</span>
    </div>`;
  }).join('');
}

export function clearHighScores(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.warn('Failed to clear high scores:', e);
  }
}
