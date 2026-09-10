/**
 * AUDIO PLAYER & SOOTHING BIRTHDAY MUSIC SYNTHESIZER
 * Background music manager with auto-start on first user tap/click.
 */

import { config } from '../config.js';

export function initAudioPlayer() {
  const toggleBtn = document.getElementById('audio-toggle-btn');
  const audioText = document.getElementById('audio-text');
  const audioIcon = document.getElementById('audio-icon');

  let isPlaying = false;
  let audioEl = new Audio(config.musicPath);
  audioEl.loop = true;
  audioEl.volume = 0.5;

  let synthContext = null;
  let synthInterval = null;
  let useSynthFallback = false;

  audioEl.addEventListener('error', () => {
    console.log("Custom MP3 not found. Using built-in Web Audio birthday chime synth.");
    useSynthFallback = true;
  });

  // Soft Web Audio API Birthday Lullaby Chime Melody
  const birthdayMelody = [
    264, 264, 297, 264, 352, 330,        // Happy Birthday to You
    264, 264, 297, 264, 396, 352,        // Happy Birthday to You
    264, 264, 528, 440, 352, 330, 297,   // Happy Birthday Dear Neha Didi
    466, 466, 440, 352, 396, 352         // Happy Birthday to You
  ];
  let noteIndex = 0;

  function playSynthMelody() {
    try {
      if (!synthContext) {
        synthContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (synthContext.state === 'suspended') {
        synthContext.resume();
      }

      const osc = synthContext.createOscillator();
      const gain = synthContext.createGain();

      const freq = birthdayMelody[noteIndex % birthdayMelody.length];
      noteIndex++;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, synthContext.currentTime);

      // Gentle chime envelope
      gain.gain.setValueAtTime(0.01, synthContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12, synthContext.currentTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, synthContext.currentTime + 0.7);

      osc.connect(gain);
      gain.connect(synthContext.destination);

      osc.start();
      osc.stop(synthContext.currentTime + 0.75);
    } catch (e) {
      console.warn("Synth playback error:", e);
    }
  }

  function startMusic() {
    if (isPlaying) return;

    if (useSynthFallback) {
      playSynthMelody();
      if (!synthInterval) {
        synthInterval = setInterval(playSynthMelody, 500);
      }
    } else {
      audioEl.play().catch(err => {
        console.warn("MP3 blocked, switching to synth:", err);
        useSynthFallback = true;
        playSynthMelody();
        if (!synthInterval) {
          synthInterval = setInterval(playSynthMelody, 500);
        }
      });
    }

    isPlaying = true;
    if (toggleBtn) toggleBtn.classList.add('playing');
    if (audioText) audioText.textContent = "Pause Music";
    if (audioIcon) audioIcon.textContent = "⏸";
  }

  function pauseMusic() {
    if (audioEl) audioEl.pause();
    if (synthInterval) {
      clearInterval(synthInterval);
      synthInterval = null;
    }

    isPlaying = false;
    if (toggleBtn) toggleBtn.classList.remove('playing');
    if (audioText) audioText.textContent = "Play Music";
    if (audioIcon) audioIcon.textContent = "🎵";
  }

  // Toggle button click handler
  toggleBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isPlaying) {
      pauseMusic();
    } else {
      startMusic();
    }
  });

  // AUTO-PLAY MUSIC ON FIRST CLICK/TAP ANYWHERE ON SITE
  function handleFirstUserGesture() {
    if (!isPlaying) {
      startMusic();
    }
    window.removeEventListener('click', handleFirstUserGesture);
    window.removeEventListener('touchstart', handleFirstUserGesture);
  }

  window.addEventListener('click', handleFirstUserGesture, { once: true });
  window.addEventListener('touchstart', handleFirstUserGesture, { once: true });

  return { startMusic, pauseMusic };
}
