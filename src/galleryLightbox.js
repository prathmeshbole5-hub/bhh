/**
 * EDITORIAL REAL PHOTO GALLERY & FULLSCREEN LIGHTBOX MODAL
 * Dynamic masonry grid & universal lightbox viewer for all real photos.
 */

import { photoManager } from './photoManager.js';

let globalOpenLightbox = null;

export function openLightboxBySrc(src) {
  if (globalOpenLightbox) globalOpenLightbox(src);
}

export function initGalleryLightbox() {
  const heroPortraitImg = document.getElementById('hero-portrait-img');
  const heroBgImg = document.getElementById('hero-bg-img');
  const galleryGrid = document.getElementById('photo-gallery');
  const lightbox = document.getElementById('photo-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTag = document.getElementById('lightbox-tag');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  const allPhotos = photoManager.getAllPhotos();
  const sectionPhotos = photoManager.getSectionPhotos();

  // Populate Hero Portrait real photo
  if (sectionPhotos.heroPortrait) {
    if (heroPortraitImg) heroPortraitImg.src = sectionPhotos.heroPortrait.src;
    if (heroBgImg) heroBgImg.src = sectionPhotos.heroPortrait.src;
  }

  if (!galleryGrid || !lightbox) return;

  galleryGrid.innerHTML = '';
  let currentIndex = 0;

  // Render dynamic photo cards from allPhotos pool
  allPhotos.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = `memory-card type-${item.type || 'polaroid'} clickable-photo`;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View ${item.caption}`);

    card.innerHTML = `
      <div class="memory-img-wrapper">
        <img class="memory-img" src="${item.src}" alt="${item.caption}" loading="lazy" />
        <div class="memory-overlay">
          <span class="memory-tag">${item.tag || 'Memory'}</span>
          <h3 class="memory-caption">${item.caption}</h3>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openLightbox(index));
    galleryGrid.appendChild(card);
  });

  function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    if (typeof lightbox.showModal === 'function') {
      lightbox.showModal();
    } else {
      lightbox.setAttribute('open', '');
    }
  }

  function openLightboxByImageSrc(src) {
    const foundIdx = allPhotos.findIndex(p => p.src === src);
    if (foundIdx !== -1) {
      openLightbox(foundIdx);
    } else {
      // Temporary fallback photo object
      lightboxImg.src = src;
      if (lightboxCaption) lightboxCaption.textContent = "माझी लाडकी ताई ❤️";
      if (typeof lightbox.showModal === 'function') lightbox.showModal();
    }
  }

  globalOpenLightbox = openLightboxByImageSrc;

  function updateLightboxContent() {
    const currentPhoto = allPhotos[currentIndex];
    if (!currentPhoto) return;

    lightboxImg.src = currentPhoto.src;
    lightboxImg.alt = currentPhoto.caption;
    if (lightboxTag) lightboxTag.textContent = currentPhoto.tag || 'Memory';
    if (lightboxCaption) lightboxCaption.textContent = currentPhoto.caption;
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentIndex + 1} / ${allPhotos.length}`;
    }
  }

  function closeLightbox() {
    if (typeof lightbox.close === 'function') {
      lightbox.close();
    } else {
      lightbox.removeAttribute('open');
    }
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % allPhotos.length;
    updateLightboxContent();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + allPhotos.length) % allPhotos.length;
    updateLightboxContent();
  }

  closeBtn?.addEventListener('click', closeLightbox);
  nextBtn?.addEventListener('click', showNext);
  prevBtn?.addEventListener('click', showPrev);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Global click delegator for any .clickable-photo element
  document.addEventListener('click', (e) => {
    const clickableContainer = e.target.closest('.clickable-photo');
    if (clickableContainer && !clickableContainer.classList.contains('memory-card')) {
      const img = clickableContainer.querySelector('img');
      if (img && img.src) {
        openLightboxByImageSrc(img.src);
      }
    }
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!lightbox.open) return;
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'Escape') closeLightbox();
  });
}
