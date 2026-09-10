import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('photos');
const destDir = path.resolve('public/photos');

if (!fs.existsSync(srcDir)) {
  console.log("No photos directory found in root.");
  process.exit(0);
}

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
let count = 0;

files.forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if (['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext)) {
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
    count++;
  }
});

console.log(`Successfully synced ${count} real photos from /photos to /public/photos!`);
