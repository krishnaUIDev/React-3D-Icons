class AudioEngine {
  private ctx: AudioContext | null = null;
  private soundEnabled: boolean = false;
  private synthFrequency: number = 800;
  private synthDuration: number = 0.05;
  private synthWaveform: OscillatorType = "sine";

  constructor() {
    // Persist sound settings across page loads and transitions
    if (typeof window !== "undefined") {
      this.soundEnabled = localStorage.getItem("r3d_sound_enabled") === "true";
      this.synthFrequency = parseInt(localStorage.getItem("r3d_synth_frequency") || "800", 10);
      this.synthDuration = parseFloat(localStorage.getItem("r3d_synth_duration") || "0.05");
      this.synthWaveform = (localStorage.getItem("r3d_synth_waveform") || "sine") as OscillatorType;
    }
  }

  public setEnabled(val: boolean) {
    this.soundEnabled = val;
    if (typeof window !== "undefined") {
      localStorage.setItem("r3d_sound_enabled", String(val));
    }
  }

  public isEnabled() {
    return this.soundEnabled;
  }

  public getSynthFrequency() {
    return this.synthFrequency;
  }
  public setSynthFrequency(val: number) {
    this.synthFrequency = val;
    if (typeof window !== "undefined") localStorage.setItem("r3d_synth_frequency", String(val));
  }

  public getSynthDuration() {
    return this.synthDuration;
  }
  public setSynthDuration(val: number) {
    this.synthDuration = val;
    if (typeof window !== "undefined") localStorage.setItem("r3d_synth_duration", String(val));
  }

  public getSynthWaveform() {
    return this.synthWaveform;
  }
  public setSynthWaveform(val: OscillatorType) {
    this.synthWaveform = val;
    if (typeof window !== "undefined") localStorage.setItem("r3d_synth_waveform", val);
  }

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public playClick() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = this.synthWaveform;
      osc.frequency.setValueAtTime(this.synthFrequency, t);
      osc.frequency.exponentialRampToValueAtTime(150, t + this.synthDuration);

      gain.gain.setValueAtTime(0.06, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + this.synthDuration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + this.synthDuration);
    } catch (e) {
      console.warn("Audio click failed", e);
    }
  }

  public playSnap() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(220, t);
      osc.frequency.exponentialRampToValueAtTime(660, t + 0.15);

      gain.gain.setValueAtTime(0.05, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.15);
    } catch (e) {
      console.warn("Audio snap failed", e);
    }
  }

  public playShutter() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const dur = 0.18;

      const bufferSize = this.ctx.sampleRate * dur;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1200, t);
      filter.Q.setValueAtTime(4.0, t);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.08, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(t);
      noise.stop(t + dur);
    } catch (e) {
      console.warn("Audio shutter failed", e);
    }
  }

  public playChime() {
    if (!this.soundEnabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;

      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = "triangle";
      osc1.frequency.setValueAtTime(523.25, t); // C5
      osc1.frequency.exponentialRampToValueAtTime(783.99, t + 0.25); // G5

      osc2.type = "sine";
      osc2.frequency.setValueAtTime(659.25, t); // E5
      osc2.frequency.exponentialRampToValueAtTime(1046.5, t + 0.25); // C6

      gain.gain.setValueAtTime(0.06, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.28);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(t);
      osc2.start(t);
      osc1.stop(t + 0.28);
      osc2.stop(t + 0.28);
    } catch (e) {
      console.warn("Audio chime failed", e);
    }
  }
}

export const audioEngine = new AudioEngine();
