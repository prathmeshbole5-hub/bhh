import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('public/assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

function generateSVG(title, subtitle, icon, number, gradientStart, gradientEnd) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-${number}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${gradientStart}" />
      <stop offset="100%" stop-color="${gradientEnd}" />
    </linearGradient>
    <linearGradient id="gold-accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f4c430" />
      <stop offset="50%" stop-color="#fff2a3" />
      <stop offset="100%" stop-color="#e5a93c" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="15" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="600" rx="16" fill="url(#bg-${number})" />
  
  <!-- Subtle Grid Pattern -->
  <g opacity="0.08" stroke="#ffffff" stroke-width="1">
    <line x1="0" y1="150" x2="800" y2="150" />
    <line x1="0" y1="300" x2="800" y2="300" />
    <line x1="0" y1="450" x2="800" y2="450" />
    <line x1="200" y1="0" x2="200" y2="600" />
    <line x1="400" y1="0" x2="400" y2="600" />
    <line x1="600" y1="0" x2="600" y2="600" />
  </g>

  <!-- Decorative Border -->
  <rect x="24" y="24" width="752" height="552" rx="12" fill="none" stroke="url(#gold-accent)" stroke-width="2" opacity="0.4" stroke-dasharray="8 6" />

  <!-- Center Decorative Glow Circle -->
  <circle cx="400" cy="250" r="90" fill="#ffffff" opacity="0.04" filter="url(#glow)" />
  <circle cx="400" cy="250" r="70" fill="none" stroke="url(#gold-accent)" stroke-width="2" opacity="0.7" />

  <!-- Icon Emoji -->
  <text x="400" y="265" font-family="'Apple Color Emoji', 'Segoe UI Emoji', sans-serif" font-size="54" text-anchor="middle">${icon}</text>

  <!-- Photo Slot Number Badge -->
  <rect x="360" y="340" width="80" height="28" rx="14" fill="#ffffff" opacity="0.15" />
  <text x="400" y="359" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="14" fill="#ffffff" text-anchor="middle">PHOTO #${number}</text>

  <!-- Main Title -->
  <text x="400" y="420" font-family="'Rozha One', 'Mukta', 'Segoe UI', sans-serif" font-weight="700" font-size="28" fill="#ffffff" text-anchor="middle" filter="url(#glow)">${title}</text>
  
  <!-- Subtitle Instruction -->
  <text x="400" y="460" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#e8a5b8" text-anchor="middle" opacity="0.9">${subtitle}</text>

  <!-- Bottom File Hint -->
  <text x="400" y="520" font-family="monospace" font-size="13" fill="#f4c430" text-anchor="middle" opacity="0.8">Replace with: /assets/neha${number}.jpg</text>
</svg>`;
}

const photoConfigs = [
  { num: 1, title: "माझी लाडकी ताई ❤️", sub: "Replace in config.js with Neha Didi's real photo", icon: "👑", start: "#1a0b2e", end: "#3d1259" },
  { num: 2, title: "तुझं हे हसू कायम असंच राहू दे ✨", sub: "Polaroid Photo Frame • Memory #2", icon: "🌸", start: "#2c0e37", end: "#5c1849" },
  { num: 3, title: "एक सुंदर आठवण 🌸", sub: "Rotated Editorial Card • Memory #3", icon: "💫", start: "#180d38", end: "#41186e" },
  { num: 4, title: "हा क्षण कायम लक्षात राहील ❤️", sub: "Unforgettable Moment Frame • Memory #4", icon: "💖", start: "#360927", end: "#661338" },
  { num: 5, title: "Always Keep Smiling 😊", sub: "Cinematic Wide Photo Slot • Memory #5", icon: "🌺", start: "#130f30", end: "#382063" },
  { num: 6, title: "जगातील सर्वात खास ताई 💫", sub: "Special Memory Card • Memory #6", icon: "🌟", start: "#290c2e", end: "#591c4d" }
];

photoConfigs.forEach(cfg => {
  const content = generateSVG(cfg.title, cfg.sub, cfg.icon, cfg.num, cfg.start, cfg.end);
  fs.writeFileSync(path.join(assetsDir, `photo-placeholder-${cfg.num}.svg`), content);
});

// Timeline placeholders
const timelineConfigs = [
  { num: 1, title: "लहानपणीच्या गोड आठवणी", sub: "Childhood Memories Frame", icon: "🧸", start: "#1a0933", end: "#42125e" },
  { num: 2, title: "मार्गदर्शन आणि अभ्यास", sub: "School & Guidance Memory", icon: "📚", start: "#270830", end: "#59104b" },
  { num: 3, title: "सण आणि उत्सवाचा आनंद", sub: "Festive Celebrations Slot", icon: "🎆", start: "#120d36", end: "#3b1a6e" },
  { num: 4, title: "वाढदिवसाचा हा खास दिवस", sub: "Birthday Celebration Slot", icon: "🎂", start: "#300821", end: "#631038" }
];

timelineConfigs.forEach(cfg => {
  const content = generateSVG(cfg.title, cfg.sub, cfg.icon, cfg.num, cfg.start, cfg.end);
  fs.writeFileSync(path.join(assetsDir, `timeline-placeholder-${cfg.num}.svg`), content);
});

console.log("Successfully generated all high-end SVG photo placeholders in public/assets/!");
