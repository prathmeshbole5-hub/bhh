/**
 * ANIMATED MEMORY TIMELINE WITH REAL PHOTOS
 * Scroll-driven vertical timeline line fill & real photo memory cards.
 */

import { config } from '../config.js';
import { photoManager } from './photoManager.js';

export function initTimeline() {
  const titleEl = document.getElementById('timeline-title');
  const subEl = document.getElementById('timeline-subtitle');
  const container = document.getElementById('timeline-nodes-container');
  const fillLine = document.getElementById('timeline-progress-fill');

  if (!container) return;

  if (titleEl) titleEl.textContent = config.timelineTitle;
  if (subEl) subEl.textContent = config.timelineSubtitle;

  container.innerHTML = '';

  const timelinePhotos = photoManager.getSectionPhotos().timeline;

  config.timelineEvents.forEach((ev, idx) => {
    const photoObj = timelinePhotos[idx % timelinePhotos.length];
    const node = document.createElement('div');
    node.className = 'timeline-node';

    node.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card glass-panel">
        <span class="timeline-year">${ev.year}</span>
        <h3 class="timeline-card-title">${ev.title}</h3>
        <p class="timeline-card-desc">${ev.desc}</p>
        <div class="timeline-photo-slot clickable-photo">
          <img src="${photoObj.src}" alt="${ev.title}" loading="lazy" />
        </div>
      </div>
    `;

    container.appendChild(node);
  });

  // Scroll Progress Fill Line Handler
  function updateTimelineProgress() {
    const section = document.getElementById('section-timeline');
    if (!section || !fillLine) return;

    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      const totalDist = rect.height;
      const currentDist = windowHeight - rect.top;
      const progress = Math.min(Math.max(currentDist / totalDist, 0), 1);
      fillLine.style.height = `${progress * 100}%`;
    }
  }

  window.addEventListener('scroll', updateTimelineProgress, { passive: true });
}
