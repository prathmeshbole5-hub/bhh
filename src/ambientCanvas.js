/**
 * AMBIENT CANVAS BACKGROUND ENGINE
 * Creates living starry background with floating sparkles, glowing orbs, and soft hearts.
 */

export function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Particle types: Star, Sparkle, Orb, Heart
  const particles = [];
  const particleCount = Math.min(Math.floor(width / 15), 65);

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 20;
      this.size = Math.random() * 2.5 + 1;
      this.speedY = Math.random() * 0.4 + 0.15;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.7 + 0.2;
      this.fadeSpeed = Math.random() * 0.008 + 0.003;
      this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
      this.color = ['#c8a2c8', '#e8a5b8', '#f4c430', '#ffffff', '#e6d5e6'][
        Math.floor(Math.random() * 5)
      ];
      this.isHeart = Math.random() < 0.15; // 15% chance to be a tiny floating heart
      this.heartRotation = Math.random() * Math.PI * 2;
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX;

      this.opacity += this.fadeSpeed * this.fadeDirection;
      if (this.opacity >= 0.85) this.fadeDirection = -1;
      if (this.opacity <= 0.15) this.fadeDirection = 1;

      if (this.y < -20 || this.x < -20 || this.x > width + 20) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;
      ctx.shadowBlur = this.size * 3;
      ctx.shadowColor = this.color;

      if (this.isHeart) {
        // Draw tiny vector heart
        ctx.translate(this.x, this.y);
        ctx.scale(this.size * 0.6, this.size * 0.6);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-5, -5, -10, 2, 0, 10);
        ctx.bezierCurveTo(10, 2, 5, -5, 0, 0);
        ctx.fill();
      } else {
        // Draw starry sparkle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Subtle dark radial gradient
    const bgGrad = ctx.createRadialGradient(
      width / 2,
      height / 2,
      100,
      width / 2,
      height / 2,
      Math.max(width, height)
    );
    bgGrad.addColorStop(0, 'rgba(33, 12, 56, 0.4)');
    bgGrad.addColorStop(1, 'rgba(13, 7, 20, 0.95)');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}
