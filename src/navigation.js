/**
 * FLOATING NAVIGATION & SCROLL SPY CONTROLLER
 * Active section detection, scroll progress indicator, and smooth navigation.
 */

export function initNavigation() {
  const navBtns = document.querySelectorAll('.nav-btn');
  const progressBar = document.getElementById('nav-progress-bar');
  const sections = document.querySelectorAll('section');

  if (!navBtns.length) return;

  // Smooth scroll handler
  navBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Ensure chapter is visible if hidden
        targetSection.classList.add('show-chapter');
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Scroll spy & progress bar update
  function onScroll() {
    const scrollPos = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(Math.max(scrollPos / (docHeight || 1), 0), 1);

    if (progressBar) {
      progressBar.style.transform = `scaleX(${progress})`;
    }

    // Determine active section
    let currentSectionId = '';
    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
        currentSectionId = sec.id;
      }
    });

    if (currentSectionId) {
      navBtns.forEach((btn) => {
        if (btn.getAttribute('data-target') === currentSectionId) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}
