// translation.js

// 1. All translations
const translations = {
  en: {
    // Shared
    headerLearning: "Learning",
    headerQuiz: "Quiz",
    headerTrading: "Trading Simulation",
    headerProgress: "Progress Tracking",
    settingsSwitchLanguage: "🌐 Switch Language",
    settingsToggleTheme: "🌓 Toggle Theme",
    settingsResetProgress: "🔄 Reset Progress",

    // Index page
    mainTitle: "Empowering India's Investors - One Lesson at a Time",
    mainDesc: "At MindStocks, built for the SEBI Hackathon, we make stock market learning simple, multilingual, and safe for beginners. Along with teaching investing basics, we help you spot scams, avoid fraud, and follow SEBI’s trusted guidelines Empowering India - One lesson at a time.",
    mainGetStarted: "Get Started",
    mainHowToUse: "How to Use",
    featureLearning: "📚 Learning",
    featureLearningDesc: "Step-by-step guides and interactive lessons to understand finance concepts.",
    featureQuiz: "📝 Quiz",
    featureQuizDesc: "Test your knowledge with quizzes designed for all levels.",
    featureTrading: "📈 Trading Simulation",
    featureTradingDesc: "Practice trading in a safe environment without risking real money.",
    featureProgress: "📊 Progress Tracking",
    featureProgressDesc: "Monitor your learning journey and improve over time.",
    footerText: "© 2025 MindStocks | Built for SEBI Hackathon",

    // Learning page
    learningTitle: "Start Your Stock Marketing Journey",
    learningDesc: "Have you ever wondered how everyday people turn savings into wealth—or how investors stay safe from scams? Explore the stock market from scratch. Step by step, you’ll unravel how trading works and how SEBI protects investors like you, making complex concepts simple and practical. Let’s turn curiosity into confident investing, one lesson at a time.",
    learningStartBtn: "Start Learning",
    sub1Title: "📈 Introduction to Stock Market",
    sub1Desc: "Understand the heartbeat of the financial world and how companies raise money through stocks.",
    sub2Title: "🛡️ Role of SEBI",
    sub2Desc: "Meet the market’s watchdog that ensures fair play and protects investors in India.",
    sub3Title: "💱 How Trading Works",
    sub3Desc: "Learn the process of buying and selling shares, from placing an order to making a profit.",
    sub4Title: "💰 Safe Investing Practices",
    sub4Desc: "Discover smart habits and strategies to grow your money without unnecessary risks.",
    sub5Title: "🚨 Common Scams & How to Avoid Them",
    sub5Desc: "Stay alert and safeguard your investments from frauds and market traps.",
    sub6Title: "📊 Basics of Mutual Funds",
    sub6Desc: "Explore how mutual funds work and why they can be a beginner’s best friend.",
    sub7Title: "📚 Basic Financial Terms",
    sub7Desc: "Build your financial vocabulary and decode the jargon of the investing world.",
    sub8Title: "⚖️ Investors’ Rights & Responsibilities",
    sub8Desc: "Know your rights as an investor and the duties that come with smart investing.",

    // QuizHub page
    quizHubTitle: "Test Your Knowledge",
    quizHubDesc: "Strengthen your understanding with quizzes on each topic. Complete them all to unlock the Final Challenge.",
    quiz1Title: "📈 Introduction to Stock Market",
    quiz1Desc: "Test your basics on what stocks are and why companies issue them.",
    quiz2Title: "🛡️ Role of SEBI",
    quiz2Desc: "Check how well you know SEBI’s duties in keeping markets safe.",
    quiz3Title: "💱 How Trading Works",
    quiz3Desc: "Quiz yourself on buying, selling, and how trades actually happen.",
    quiz4Title: "💰 Safe Investing Practices",
    quiz4Desc: "Check how well you know safe strategies for risk-free investing.",
    quiz5Title: "🚨 Common Scams & How to Avoid Them",
    quiz5Desc: "Spot frauds, scams, and learn the red flags to avoid.",
    quiz6Title: "📊 Basics of Mutual Funds",
    quiz6Desc: "See if you understand how mutual funds work for beginners.",
    quiz7Title: "📚 Basic Financial Terms",
    quiz7Desc: "Challenge your knowledge of key investing words and jargon.",
    quiz8Title: "⚖️ Investors’ Rights & Responsibilities",
    quiz8Desc: "Check what rights investors have and the responsibilities they carry.",
    quizFinalTitle: "🏆 Final Quiz",
    quizFinalDesc: "Unlock after completing all topic quizzes.",
    quizStartBtn: "Start Quiz",
    quizLockedBtn: "Locked",
  },

  hi: {
    // Shared
    headerLearning: "सीखना",
    headerQuiz: "क्विज़",
    headerTrading: "ट्रेडिंग सिमुलेशन",
    headerProgress: "प्रगति ट्रैकिंग",
    settingsSwitchLanguage: "🌐 भाषा बदलें",
    settingsToggleTheme: "🌓 थीम बदलें",
    settingsResetProgress: "🔄 प्रगति रीसेट करें",

    // Index page
    mainTitle: "भारत के निवेशकों को सशक्त बनाना - एक पाठ में",
    mainDesc: "MindStocks, SEBI हैकाथॉन के लिए बनाया गया, स्टॉक मार्केट सीखना सरल, बहुभाषी और शुरुआती लोगों के लिए सुरक्षित बनाता है। निवेश की मूल बातें सिखाने के साथ ही हम आपको स्कैम पहचानने, धोखाधड़ी से बचने और SEBI के विश्वसनीय दिशानिर्देशों का पालन करने में मदद करते हैं।",
    mainGetStarted: "शुरू करें",
    mainHowToUse: "कैसे उपयोग करें",
    featureLearning: "📚 सीखना",
    featureLearningDesc: "वित्तीय अवधारणाओं को समझने के लिए चरण-दर-चरण मार्गदर्शिकाएँ और इंटरैक्टिव पाठ।",
    featureQuiz: "📝 क्विज़",
    featureQuizDesc: "सभी स्तरों के लिए डिज़ाइन किए गए क्विज़ के साथ अपने ज्ञान का परीक्षण करें।",
    featureTrading: "📈 ट्रेडिंग सिमुलेशन",
    featureTradingDesc: "वास्तविक पैसे का जोखिम उठाए बिना सुरक्षित वातावरण में ट्रेडिंग का अभ्यास करें।",
    featureProgress: "📊 प्रगति ट्रैकिंग",
    featureProgressDesc: "अपनी सीखने की यात्रा की निगरानी करें और समय के साथ सुधार करें।",
    footerText: "© 2025 MindStocks | SEBI हैकाथॉन के लिए बनाया गया",

    // Learning page
    learningTitle: "अपनी स्टॉक मार्केट यात्रा शुरू करें",
    learningDesc: "क्या आपने कभी सोचा है कि आम लोग बचत को संपत्ति में कैसे बदलते हैं—या निवेशक घोटालों से कैसे सुरक्षित रहते हैं? शून्य से स्टॉक मार्केट की खोज करें। चरण दर चरण, आप समझेंगे कि ट्रेडिंग कैसे काम करती है और SEBI आपको कैसे सुरक्षित रखता है।",
    learningStartBtn: "सीखना शुरू करें",
    sub1Title: "📈 स्टॉक मार्केट का परिचय",
    sub1Desc: "वित्तीय दुनिया की धड़कन और कंपनियां शेयरों के माध्यम से पैसा कैसे जुटाती हैं, यह समझें।",
    sub2Title: "🛡️ सेबी की भूमिका",
    sub2Desc: "बाजार का प्रहरी, जो निष्पक्षता सुनिश्चित करता है और भारत में निवेशकों की रक्षा करता है।",
    sub3Title: "💱 ट्रेडिंग कैसे काम करती है",
    sub3Desc: "शेयर खरीदने-बेचने की प्रक्रिया जानें, ऑर्डर देने से लेकर लाभ कमाने तक।",
    sub4Title: "💰 सुरक्षित निवेश अभ्यास",
    sub4Desc: "अपने पैसे को बिना जोखिम के बढ़ाने के लिए स्मार्ट आदतें और रणनीतियाँ जानें।",
    sub5Title: "🚨 आम घोटाले और उनसे कैसे बचें",
    sub5Desc: "सतर्क रहें और अपने निवेश को धोखाधड़ी और जालसाजी से बचाएं।",
    sub6Title: "📊 म्यूचुअल फंड की बुनियादी बातें",
    sub6Desc: "जानें कि म्यूचुअल फंड कैसे काम करते हैं और क्यों यह शुरुआती लोगों के लिए सबसे अच्छा विकल्प हो सकता है।",
    sub7Title: "📚 बुनियादी वित्तीय शब्दावली",
    sub7Desc: "अपनी वित्तीय शब्दावली बनाएं और निवेश की दुनिया की शब्दजाल को समझें।",
    sub8Title: "⚖️ निवेशकों के अधिकार और जिम्मेदारियां",
    sub8Desc: "एक निवेशक के रूप में अपने अधिकारों और समझदारी से निवेश करने की जिम्मेदारियों को जानें।",

    // QuizHub page
    quizHubTitle: "अपना ज्ञान परखें",
    quizHubDesc: "प्रत्येक विषय पर क्विज़ के साथ अपनी समझ को मजबूत करें। सभी पूरे करें ताकि अंतिम चुनौती अनलॉक हो सके।",
    quiz1Title: "📈 स्टॉक मार्केट का परिचय",
    quiz1Desc: "मूल बातें परखें कि शेयर क्या होते हैं और कंपनियां उन्हें क्यों जारी करती हैं।",
    quiz2Title: "🛡️ सेबी की भूमिका",
    quiz2Desc: "जाँचें कि आप सेबी के कर्तव्यों को कितना जानते हैं।",
    quiz3Title: "💱 ट्रेडिंग कैसे काम करती है",
    quiz3Desc: "खुद को खरीदने-बेचने और लेन-देन की प्रक्रिया पर परखें।",
    quiz4Title: "💰 सुरक्षित निवेश अभ्यास",
    quiz4Desc: "देखें कि आप सुरक्षित रणनीतियों को कितना जानते हैं।",
    quiz5Title: "🚨 आम घोटाले और उनसे कैसे बचें",
    quiz5Desc: "धोखाधड़ी और घोटालों को पहचानें और लाल झंडों को सीखें।",
    quiz6Title: "📊 म्यूचुअल फंड की बुनियादी बातें",
    quiz6Desc: "देखें कि आप म्यूचुअल फंड को कितना समझते हैं।",
    quiz7Title: "📚 बुनियादी वित्तीय शब्दावली",
    quiz7Desc: "मुख्य निवेश शब्दों और शब्दजाल का ज्ञान परखें।",
    quiz8Title: "⚖️ निवेशकों के अधिकार और जिम्मेदारियां",
    quiz8Desc: "देखें कि निवेशकों के अधिकार और जिम्मेदारियां क्या हैं।",
    quizFinalTitle: "🏆 अंतिम क्विज़",
    quizFinalDesc: "सभी विषय क्विज़ पूरे करने के बाद अनलॉक करें।",
    quizStartBtn: "क्विज़ शुरू करें",
    quizLockedBtn: "लॉक्ड",
  }
};

