/**
 * 🎂 MAIN APPLICATION ORCHESTRATOR 🎂
 * Neha Didi's Cinematic Birthday Surprise Experience
 */

import { initAmbientCanvas } from './ambientCanvas.js';
import { initAudioPlayer } from './audioPlayer.js';
import { initEnvelope3D } from './envelope3D.js';
import { initGalleryLightbox } from './galleryLightbox.js';
import { initTimeline } from './timeline.js';
import { initSpecialCards } from './specialCards.js';
import { initWishes } from './wishes.js';
import { initSecretSurprise } from './secretSurprise.js';
import { initClimaxFireworks } from './climaxFireworks.js';
import { initNavigation } from './navigation.js';

function initApp() {
  const loaderBar = document.getElementById('loader-bar-fill');
  const loaderScreen = document.getElementById('loader-screen');
  const startBtn = document.getElementById('start-experience-btn');

  // Initialize modules first so event listeners are ready
  initAmbientCanvas();
  initAudioPlayer();
  initEnvelope3D();
  initGalleryLightbox();
  initTimeline();
  initSpecialCards();
  initWishes();
  initSecretSurprise();
  initClimaxFireworks();
  initNavigation();

  function dismissLoader() {
    if (!loaderScreen || loaderScreen.classList.contains('fade-out')) return;
    if (window.__startBirthdayMusic) {
      window.__startBirthdayMusic();
    }
    loaderScreen.classList.add('fade-out');
    setTimeout(() => {
      loaderScreen.style.display = 'none';
    }, 600);
  }

  startBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    dismissLoader();
  });

  loaderScreen?.addEventListener('click', () => {
    dismissLoader();
  });

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 25 + 15;
    if (loaderBar) loaderBar.style.width = `${Math.min(progress, 100)}%`;

    if (progress >= 100) {
      clearInterval(interval);
      if (startBtn) startBtn.classList.add('ready');
      // Auto dismiss after 2.5 seconds if user doesn't click
      setTimeout(() => {
        dismissLoader();
      }, 2500);
    }
  }, 100);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
