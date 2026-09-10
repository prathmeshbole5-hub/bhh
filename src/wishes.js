/**
 * BIRTHDAY WISHES CONTROLLER
 * Staggered floating wish chips with glitter hover interaction.
 */

import { config } from '../config.js';

export function initWishes() {
  const titleEl = document.getElementById('wishes-title');
  const container = document.getElementById('wishes-container');

  if (!container) return;

  if (titleEl) titleEl.textContent = config.wishesTitle;

  container.innerHTML = '';

  config.wishes.forEach((text) => {
    const chip = document.createElement('div');
    chip.className = 'wish-chip';
    chip.textContent = text;

    chip.addEventListener('mouseenter', () => {
      chip.style.transform = 'scale(1.08) translateY(-4px)';
    });

    chip.addEventListener('mouseleave', () => {
      chip.style.transform = 'none';
    });

    container.appendChild(chip);
  });
}
