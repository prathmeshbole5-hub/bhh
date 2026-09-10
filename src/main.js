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

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 35 + 20;
    if (loaderBar) loaderBar.style.width = `${Math.min(progress, 100)}%`;

    if (progress >= 100) {
      clearInterval(interval);
      if (loaderScreen) {
        loaderScreen.classList.add('fade-out');
        setTimeout(() => {
          loaderScreen.style.display = 'none';
        }, 500);
      }
    }
  }, 80);

  // Initialize all experience modules
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
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
