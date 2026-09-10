/**
 * MARATHI BIRTHDAY LETTER REVEAL CONTROLLER
 * Staggered paragraph-by-paragraph text reveal & chapter transition button.
 */

import { config } from '../config.js';

export function revealLetterContent() {
  const greetingEl = document.getElementById('letter-greeting');
  const dateEl = document.getElementById('letter-date-text');
  const bodyEl = document.getElementById('letter-body');
  const nextBtn = document.getElementById('letter-next-btn');

  if (!bodyEl) return;

  if (greetingEl) greetingEl.textContent = config.letterGreeting;
  if (dateEl) dateEl.textContent = config.birthdayDateText;

  bodyEl.innerHTML = '';

  // Create paragraph elements
  const paragraphEls = config.letterParagraphs.map((text, idx) => {
    const p = document.createElement('p');
    p.className = 'letter-paragraph';
    p.textContent = text;
    bodyEl.appendChild(p);
    return p;
  });

  // Staggered reveal animation
  paragraphEls.forEach((p, idx) => {
    setTimeout(() => {
      p.classList.add('visible');

      // If last paragraph revealed, show "पुढे चला ❤️" button
      if (idx === paragraphEls.length - 1) {
        setTimeout(() => {
          if (nextBtn) {
            nextBtn.classList.remove('hidden');
          }
        }, 800);
      }
    }, idx * 1200 + 400);
  });

  // Next button click handler
  if (nextBtn) {
    nextBtn.onclick = () => {
      // Reveal all subsequent story chapters
      const storySec = document.getElementById('section-story');
      const memSec = document.getElementById('section-memories');
      const timelineSec = document.getElementById('section-timeline');
      const specialSec = document.getElementById('section-special');
      const wishesSec = document.getElementById('section-wishes');
      const secretSec = document.getElementById('section-secret');
      const finalSec = document.getElementById('section-final');

      [storySec, memSec, timelineSec, specialSec, wishesSec, secretSec, finalSec].forEach(sec => {
        if (sec) sec.classList.add('show-chapter');
      });

      // Smooth scroll to story chapter
      if (storySec) {
        storySec.scrollIntoView({ behavior: 'smooth' });
      }
    };
  }
}
