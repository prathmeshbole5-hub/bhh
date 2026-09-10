/**
 * ====================================================================
 * 🎂 NEHA DIDI'S BIRTHDAY SURPRISE WEBSITE — CONFIGURATION FILE 🎂
 * ====================================================================
 * 
 * You can easily customize all text, messages, dates, photo URLs, captions,
 * timeline memories, secret messages, and audio settings right here.
 * 
 * 📸 HOW TO ADD NEHA DIDI'S REAL PHOTOS LATER:
 * 1. Place her photos in the `public/assets/` folder (e.g. `public/assets/neha1.jpg`).
 * 2. Update the `src` paths below in the `photos` array (e.g. `src: "/assets/neha1.jpg"`).
 * 3. The website will automatically format and display her photos in gorgeous frames!
 */

export const config = {
  // --- PERSONAL DETAILS ---
  sisterName: "Neha Didi",
  sisterMarathiName: "नेहा ताई",
  brotherName: "तुझा भाऊ ❤️",
  birthdayDateText: "विशेषांक • वाढदिवस २०२६",

  // --- AUDIO SETTINGS ---
  // You can place your custom mp3 file at public/assets/birthday-song.mp3
  // If the file is missing or blocked, the site automatically uses a built-in soft lullaby synthesizer!
  musicPath: "/assets/birthday-song.mp3",
  autoPlayAttempt: false,

  // --- CHAPTER 1: THE MARATHI BIRTHDAY LETTER ---
  letterGreeting: "प्रिय नेहा ताई, ❤️",
  letterParagraphs: [
    "तुला वाढदिवसाच्या खूप खूप शुभेच्छा! 🎂🥳 तू फक्त माझी मोठी बहीण नाहीस, तर माझी मार्गदर्शक, माझी काळजी घेणारी आणि प्रत्येक वेळी माझ्या पाठीशी खंबीरपणे उभी राहणारी व्यक्ती आहेस.",
    "लहानपणापासून आजपर्यंत तू मला खूप प्रेम दिलंस, माझ्या चुका झाल्या की मला ओरडलंस, योग्य मार्ग दाखवलास आणि प्रत्येक कठीण प्रसंगी माझी साथ दिलीस.",
    "आपली कधी भांडणं होतात, कधी मी तुला मुद्दाम त्रास देतो 😄, पण खरं सांगायचं तर तुझ्याशिवाय माझं आयुष्य नक्कीच अपूर्ण वाटेल. ❤️",
    "देवाकडे माझी एकच इच्छा आहे की तुझ्या आयुष्यात नेहमी आनंद, प्रेम आणि यश असावं, तुझी प्रत्येक इच्छा पूर्ण व्हावी आणि तुझ्या चेहऱ्यावरचं हे सुंदर हसू कायम असावं.",
    "तू अशीच हसत राहा, आनंदी राहा आणि आयुष्यात खूप मोठं यश मिळव. मला खूप अभिमान आहे की तू माझी ताई आहेस. ❤️",
    "वाढदिवसाच्या मनापासून खूप खूप शुभेच्छा, नेहा ताई! 🎂🌸 तू नेहमी अशीच खुश राहा आणि आयुष्यात कायम चमकत राहा! ✨❤️"
  ],

  // --- CHAPTER 2: MEMORY GALLERY (ADD YOUR REAL PHOTOS HERE LATER) ---
  photos: [
    {
      id: 1,
      src: "/assets/photo-placeholder-1.svg",
      caption: "माझी लाडकी ताई ❤️",
      tag: "Special Memory",
      type: "featured" // Large hero photo layout
    },
    {
      id: 2,
      src: "/assets/photo-placeholder-2.svg",
      caption: "तुझं हे हसू कायम असंच राहू दे ✨",
      tag: "Pure Joy",
      type: "polaroid"
    },
    {
      id: 3,
      src: "/assets/photo-placeholder-3.svg",
      caption: "एक सुंदर आठवण 🌸",
      tag: "Golden Moments",
      type: "rotated"
    },
    {
      id: 4,
      src: "/assets/photo-placeholder-4.svg",
      caption: "हा क्षण कायम लक्षात राहील ❤️",
      tag: "Unforgettable",
      type: "polaroid"
    },
    {
      id: 5,
      src: "/assets/photo-placeholder-5.svg",
      caption: "Always keep smiling 😊",
      tag: "Sister Love",
      type: "wide"
    },
    {
      id: 6,
      src: "/assets/photo-placeholder-6.svg",
      caption: "जगातील सर्वात खास ताई 💫",
      tag: "Best Sister",
      type: "polaroid"
    }
  ],

  // --- CHAPTER 3: MEMORY TIMELINE ---
  timelineTitle: "ताईसोबतच्या काही खास आठवणी 🌙",
  timelineSubtitle: "काही क्षण छोटे असतात, पण त्यांच्या आठवणी खूप मोठ्या असतात.",
  timelineEvents: [
    {
      year: "लहानपणीच्या आठवणी 🧸",
      title: "आपली ती लहानपणची भांडणं आणि प्रेम",
      desc: "कितीही भांडलो तरी ५ मिनिटांत एकत्र येणं. एकत्र खाल्लेली ती चॉकलेट्स आणि एकत्र केलेले ते खोडकर उद्योग!",
      photoSrc: "/assets/timeline-placeholder-1.svg"
    },
    {
      year: "शाळा आणि अभ्यासाचे दिवस 📚",
      title: "माझं मार्गदर्शन करणारी माझी ताई",
      desc: "जेव्हा जेव्हा मला अभ्यासात किंवा आयुष्यात मदत हवी असायची, तेव्हा नेहमी तू पुढे होतीस. मला योग्य वाट दाखवलीस.",
      photoSrc: "/assets/timeline-placeholder-2.svg"
    },
    {
      year: "प्रत्येक सण आणि उत्सव 🎆",
      title: "खास आनंद आणि सुंदर क्षण",
      desc: "भाऊबीज असो की दिवाळी, तुझ्यामुळे प्रत्येक सणाचा आनंद दुप्पट होतो. तुझे ते गोड आशीर्वाद आणि प्रेम नेहमीच खास असतं.",
      photoSrc: "/assets/timeline-placeholder-3.svg"
    },
    {
      year: "आजचा हा दिवस 🎂",
      title: "नेहमी अशीच हसत आणि चमकत राहा!",
      desc: "आज तुझा वाढदिवस आहे आणि मला तुला सांगायचं आहे की, मी तुझ्यावर खूप प्रेम करतो आणि तुझ्या प्रत्येक स्वप्नासाठी तुझ्या पाठीशी उभा आहे.",
      photoSrc: "/assets/timeline-placeholder-4.svg"
    }
  ],

  // --- CHAPTER 4: WHY YOU ARE SPECIAL ---
  specialCardsTitle: "तू माझ्यासाठी इतकी खास का आहेस? ❤️",
  specialCards: [
    {
      id: "smile",
      icon: "😊",
      title: "तुझं हसू",
      short: "तुझ्या एका हसण्याने घरातला सगळा ताण दूर होतो.",
      full: "तुझं हसू इतकं सकारात्मक आहे की जेव्हा तू हसतेस, तेव्हा संपूर्ण घर आनंदाने भरून जातं. हे सुंदर हसू कायम जपून ठेव!"
    },
    {
      id: "care",
      icon: "❤️",
      title: "तुझी काळजी",
      short: "आईसारखी माझी काळजी घेणारी माझी मोठी बहीण.",
      full: "मी काही न सांगताही तुला लगेच कळतं की मला काय त्रास होतोय. माझी आईसारखी काळजी घेणारी तूच आहेस."
    },
    {
      id: "nature",
      icon: "🌸",
      title: "तुझा स्वभाव",
      short: "सगळ्यांना समजून घेणारा आणि प्रेमळ स्वभाव.",
      full: "तुझा शांत, समंजस आणि दयाळू स्वभाव सगळ्यांचं मन जिंकतो. सर्वांना जोडून ठेवण्याची कला तुझ्याकडेच आहे."
    },
    {
      id: "guidance",
      icon: "✨",
      title: "तुझं मार्गदर्शन",
      short: "कठीण काळात योग्य दिशा दाखवणारा माझा होकायंत्र.",
      full: "जेव्हा मी गोंधळात असतो किंवा कोणती चूक करतो, तेव्हा तू मला ओरडतेस पण योग्य मार्गही दाखवतेस. तुझं मार्गदर्शन माझ्यासाठी खूप मोलाचं आहे."
    },
    {
      id: "support",
      icon: "🤝",
      title: "तुझी साथ",
      short: "प्रत्येक संकटात माझ्या पाठीशी उभी राहणारी ढाल.",
      full: "परिस्थिती कशीही असो, मला ठाऊक आहे की माझी ताई नेहमी माझ्या पाठीशी खंबीरपणे उभी राहील."
    },
    {
      id: "just-you",
      icon: "💫",
      title: "फक्त तू आहेस म्हणून…",
      short: "कारण तुझ्यासारखी ताई जगात दुसरी कोणीच नाही!",
      full: "कारण तू माझ्या आयुष्यात आहेस म्हणूनच माझं आयुष्य इतकं सुंदर आणि पूर्ण वाटतं. Thank you for being the best sister ever!"
    }
  ],

  // --- CHAPTER 5: BIRTHDAY WISHES ---
  wishesTitle: "माझ्या तुझ्यासाठी काही इच्छा… 🌠",
  wishes: [
    "❤️ नेहमी आनंदी राहा",
    "✨ तुझी प्रत्येक इच्छा पूर्ण होऊ दे",
    "🌸 तुझ्या आयुष्यात नेहमी प्रेम आणि आनंद असू दे",
    "💫 तुझ्या प्रत्येक स्वप्नाला यश मिळू दे",
    "🌈 तुझ्या आयुष्यात सुंदर क्षणांची कधीच कमी पडू नये",
    "🥰 तुझं हसू कायम असंच राहू दे"
  ],

  // --- CHAPTER 6: SECRET SURPRISE ---
  secretTitle: "अजून एक छोटंसं surprise बाकी आहे… 🤫",
  secretHint: "Unlock touching brotherly message ❤️",
  secretContent: "ताई, कितीही भांडणं झाली, कितीही वेळा मी तुला त्रास दिला 😄, तरी तू माझ्यासाठी नेहमीच खास राहशील. माझ्या आयुष्यात तू आहेस हीच माझ्यासाठी खूप मोठी गोष्ट आहे. ❤️",

  // --- CHAPTER 7: FINAL CELEBRATION ---
  finalTitle: "Happy Birthday, Neha Didi ❤️",
  finalLines: [
    "नेहमी हसत राहा.",
    "नेहमी चमकत राहा.",
    "आणि अशीच माझी लाडकी ताई राहा. ❤️"
  ],
  finalSign: "तुझा भाऊ ❤️"
};
