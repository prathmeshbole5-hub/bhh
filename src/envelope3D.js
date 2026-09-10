/**
 * 3D ENVELOPE INTERACTION & SCATTERED FLOATING REAL PHOTOS
 * Multi-stage 3D envelope unsealing with real photos floating around the envelope.
 */

import { config } from '../config.js';
import { photoManager } from './photoManager.js';
import { revealLetterContent } from './letterReveal.js';

export function initEnvelope3D() {
  const envWrapper = document.getElementById('envelope-wrapper');
  const env3D = document.getElementById('envelope-3d');
  const seal = document.getElementById('envelope-seal');
  const topFlap = document.getElementById('env-top-flap');
  const insideGlow = document.getElementById('env-inside-glow');
  const letter = document.getElementById('envelope-letter');
  const hint = document.getElementById('seal-hint');
  const nameText = document.getElementById('envelope-name-text');
  const navBar = document.getElementById('floating-nav');
  const scatteredContainer = document.getElementById('envelope-scattered-photos');

  if (nameText) {
    nameText.textContent = `${config.sisterName} ❤️`;
  }

  // Dynamically render scattered floating real photos around the envelope
  if (scatteredContainer) {
    scatteredContainer.innerHTML = '';
    const allPhotos = photoManager.getAllPhotos();
    const positions = [
      { class: 'pos-top-left', rot: '-12deg', anim: 'floatOne' },
      { class: 'pos-top-right', rot: '10deg', anim: 'floatTwo' },
      { class: 'pos-bottom-left', rot: '8deg', anim: 'floatThree' },
      { class: 'pos-bottom-right', rot: '-14deg', anim: 'floatFour' },
      { class: 'pos-center-left', rot: '-5deg', anim: 'floatTwo' },
      { class: 'pos-center-right', rot: '6deg', anim: 'floatOne' }
    ];

    const photosToScatter = allPhotos.slice(0, Math.min(6, allPhotos.length));

    photosToScatter.forEach((pObj, idx) => {
      const pos = positions[idx % positions.length];
      const card = document.createElement('div');
      card.className = `scattered-photo-card ${pos.class} clickable-photo`;
      card.style.transform = `rotate(${pos.rot})`;
      card.style.animation = `${pos.anim} ${4 + idx * 0.8}s infinite ease-in-out`;

      card.innerHTML = `
        <div class="scattered-tape">📌</div>
        <div class="scattered-img-box">
          <img src="${pObj.src}" alt="${pObj.caption}" />
        </div>
        <span class="scattered-caption">${pObj.caption}</span>
      `;

      scatteredContainer.appendChild(card);
    });
  }

  let isOpen = false;

  // Mouse & Touch 3D Tilt Effect
  function handleTilt(e) {
    if (isOpen) return;

    const rect = envWrapper.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;

    const rotateX = (y / rect.height) * -20;
    const rotateY = (x / rect.width) * 20;

    env3D.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }

  function resetTilt() {
    if (isOpen) return;
    env3D.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  }

  window.addEventListener('mousemove', handleTilt);
  envWrapper?.addEventListener('mouseleave', resetTilt);
  window.addEventListener('touchmove', handleTilt, { passive: true });
  window.addEventListener('touchend', resetTilt);

  // CINEMATIC OPENING SEQUENCE
  seal?.addEventListener('click', openEnvelopeSequence);

  function openEnvelopeSequence() {
    if (isOpen) return;
    isOpen = true;

    if (hint) hint.style.display = 'none';

    // Stage 1: Move forward toward screen
    env3D.style.transform = 'translateZ(60px) scale(1.05)';

    // Stage 2: Seal Glows & Breaks
    seal.style.transform = 'translate(-50%, -20%) scale(1.3)';
    seal.style.boxShadow = '0 0 40px #f4c430, 0 0 80px #e8a5b8';

    setTimeout(() => {
      seal.style.opacity = '0';
      seal.style.pointerEvents = 'none';

      // Stage 3 & 4: Envelope flap slowly opens 180deg upward in 3D
      topFlap.style.transform = 'rotateX(180deg)';
      topFlap.style.zIndex = '1';

      // Stage 5: Warm interior light glow
      insideGlow.style.opacity = '1';

      // Stage 6 & 7: Ivory letter glides upward
      setTimeout(() => {
        letter.style.transform = 'translateY(-140px)';
        letter.style.zIndex = '10';

        // Stage 8: Letter pauses then expands to fullscreen read mode
        setTimeout(() => {
          letter.classList.add('expanded');

          // Reveal floating nav after letter opens
          if (navBar) navBar.classList.remove('hidden');

          // Stage 9: Trigger line-by-line Marathi text reveal
          setTimeout(() => {
            revealLetterContent();
          }, 600);
        }, 1200);

      }, 800);

    }, 600);
  }
}
