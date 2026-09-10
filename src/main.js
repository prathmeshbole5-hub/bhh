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

document.addEventListener('DOMContentLoaded', () => {
  // Preloader progress bar
  const loaderBar = document.getElementById('loader-bar-fill');
  const loaderScreen = document.getElementById('loader-screen');

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 25 + 15;
    if (loaderBar) loaderBar.style.width = `${Math.min(progress, 100)}%`;

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        if (loaderScreen) loaderScreen.classList.add('fade-out');
        setTimeout(() => {
          if (loaderScreen) loaderScreen.style.display = 'none';
        }, 800);
      }, 400);
    }
  }, 180);

  // Initialize modules
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
});
