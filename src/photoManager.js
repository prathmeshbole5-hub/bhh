/**
 * 📸 REAL PHOTO MANAGER & DISTRIBUTION SYSTEM
 * Scans all 13 real photos from /photos folder and provides them to all website sections.
 */

const knownFilenames = [
  "WhatsApp Image 2026-09-10 at 15.08.48 (1).jpeg",
  "WhatsApp Image 2026-09-10 at 15.08.48 (2).jpeg",
  "WhatsApp Image 2026-09-10 at 15.08.48.jpeg",
  "WhatsApp Image 2026-09-10 at 15.08.49 (1).jpeg",
  "WhatsApp Image 2026-09-10 at 15.08.49.jpeg",
  "WhatsApp Image 2026-09-10 at 15.10.38.jpeg",
  "WhatsApp Image 2026-09-10 at 15.10.39 (1).jpeg",
  "WhatsApp Image 2026-09-10 at 15.10.39.jpeg",
  "WhatsApp Image 2026-09-10 at 15.10.40 (1).jpeg",
  "WhatsApp Image 2026-09-10 at 15.10.40 (2).jpeg",
  "WhatsApp Image 2026-09-10 at 15.10.40.jpeg",
  "WhatsApp Image 2026-09-10 at 15.10.41 (1).jpeg",
  "WhatsApp Image 2026-09-10 at 15.10.41.jpeg"
];

const photoCaptions = [
  { caption: "माझी लाडकी ताई ❤️", tag: "Special Memory", type: "featured" },
  { caption: "तुझं हे हसू कायम असंच राहू दे ✨", tag: "Pure Joy", type: "polaroid" },
  { caption: "एक सुंदर आठवण 🌸", tag: "Golden Moments", type: "rotated" },
  { caption: "हा क्षण कायम लक्षात राहील ❤️", tag: "Unforgettable", type: "polaroid" },
  { caption: "Always keep smiling 😊", tag: "Sister Love", type: "wide" },
  { caption: "जगातील सर्वात खास ताई 💫", tag: "Best Sister", type: "polaroid" },
  { caption: "गोड क्षण आणि आठवणी 💖", tag: "Sweet Memories", type: "rotated" },
  { caption: "आनंदी आणि सुंदर क्षण 🌟", tag: "Joyful Moments", type: "polaroid" },
  { caption: "नेहमी अशीच चमकत राहा ✨", tag: "Shine Always", type: "wide" },
  { caption: "ताईसोबतचे खास क्षण 🌺", tag: "Treasured Time", type: "featured" },
  { caption: "तुझं प्रेम आणि आपुलकी 💕", tag: "Warm Love", type: "polaroid" },
  { caption: "सुंदर आठवणींचा ठेवा 👑", tag: "Golden Heart", type: "rotated" },
  { caption: "आपलं घट्ट नातं 🤝", tag: "Brother Sister Bond", type: "polaroid" }
];

const photoList = knownFilenames.map((name, idx) => {
  const meta = photoCaptions[idx % photoCaptions.length];
  return {
    id: idx + 1,
    src: `/photos/${name}`,
    alt: `Neha Didi Photo ${idx + 1}`,
    caption: meta.caption,
    tag: meta.tag,
    type: meta.type
  };
});

export const photoManager = {
  getAllPhotos() {
    return photoList;
  },

  getPhoto(index) {
    if (photoList.length === 0) return null;
    return photoList[index % photoList.length];
  },

  getSectionPhotos() {
    const total = photoList.length;
    return {
      envelopeReveal: photoList[0 % total],
      letterAttached: photoList[1 % total],
      heroPortrait: photoList[2 % total],
      galleryGrid: photoList,
      timeline: [
        photoList[3 % total],
        photoList[4 % total],
        photoList[5 % total],
        photoList[6 % total]
      ],
      specialCards: [
        photoList[7 % total],
        photoList[8 % total],
        photoList[9 % total],
        photoList[10 % total],
        photoList[11 % total],
        photoList[12 % total]
      ],
      finalClimax: photoList[0 % total]
    };
  }
};
