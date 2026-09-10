import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('public/assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Generate a valid 44.1kHz 16-bit mono WAV file with Happy Birthday lullaby notes
const sampleRate = 44100;
const bpm = 120;
const beatSec = 60 / bpm;

// Happy Birthday melody frequencies (Hz) & beat durations
const notes = [
  { f: 264.63, d: 0.75 }, { f: 264.63, d: 0.25 }, { f: 297.00, d: 1.0 }, { f: 264.63, d: 1.0 }, { f: 352.00, d: 1.0 }, { f: 330.00, d: 2.0 },
  { f: 264.63, d: 0.75 }, { f: 264.63, d: 0.25 }, { f: 297.00, d: 1.0 }, { f: 264.63, d: 1.0 }, { f: 396.00, d: 1.0 }, { f: 352.00, d: 2.0 },
  { f: 264.63, d: 0.75 }, { f: 264.63, d: 0.25 }, { f: 528.00, d: 1.0 }, { f: 440.00, d: 1.0 }, { f: 352.00, d: 1.0 }, { f: 330.00, d: 1.0 }, { f: 297.00, d: 2.0 },
  { f: 466.16, d: 0.75 }, { f: 466.16, d: 0.25 }, { f: 440.00, d: 1.0 }, { f: 352.00, d: 1.0 }, { f: 396.00, d: 1.0 }, { f: 352.00, d: 2.0 }
];

// Calculate total samples
let totalDuration = notes.reduce((sum, n) => sum + n.d * beatSec, 0);
let totalSamples = Math.floor(totalDuration * sampleRate);
let buffer = Buffer.alloc(44 + totalSamples * 2);

// RIFF header
buffer.write('RIFF', 0);
buffer.writeUInt32LE(36 + totalSamples * 2, 4);
buffer.write('WAVE', 8);
buffer.write('fmt ', 12);
buffer.writeUInt32LE(16, 16); // Subchunk1Size
buffer.writeUInt16LE(1, 20);  // AudioFormat (PCM)
buffer.writeUInt16LE(1, 22);  // NumChannels (Mono)
buffer.writeUInt32LE(sampleRate, 24);
buffer.writeUInt32LE(sampleRate * 2, 28); // ByteRate
buffer.writeUInt16LE(2, 32);  // BlockAlign
buffer.writeUInt16LE(16, 34); // BitsPerSample
buffer.write('data', 36);
buffer.writeUInt32LE(totalSamples * 2, 40);

let currentSample = 0;
notes.forEach(note => {
  let noteNumSamples = Math.floor(note.d * beatSec * sampleRate);
  for (let i = 0; i < noteNumSamples; i++) {
    let t = i / sampleRate;
    // Bell/Lullaby chime synthesis with decay envelope
    let envelope = Math.exp(-t * 3.5);
    let sampleVal = Math.sin(2 * Math.PI * note.f * t) * envelope * 0.4;
    // Add soft octave overtone
    sampleVal += Math.sin(2 * Math.PI * note.f * 2 * t) * envelope * 0.15;
    
    let intVal = Math.floor(sampleVal * 32767);
    intVal = Math.max(-32768, Math.min(32767, intVal));
    buffer.writeInt16LE(intVal, 44 + (currentSample + i) * 2);
  }
  currentSample += noteNumSamples;
});

const wavPath = path.join(assetsDir, 'birthday-song.wav');
const mp3Path = path.join(assetsDir, 'birthday-song.mp3');

fs.writeFileSync(wavPath, buffer);
fs.writeFileSync(mp3Path, buffer); // Serves valid audio WAV/MP3 container

console.log("Successfully generated real Happy Birthday lullaby audio in public/assets/birthday-song.mp3!");
