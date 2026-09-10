/**
 * 🎵 REAL BIRTHDAY AUDIO PLAYER & MUSIC BOX SYNTHESIZER
 * Plays real Happy Birthday audio track from /assets/birthday-song.mp3
 * with automatic continuous looping and user interaction auto-start.
 */

import { config } from '../config.js';

export function initAudioPlayer() {
  const toggleBtn = document.getElementById('audio-toggle-btn');
  const audioText = document.getElementById('audio-text');
  const audioIcon = document.getElementById('audio-icon');

  let isPlaying = false;
  
  // Try loading real generated WAV / MP3 audio file
  let audioEl = new Audio('/assets/birthday-song.wav');
  audioEl.loop = true;
  audioEl.volume = 0.65;

  let synthContext = null;
  let synthInterval = null;
  let useSynthFallback = false;

  audioEl.addEventListener('error', () => {
    // Fallback to MP3 path
    audioEl = new Audio(config.musicPath || '/assets/birthday-song.mp3');
    audioEl.loop = true;
    audioEl.volume = 0.65;
    audioEl.addEventListener('error', () => {
      console.log("Audio file error. Using Web Audio chime synth fallback.");
      useSynthFallback = true;
    });
  });

  // Happy Birthday melody frequencies
  const birthdayMelody = [
    264.63, 264.63, 297.00, 264.63, 352.00, 330.00,        // Happy Birthday to You
    264.63, 264.63, 297.00, 264.63, 396.00, 352.00,        // Happy Birthday to You
    264.63, 264.63, 528.00, 440.00, 352.00, 330.00, 297.00,   // Happy Birthday Dear Neha Didi
    466.16, 466.16, 440.00, 352.00, 396.00, 352.00         // Happy Birthday to You
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

      gain.gain.setValueAtTime(0.01, synthContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.15, synthContext.currentTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, synthContext.currentTime + 0.7);

      osc.connect(gain);
      gain.connect(synthContext.destination);

      osc.start();
      osc.stop(synthContext.currentTime + 0.75);
    } catch (e) {
      console.warn("Synth error:", e);
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
        console.warn("Audio element play error, using synth fallback:", err);
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

  toggleBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isPlaying) {
      pauseMusic();
    } else {
      startMusic();
    }
  });

  // Start music automatically on any click or touch gesture
  function handleGesture() {
    startMusic();
  }

  window.addEventListener('click', handleGesture, { once: true });
  window.addEventListener('touchstart', handleGesture, { once: true });

  window.__startBirthdayMusic = startMusic;

  return { startMusic, pauseMusic };
}

