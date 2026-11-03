// Centralized audio/video helpers (menu/game music + help videos).
export function createMedia() {
  var media = {
    audioEl: null,
    videoEl: null,
    _currentAudio: null,
    audio: {
      menu: "media/audio/menu.mp3",
      game: "media/audio/game.mp3"
    },
    video: [
      {webm: "media/video/goal.webm", mp4: "media/video/goal.mp4"},
      {webm: "media/video/howto.webm", mp4: "media/video/howto.mp4"},
      {webm: "media/video/objects.webm", mp4: "media/video/objects.mp4"},
      {webm: "media/video/walk.webm", mp4: "media/video/walk.mp4"},
      {webm: "media/video/turnRight.webm", mp4: "media/video/turnRight.mp4"},
      {webm: "media/video/turnLeft.webm", mp4: "media/video/turnLeft.mp4"},
      {webm: "media/video/jump.webm", mp4: "media/video/jump.mp4"},
      {webm: "media/video/light.webm", mp4: "media/video/light.mp4"},
      {webm: "media/video/repeat.webm", mp4: "media/video/repeat.mp4"},
      {webm: "media/video/medal.webm", mp4: "media/video/medal.mp4"}
    ],
    audioEnabled: false,
    _sfxCtx: null,
    // Short synthesized sound effects (Web Audio API), so no extra audio files are needed.
    // Each effect is a list of notes: [frequency (Hz), start offset (s), duration (s), waveform].
    sfx: {
      lightOn: [[660, 0, 0.08, "square"], [990, 0.07, 0.12, "square"]],
      lightOff: [[520, 0, 0.08, "square"], [330, 0.07, 0.12, "square"]],
      jump: [[300, 0, 0.06, "triangle"], [450, 0.05, 0.06, "triangle"], [600, 0.1, 0.08, "triangle"]],
      bump: [[110, 0, 0.12, "sawtooth"]],
      levelComplete: [[523, 0, 0.12, "triangle"], [659, 0.12, 0.12, "triangle"], [784, 0.24, 0.12, "triangle"], [1047, 0.36, 0.35, "triangle"]],
      achievement: [[880, 0, 0.1, "sine"], [1175, 0.1, 0.1, "sine"], [1760, 0.2, 0.3, "sine"]]
    },
    _getSfxContext: function () {
      if (this._sfxCtx) return this._sfxCtx;
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      this._sfxCtx = new Ctx();
      return this._sfxCtx;
    },
    playSfx: function (name) {
      // Sound effects follow the same on/off toggle as the music.
      if (!this.audioEnabled) return;
      var notes = this.sfx[name];
      if (!notes) return;
      var ctx = this._getSfxContext();
      if (!ctx) return;
      if (ctx.state === "suspended" && typeof ctx.resume === "function") ctx.resume();

      var now = ctx.currentTime;
      for (var i = 0; i < notes.length; i++) {
        var freq = notes[i][0];
        var start = now + notes[i][1];
        var duration = notes[i][2];

        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
        osc.type = notes[i][3] || "sine";
        osc.frequency.setValueAtTime(freq, start);

        // quick attack + exponential decay to avoid clicks.
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(0.12, start + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + duration + 0.02);
      }
    },
    init: function () {
      this.audioEl = document.getElementById("audioPlayer");
      this.videoEl = document.getElementById("videoPlayer");

      var self = this;
      if (this.audioEl) {
        this.audioEl.loop = true;
        this.audioEl.muted = true;
        ["play", "playing", "pause", "ended"].forEach(function (evt) {
          self.audioEl.addEventListener(evt, function () { self.syncAudioButtonState(); });
        });
      }

      this.syncAudioButtonState();
    },
    _tryPlayAudio: function () {
      if (!this.audioEl) return;
      if (!this.audioEnabled) return;

      var p = this.audioEl.play();
      if (p && typeof p.catch === "function") p.catch(function () { });
    },
    _setAudio: function (key) {
      if (!this.audioEl) return;
      if (this._currentAudio === key) return;

      this._currentAudio = key;
      this.audioEl.src = this.audio[key];
      this.audioEl.load();
    },
    playMenuAudio: function() {
      this._setAudio("menu");
      this._tryPlayAudio();
    },
    playGameAudio: function () {
      this._setAudio("game");
      this._tryPlayAudio();
    },
    playVideo: function(x) {
      if (!this.videoEl) return;
      var item = this.video[x];
      if (!item) return;

      // reset sources so the browser reloads the selected clip.
      while (this.videoEl.firstChild) this.videoEl.removeChild(this.videoEl.firstChild);

      var sources = [
        { src: item.webm, type: "video/webm" },
        { src: item.mp4, type: "video/mp4" }
      ];

      for (var i = 0; i < sources.length; i++) {
        if (!sources[i].src) continue;
        var s = document.createElement("source");
        s.src = sources[i].src;
        s.type = sources[i].type;
        this.videoEl.appendChild(s);
      }

      this.videoEl.load();
    },
    syncAudioButtonState: function () {
      var isEnabled = !!this.audioEnabled;
      var buttons = document.querySelectorAll('.audioToggleButton');
      for (var i = 0; i < buttons.length; i++) {
        var btn = buttons[i];
        if (!btn) continue;
        btn.setAttribute('aria-pressed', isEnabled ? 'true' : 'false');

        var onIcon = btn.querySelector('.lb-audio-on');
        var offIcon = btn.querySelector('.lb-audio-off');

        if (onIcon && onIcon.classList) onIcon.classList.toggle('hidden', !isEnabled);
        if (offIcon && offIcon.classList) offIcon.classList.toggle('hidden', isEnabled);
      }
    },
    toggleAudioOn: function() {
      this.audioEnabled = true;
      if (this.audioEl) this.audioEl.muted = false;
      this._tryPlayAudio();
      this.syncAudioButtonState();
      var self = this;
      setTimeout(function () { self.syncAudioButtonState(); }, 0);
    },
    toggleAudioOff: function() {
      this.audioEnabled = false;
      if (this.audioEl) {
        this.audioEl.pause();
        this.audioEl.muted = true;
      }
      this.syncAudioButtonState();
    },
    toggleAudio: function() {
      if (this.audioEnabled) {
        this.toggleAudioOff();
      } else {
        this.toggleAudioOn();
      }
    }
  };

  return media;
}
