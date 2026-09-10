/**
 * 3D REASON CARDS WITH REAL PHOTOS — "WHY YOU ARE SPECIAL"
 * 6 Interactive 3D flippable cards featuring real photos & heartfelt notes.
 */

import { config } from '../config.js';
import { photoManager } from './photoManager.js';

export function initSpecialCards() {
  const titleEl = document.getElementById('special-title');
  const grid = document.getElementById('special-cards-grid');

  if (!grid) return;

  if (titleEl) titleEl.textContent = config.specialCardsTitle;

  grid.innerHTML = '';

  const specialPhotos = photoManager.getSectionPhotos().specialCards;

  config.specialCards.forEach((item, idx) => {
    const photoObj = specialPhotos[idx % specialPhotos.length];
    const card = document.createElement('div');
    card.className = 'special-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    card.innerHTML = `
      <div class="special-card-inner">
        <div class="special-card-front">
          <div class="special-card-photo-wrapper clickable-photo">
            <img src="${photoObj.src}" alt="${item.title}" />
          </div>
          <div class="special-icon">${item.icon}</div>
          <h3 class="special-card-title">${item.title}</h3>
          <p class="special-card-short">${item.short}</p>
          <span class="tap-hint">Tap to flip ❤️</span>
        </div>
        <div class="special-card-back">
          <div class="special-icon">${item.icon}</div>
          <p class="special-card-full">${item.full}</p>
          <span class="tap-hint">Tap to flip back 🔄</span>
        </div>
      </div>
    `;

    card.addEventListener('click', (e) => {
      // Don't flip if clicking directly on the photo thumbnail
      if (e.target.closest('.clickable-photo')) return;
      card.classList.toggle('flipped');
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        card.classList.toggle('flipped');
      }
    });

    grid.appendChild(card);
  });
}
