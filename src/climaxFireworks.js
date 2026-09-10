/**
 * FINAL CINEMATIC CELEBRATION WITH REAL PHOTO PORTRAIT & FIREWORKS
 * Sequential text reveal, real photo climax portrait, confetti fireworks burst, & replay.
 */

import confetti from 'canvas-confetti';
import { config } from '../config.js';
import { photoManager } from './photoManager.js';

export function initClimaxFireworks() {
  const titleEl = document.getElementById('final-title-text');
  const linesContainer = document.getElementById('final-lines-container');
  const signEl = document.getElementById('final-sign-text');
  const replayBtn = document.getElementById('replay-btn');
  const climaxSec = document.getElementById('section-final');
  const finalPortraitImg = document.getElementById('final-portrait-img');

  if (!climaxSec) return;

  if (titleEl) titleEl.textContent = config.finalTitle;
  if (signEl) signEl.textContent = config.finalSign;

  // Bind real photo to climax portrait
  const sectionPhotos = photoManager.getSectionPhotos();
  if (finalPortraitImg && sectionPhotos.finalClimax) {
    finalPortraitImg.src = sectionPhotos.finalClimax.src;
  }

  if (linesContainer) {
    linesContainer.innerHTML = '';
    config.finalLines.forEach((lineText) => {
      const line = document.createElement('div');
      line.className = 'climax-line';
      line.textContent = lineText;
      linesContainer.appendChild(line);
    });
  }

  let hasTriggeredClimax = false;

  // Trigger climax animation when final section enters viewport
  function checkClimaxTrigger() {
    if (hasTriggeredClimax) return;

    const rect = climaxSec.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.7) {
      hasTriggeredClimax = true;
      startClimaxSequence();
    }
  }

  function startClimaxSequence() {
    // Sequential lines reveal
    const lines = linesContainer?.querySelectorAll('.climax-line') || [];
    lines.forEach((line, idx) => {
      setTimeout(() => {
        line.classList.add('visible');
      }, idx * 1000 + 500);
    });

    // Launch Confetti Fireworks Burst
    setTimeout(() => {
      launchConfettiFireworks();
    }, 1500);
  }

  function launchConfettiFireworks() {
    const duration = 6 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Gold & Pink Sparkle Confetti Cannon Left & Right
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#f4c430', '#e8a5b8', '#c8a2c8', '#ffffff', '#ff69b4']
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#f4c430', '#e8a5b8', '#c8a2c8', '#ffffff', '#ff69b4']
      });
    }, 250);
  }

  window.addEventListener('scroll', checkClimaxTrigger, { passive: true });

  // Replay Button Handler
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
