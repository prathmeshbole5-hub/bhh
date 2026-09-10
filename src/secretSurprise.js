/**
 * SECRET SURPRISE CONTROLLER — LOCKED HEART & HANDWRITTEN REVEAL
 * Interactive unlock button revealing a brother's heartfelt secret note.
 */

import { config } from '../config.js';

export function initSecretSurprise() {
  const titleEl = document.getElementById('secret-title');
  const hintEl = document.getElementById('secret-hint-text');
  const unlockBtn = document.getElementById('secret-unlock-btn');
  const lockCard = document.getElementById('secret-lock-card');
  const messageBox = document.getElementById('secret-message-box');
  const contentText = document.getElementById('secret-content-text');

  if (!unlockBtn || !lockCard || !messageBox) return;

  if (titleEl) titleEl.textContent = config.secretTitle;
  if (hintEl) hintEl.textContent = config.secretHint || 'Unlock ❤️';
  if (contentText) contentText.textContent = config.secretContent;

  unlockBtn.addEventListener('click', () => {
    // Lock burst animation
    unlockBtn.style.transform = 'scale(0.9)';
    lockCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    lockCard.style.opacity = '0';
    lockCard.style.transform = 'scale(0.95)';

    setTimeout(() => {
      lockCard.classList.add('hidden');
      messageBox.classList.remove('hidden');
      messageBox.style.animation = 'chapterFadeIn 0.8s ease forwards';
    }, 600);
  });
}
