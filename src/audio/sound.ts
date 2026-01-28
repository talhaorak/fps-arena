import * as THREE from 'three';
import { AudioEvent } from '../types';

export class AudioManager {
  private ctx!: AudioContext;
  private master!: GainNode;
  private listenerPos = new THREE.Vector3();

  init() {
    this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    this.master = this.ctx.createGain();
    this.master.connect(this.ctx.destination);
    this.master.gain.value = 0.5;
  }

  play(event: AudioEvent) {
    if (!this.ctx) return;
    
    // Handle suspended AudioContext (especially on mobile)
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
      return; // Skip this sound, will play next time
    }
    const vol = event.volume ?? 1;
    const dist = event.position ? event.position.distanceTo(this.listenerPos) : 0;
    const spatial = event.position ? Math.max(0, 1 - dist / 80) : 1;

    const sounds: Record<string, {freq: number, dur: number, decay: number, type?: OscillatorType}> = {
      gunshot: {freq: 150, dur: 0.15, decay: 30},
      reload: {freq: 300, dur: 0.4, decay: 5, type: 'triangle'},
      footstep: {freq: 80, dur: 0.1, decay: 20},
      hit: {freq: 600, dur: 0.08, decay: 40},
      kill: {freq: 800, dur: 0.3, decay: 8, type: 'square'},
      damage: {freq: 100, dur: 0.2, decay: 10},
      ambient: {freq: 60, dur: 2, decay: 1},
      wave_start: {freq: 440, dur: 0.8, decay: 3, type: 'triangle'},
      headshot: {freq: 1200, dur: 0.15, decay: 20, type: 'square'}, // High-pitched satisfying sound
      pickup: {freq: 660, dur: 0.2, decay: 15, type: 'triangle'}, // Pleasant chime
    };

    const s = sounds[event.type];
    if (!s) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = s.type || 'sine';
    osc.frequency.value = s.freq;
    gain.gain.setValueAtTime(vol * spatial * 0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + s.dur);
    osc.connect(gain);
    gain.connect(this.master);
    osc.start();
    osc.stop(this.ctx.currentTime + s.dur);

    // Noise burst for gunshot
    if (event.type === 'gunshot') {
      const bufSize = this.ctx.sampleRate * 0.05;
      const buf = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < bufSize; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / bufSize * 5);
      const noise = this.ctx.createBufferSource();
      noise.buffer = buf;
      const ng = this.ctx.createGain();
      ng.gain.value = vol * spatial * 0.5;
      noise.connect(ng); ng.connect(this.master);
      noise.start(); noise.stop(this.ctx.currentTime + 0.05);
    }
  }

  setListenerPosition(pos: THREE.Vector3, _dir: THREE.Vector3) {
    this.listenerPos.copy(pos);
  }

  setVolume(v: number) { if (this.master) this.master.gain.value = v; }
}