let currentLang = localStorage.getItem("lang") || "en";

// Switch language
function switchLanguage() {
  currentLang = currentLang === "en" ? "hi" : "en";
  localStorage.setItem("lang", currentLang);
  applyTranslations(currentLang);
}

// Apply translations
function applyTranslations(lang) {
  const t = translations[lang];

  // Navbar
  if (document.getElementById("nav-learning")) document.getElementById("nav-learning").textContent = t.headerLearning;
  if (document.getElementById("nav-quiz")) document.getElementById("nav-quiz").textContent = t.headerQuiz;
  if (document.getElementById("nav-trading")) document.getElementById("nav-trading").textContent = t.headerTrading;
  if (document.getElementById("nav-progress")) document.getElementById("nav-progress").textContent = t.headerProgress;

  if (document.getElementById("switch-lang")) document.getElementById("switch-lang").textContent = t.settingsSwitchLanguage;
  if (document.getElementById("toggle-theme")) document.getElementById("toggle-theme").textContent = t.settingsToggleTheme;
  if (document.getElementById("reset-progress")) document.getElementById("reset-progress").textContent = t.settingsResetProgress;

  // Index page
  const mainH2 = document.querySelector(".main h2");
  if (mainH2) mainH2.textContent = t.mainTitle || t.learningTitle || t.quizHubTitle;

  const mainP = document.querySelector(".main p");
  if (mainP) mainP.textContent = t.mainDesc || t.learningDesc || t.quizHubDesc;

  const mainBtns = document.querySelectorAll(".main a");
  if (mainBtns[0]) mainBtns[0].textContent = t.mainGetStarted || t.learningStartBtn;
  if (mainBtns[1]) mainBtns[1].textContent = t.mainHowToUse || "";

  // Index features
  const features = document.querySelectorAll(".feature-card");
  if (features.length === 4) {
    features[0].querySelector("h3").textContent = t.featureLearning;
    features[0].querySelector("p").textContent = t.featureLearningDesc;
    features[1].querySelector("h3").textContent = t.featureQuiz;
    features[1].querySelector("p").textContent = t.featureQuizDesc;
    features[2].querySelector("h3").textContent = t.featureTrading;
    features[2].querySelector("p").textContent = t.featureTradingDesc;
    features[3].querySelector("h3").textContent = t.featureProgress;
    features[3].querySelector("p").textContent = t.featureProgressDesc;
  }

  // Learning subtopics
  const subtopics = document.querySelectorAll(".subtopic-card");
  if (subtopics.length === 8) {
    subtopics[0].querySelector("h3").textContent = t.sub1Title;
    subtopics[0].querySelector("p").textContent = t.sub1Desc;
    subtopics[1].querySelector("h3").textContent = t.sub2Title;
    subtopics[1].querySelector("p").textContent = t.sub2Desc;
    subtopics[2].querySelector("h3").textContent = t.sub3Title;
    subtopics[2].querySelector("p").textContent = t.sub3Desc;
    subtopics[3].querySelector("h3").textContent = t.sub4Title;
    subtopics[3].querySelector("p").textContent = t.sub4Desc;
    subtopics[4].querySelector("h3").textContent = t.sub5Title;
    subtopics[4].querySelector("p").textContent = t.sub5Desc;
    subtopics[5].querySelector("h3").textContent = t.sub6Title;
    subtopics[5].querySelector("p").textContent = t.sub6Desc;
    subtopics[6].querySelector("h3").textContent = t.sub7Title;
    subtopics[6].querySelector("p").textContent = t.sub7Desc;
    subtopics[7].querySelector("h3").textContent = t.sub8Title;
    subtopics[7].querySelector("p").textContent = t.sub8Desc;
  }

  // QuizHub page
  const quizCards = document.querySelectorAll(".quiz-card");
  if (quizCards.length) {
    const map = [
      ["quiz1Title", "quiz1Desc", "quizStartBtn"],
      ["quiz2Title", "quiz2Desc", "quizStartBtn"],
      ["quiz3Title", "quiz3Desc", "quizStartBtn"],
      ["quiz4Title", "quiz4Desc", "quizStartBtn"],
      ["quiz5Title", "quiz5Desc", "quizStartBtn"],
      ["quiz6Title", "quiz6Desc", "quizStartBtn"],
      ["quiz7Title", "quiz7Desc", "quizStartBtn"],
      ["quiz8Title", "quiz8Desc", "quizStartBtn"],
      ["quizFinalTitle", "quizFinalDesc", "quizLockedBtn"],
    ];

    quizCards.forEach((card, i) => {
      const [hKey, dKey, btnKey] = map[i] || [];
      if (!hKey) return;

      const h3 = card.querySelector("h3");
      const desc = card.querySelector("p");
      const btn = card.querySelector("a");

      if (h3 && t[hKey]) h3.textContent = t[hKey];
      if (desc && t[dKey]) desc.textContent = t[dKey];
      if (btn && t[btnKey]) btn.textContent = t[btnKey];
    });
  }

  // Footer
  const footer = document.querySelector("footer");
  if (footer)
    footer.innerHTML =
      t.footerText +
      ' | <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sebi@sebi.gov.in" target="_blank" style="color:#93c5fd;">Contact Us</a>';
}

// On page load
window.onload = () => {
  const lang = localStorage.getItem("lang") || "en";
  applyTranslations(lang);
};
