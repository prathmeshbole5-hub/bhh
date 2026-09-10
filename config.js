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
    "वाढदिवसाच्या खूप खूप शुभेच्छा माझ्या लाडक्या ताई! ❤️ तू माझ्यासाठी फक्त मोठी बहीण नाहीस, तर माझी दुसरी आई, माझी मैत्रीण आणि प्रत्येक वेळी मला योग्य मार्ग दाखवणारी व्यक्ती आहेस.",
    "तुझं प्रेम, तुझी काळजी आणि तुझा आधार माझ्यासाठी खूप खास आहे.",
    "आज तुला गिफ्ट द्यावंसं खूप वाटतंय, पण सध्या माझ्याकडून ते शक्य नाहीये 😅 पण एक गोष्ट नक्की—आणखी दोन वर्षांनी मी कमवायला सुरुवात केल्यावर तुला गिफ्ट देण्याची सुरुवात मी नक्की करणार! ❤️ मग तुझ्यासाठी आवडीने आणि मनापासून गिफ्ट्स घेणार आहे.",
    "तोपर्यंत तू स्वतःची खूप काळजी घे, नेहमी आनंदी राहा, स्वतःच्या आरोग्याची काळजी घे आणि कायम निरोगी राहा.",
    "तुझ्या आयुष्यात नेहमी सुख, आनंद, प्रेम आणि यश भरभरून असावं आणि तुझ्या चेहऱ्यावरचं हसू असंच कायम राहावं. ❤️",
    "माझ्यासाठी तू खूप खास आहेस आणि तुझी जागा कोणीच घेऊ शकत नाही. ताई, I love you so much! ❤️🥹 कायम अशीच माझ्या सोबत राहा. पुन्हा एकदा वाढदिवसाच्या खूप साऱ्या शुभेच्छा! 🎂❤️"
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
