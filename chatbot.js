const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotContainer = document.getElementById('chatbotContainer');
const closeBtn = document.getElementById('closeBtn');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const chatMessages = document.getElementById('chatMessages');

let liveMode = false; // when true, bot fetches live wiki info for unknown queries
let quizState = null; 

/* UI helpers */
function createTypingIndicator() {
  const el = document.createElement('div');
  el.className = 'message bot-message typing';
  el.innerHTML = `<div class="message-content"><p>Boraverse is typing <span class="dots">· · ·</span></p></div>`;
  return el;
}
function showTyping() {
  const tip = createTypingIndicator();
  chatMessages.appendChild(tip);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return tip;
}
function hideTyping(tipEl) {
  if (tipEl && tipEl.parentNode) tipEl.parentNode.removeChild(tipEl);
}

/* Core UI logic */
chatbotToggle.addEventListener('click', () => {
  const isActive = chatbotContainer.classList.toggle('active');
  chatbotContainer.setAttribute('aria-hidden', !isActive);
  if (isActive) userInput.focus();
});

closeBtn.addEventListener('click', () => {
  chatbotContainer.classList.remove('active');
  chatbotContainer.setAttribute('aria-hidden', 'true');
  chatbotToggle.focus();
});

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });

function sendMessage() {
  const raw = userInput.value.trim();
  if (!raw) return;
  addMessage(raw, 'user');
  userInput.value = '';
  const typing = showTyping();
  setTimeout(async () => {
    let resp = await getBotResponse(raw);
    hideTyping(typing);
    addMessage(resp.text, 'bot', resp.provideLinks ? resp.links || [] : []);
  }, 350 + Math.min(1200, raw.length * 25)); // mimic thinking time
}

function addMessage(text, sender, links = []) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', `${sender}-message`);
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('message-content');
  const p = document.createElement('p');
  p.textContent = text;
  contentDiv.appendChild(p);

  if (Array.isArray(links) && links.length) {
    links.forEach(l => {
      const linkBtn = document.createElement('a');
      linkBtn.href = l.url;
      linkBtn.target = '_blank';
      linkBtn.rel = 'noopener noreferrer';
      linkBtn.classList.add('link-btn');
      linkBtn.innerHTML = `🔗 ${l.text}`;
      contentDiv.appendChild(linkBtn);
    });
  }

  messageDiv.appendChild(contentDiv);
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
// knowlwdge base
const KnownGroups = {
  'bts': {
    name: 'BTS',
    debut: '2013-06-13',
    agency: 'BigHit / HYBE',
    fandom: 'ARMY',
    leader: 'RM',
    members: ['RM','Jin','Suga','J-Hope','Jimin','V','Jungkook'],
    notableSongs: ['Dynamite','Butter','Permission to Dance','Spring Day','Blood Sweat & Tears'],
    notableAlbums: ['Dark & Wild','Wings','Love Yourself: Tear','Map of the Soul: 7','BE'],
    awardsSummary: 'Multiple domestic/international awards; Grammy nominations',
    charity: 'Many BTS members and HYBE have donated to education, disaster relief and UNICEF campaigns.'
  },
  'blackpink': {
    name: 'BLACKPINK',
    debut: '2016-08-08',
    agency: 'YG Entertainment',
    fandom: 'Blinks',
    leader: null,
    members: ['Jisoo','Jennie','Rosé','Lisa'],
    notableSongs: ['DDU-DU DDU-DU','How You Like That','Kill This Love','Pink Venom'],
    notableAlbums: ['The Album'],
    awardsSummary: 'Major global streaming & tours',
    charity: 'Members have supported charities and brand-driven philanthropic efforts.'
  },
   'twice': {
    name: 'TWICE',
    debut: '2015-10-20',
    agency: 'JYP Entertainment',
    fandom: 'Once',
    leader: 'Jihyo',
    members: ['Nayeon','Jeongyeon','Momo','Sana','Jihyo','Mina','Dahyun','Chaeyoung','Tzuyu'],
    notableSongs: ['Cheer Up','Fancy','What is Love?','I Can\'t Stop Me'],
    notableAlbums: ['Twicetagram','Fancy You','More & More'],
    awardsSummary: 'Strong Asian sales; multiple music show wins',
    charity: 'Members have participated in various charitable activities and campaigns.'
  },
  'stray kids': {
    name: 'Stray Kids',
    debut: '2018-03-25',
    agency: 'JYP Entertainment',
    fandom: 'STAY',
    leader: 'Bang Chan',
    members: ['Bang Chan','Lee Know','Changbin','Hyunjin','Han','Felix','Seungmin','I.N'],
    notableSongs: ['God\'s Menu','Back Door','MANIAC','Thunderous'],
    notableAlbums: ['GO生','NOEASY','MAXIDENT'],
    awardsSummary: 'Rapid international growth',
    charity: 'Group and members have engaged in various charitable activities.'
  },
  'newjeans': {
    name: 'NewJeans',
    debut: '2022-01-01',
    agency: 'ADOR (HYBE)',
    fandom: null,
    leader: null,
    members: ['Minji','Hanni','Danielle','Haerin','Hyein'],
    notableSongs: ['Attention','Hype Boy','Ditto'],
    notableAlbums: ['New Jeans (EP)'],
    awardsSummary: 'Viral hits and strong streaming',
    charity: 'Group/agency engaged in limited philanthropic activities publicly.'
  },
  
  'exo': {
    name: 'EXO',
    debut: '2012-04-08',
    agency: 'SM Entertainment',
    fandom: 'EXO-L',
    leader: 'Suho',
    members: ['Xiumin','Suho','Lay','Baekhyun','Chen','Chanyeol','D.O.','Kai','Sehun'],
    notableSongs: ['Growl','Call Me Baby','Love Shot','Obsession'],
    notableAlbums: ['XOXO','Exodus','The War','Don\'t Mess Up My Tempo'],
    awardsSummary: 'Numerous awards; major influence in K‑POP',
    charity: 'Members have participated in various charitable activities and campaigns.'
  },
  'seventeen': {
    name: 'SEVENTEEN',
    debut: '2015-05-26',
    agency: 'Pledis Entertainment (HYBE)',
    fandom: 'Carat',
    leader: 'S.Coups',  
    members: ['S.Coups','Jeonghan','Joshua','Jun','Hoshi','Wonwoo','Woozi','DK','Mingyu','The8','Seungkwan','Vernon','Dino'],
    notableSongs: ['Very Nice','Don\'t Wanna Cry','Home;Run','Left & Right'],
    notableAlbums: ['Love & Letter','Teen, Age','An Ode','Your Choice'],
    awardsSummary: 'Strong domestic/international presence',
    charity: 'Group and members have engaged in various charitable activities.'
   
  }

};

/* --- Utilities & intent detection --- */
function wantsLinks(message) {
  return /source|sources|link|links|website|where to find|where can i find|reference|references/i.test(message);
}

function detectIntent(message) {
  const m = message.toLowerCase();
  if (/members?|who (are|is)|lineup|member list/i.test(m)) return 'members';
  if (/debut|debuted|when did/i.test(m)) return 'debut';
  if (/agency|company|under/i.test(m)) return 'agency';
  if (/fandom|fans|fan base|fanbase/i.test(m)) return 'fandom';
  if (/leader|captain/i.test(m)) return 'leader';
  if (/song|songs|single|hit|track|discography|best songs|top songs/i.test(m)) return 'songs';
  if (/album|albums|ep|discography/i.test(m)) return 'albums';
  if (/award|awards|grammy|win|won/i.test(m)) return 'awards';
  if (/bio|about|who is|tell me about|info on|journey|history|story|donat|charit|philanthrop/i.test(m)) return 'profile';
  if (/news|latest|recent|tour|dates|concert/i.test(m)) return 'live';
  if (/what donation|what charity|charitable activities|philanthropic activities/i.test(m)) return 'charity';
  if (/quiz/i.test(m)) return 'quiz';
  if (/joke|meme|funny/i.test(m)) return 'joke';
  if (/recommend|suggest|song suggestion|suggest a song/i.test(m)) return 'recommend';
  if (/cheezy kpop line|pickup line|pick up line|flirt|flirty/i.test(m)) return 'cheezy line';
  
  return null;
}
function isoToDate(iso) { try { return new Date(iso).toLocaleDateString(); } catch (e) { return iso; } }
function buildGroupAnswer(group, intent) {
  if (intent === 'members') return `${group.name} members: ${group.members.join(', ')}`;
  if (intent === 'debut') return `${group.name} debuted: ${isoToDate(group.debut)}`;
  if (intent === 'agency') return `${group.name} agency: ${group.agency}`;
  if (intent === 'fandom') return `${group.name} fandom: ${group.fandom || 'N/A'}`;
  if (intent === 'leader') return `${group.name} leader: ${group.leader || 'N/A'}`;
  if (intent === 'songs') return `${group.name} notable songs: ${group.notableSongs.slice(0,6).join(', ')}`;
  if (intent === 'albums') return `${group.name} notable albums: ${group.notableAlbums.slice(0,6).join(', ')}`;
  if (intent === 'awards') return `${group.name} awards: ${group.awardsSummary || 'N/A'}`;
  if (intent === 'profile') {
    const basic = `${group.name} • debut:${isoToDate(group.debut)} • agency:${group.agency} • members:${group.members.join(', ')}`;
    const extras = [];
    if (group.notableSongs) extras.push(`songs:${group.notableSongs.slice(0,4).join(', ')}`);
    if (group.awardsSummary) extras.push(`awards:${group.awardsSummary}`);
    if (group.charity) extras.push(`charity:${group.charity}`);
    return [basic].concat(extras).join(' • ');
  }
  return `${group.name} • info unavailable`;
}

/* --- Fun features data --- */
const jokes = [
  "Why did the K‑POP star bring a ladder? To reach the high notes. 😎",
  "Fans: 'We stan.' — Group: 'We market.' 😂",
  "What do you call a quiet K‑POP concert? A hush-hour tour. 🎤",
  "Why did the idol go to art school? To learn how to draw more fans! 🎨",
  "Why don't K‑POP idols ever get lost? Because they always follow the beat! 🥁",
  "Why did Jungkook bring a ladder to the concert? Because he wanted to reach new high notes! 🎤",
  "Why did Lisa get kicked out of the kitchen? Because every time she said 'cookin' like a chef,' she burned something! 🍳🔥",
  "What did RM say to the math problem? 'You can't subtract my swag!' 😎",
  "Why was the K-pop idol always calm? Because they had a lot of com-POSE-ure. 🎶",
  "How do you know a fan's been to too many concerts? Their wallet says 'I'm not okay,' but their heart says 'Encore!' 💸💔",
  "Why did Suga refuse to go camping? He said, 'I already sleep under the ARMY stars.' 🌌",
   "Why did Jennie stop dating? Too many people just wanted to 'See U Later.' 💅",
  "What's Stray Kids' favorite breakfast? 'MANI' pancakes! 🥞",
  "Why did Taehyung open a bakery? Because he loves to make people bread-tiful. 🍞💜",
  "Why don't K-pop idols play hide and seek? Because the fans always find them online first. 👀💻",
  "How does J-Hope greet people? With sunshine and an 8-count dance intro. ☀️🕺",
  "What did BLACKPINK say to their alarm clock? 'How you like that?!' Snooze! ⏰😴",
  "Why did Jisoo bring an umbrella to the stage? Because it was raining fandom tears. ☔😭",
  "What's TWICE's favorite game? 'Truth or Cheer Up.' 🥳",
  "Why did NewJeans cross the road? To Hype Boy on the other side! 🐰",
  "How did Seventeen end up with 13 members? Because 17 minus the number of sleep hours equals 13! 😴",
  "Why did the mic blush at the concert? It got serenaded too close. 🎤❤️",
  "Why did the K-pop idol bring a map? To find their way to the top of the charts! 🗺️📈",
  "What's a K-pop idol's favorite type of math? Count-downs and fan-counts. 📅💖",
  "Why did the fan bring sunglasses to the show? The visuals were blinding. 😎✨",
  "What happens when a K-pop idol forgets lyrics on stage? They just freestyle with aegyo and everyone screams louder! 🐰💫",
];
const recommendations = [
  "Dynamite — BTS (feel-good disco-pop)",
  "How You Like That — BLACKPINK (power anthem)",
  "Hype Boy — NewJeans (mellow & viral)",
  "God's Menu — Stray Kids (intense performance)",
  "Cheer Up — TWICE (catchy & upbeat)",
  "Love Shot — EXO (smooth & sultry)",
  "Very Nice — SEVENTEEN (energetic & fun)"];

function getRandomRecommendation() {
  const recs = [
    "Dynamite — BTS (feel-good disco-pop)",
    "How You Like That — BLACKPINK (power anthem)",
    "Hype Boy — NewJeans (mellow & viral)",
    "God's Menu — Stray Kids (intense performance)",
    "Cheer Up — TWICE (catchy & upbeat)",
    "Love Shot — EXO (smooth & sultry)",
    "Very Nice — SEVENTEEN (energetic & fun)"
  ];
  return recs[Math.floor(Math.random() * recs.length)];
}

/* --- Wikipedia live lookup --- */
async function fetchWikiSummary(title) {
  const q = encodeURIComponent(title.replace(/\s+/g, '_'));
 const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${q}`;

  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    return {
      title: data.title || title,
      extract: data.extract || 'No summary available.',
      updated: data.touched || null
    };
  } catch (e) {
    return null;
  }
}

/* --- Quiz engine (simple) --- */
const quizQuestions = [
  { q: "Which group debuted in 2013 and has a fandom called ARMY?", a: "bts" },
  { q: "Which girl group is under YG and has members Jennie and Lisa?", a: "blackpink" },
  { q: "Which JYP girl group has 9 members and a fandom called Once?", a: "twice" },
  { q: "Which boy group debuted in 2018 and is known for self-producing their music?", a: "stray kids" },
  { q: "Which newest girl group debuted in 2022 under HYBE?", a: "newjeans" },
  { q: "Which group has a member named Suho and a fandom called EXO-L?", a: "exo" },
  { q: "Which group has 13 members and a fandom called Carat?", a: "seventeen" }
];

function startQuiz() {
  quizState = { qIndex: 0, score: 0 };
  return `Quiz started! Question 1: ${quizQuestions[0].q} (Answer with the group name)`;
}
function handleQuizAnswer(text) {
  const s = text.toLowerCase().trim();
  const current = quizQuestions[quizState.qIndex];
  const correct = current.a.toLowerCase();
  let out;
  if (s.includes(correct)) { quizState.score++; out = `Correct.`; } else out = `Wrong. Answer: ${current.a.toUpperCase()}.`;
  quizState.qIndex++;
  if (quizState.qIndex >= quizQuestions.length) {
    out += ` Quiz finished. Score: ${quizState.score}/${quizQuestions.length}.`;
    quizState = null;
  } else {
    out += ` Next: ${quizQuestions[quizState.qIndex].q}`;
  }
  return out;
}

/* --- Main response generator (async) --- */
async function getBotResponse(rawMessage) {
  const msg = rawMessage.trim();
  const m = msg.toLowerCase();

  if (/^enable live$/i.test(m)) { liveMode = true; return { text: 'Live mode ON — I will fetch live summaries when needed. ⚡', provideLinks: false }; }
  if (/^disable live$/i.test(m)) { liveMode = false; return { text: 'Live mode OFF — answers from local knowledge only. 🤖', provideLinks: false }; }

  const intent = detectIntent(m);

  if (intent === 'quiz' || /^quiz$/i.test(m)) {
    if (!quizState) return { text: startQuiz(), provideLinks: false };
    return { text: handleQuizAnswer(msg), provideLinks: false };
  }
  if (quizState) {
    return { text: handleQuizAnswer(msg), provideLinks: false };
  }

  if (intent === 'joke' || /joke|meme|funny/i.test(m)) {
    const j = jokes[Math.floor(Math.random() * jokes.length)];
    return { text: j, provideLinks: false };
  }
  if (intent === 'recommend' || /recommend|song suggestion|suggest a song/i.test(m)) {
    const r = recommendations[Math.floor(Math.random() * recommendations.length)];
    return { text: `Try: ${r}`, provideLinks: false };
  }
  if (intent === 'cheezy line' || /cheezy kpop line|pickup line|pick up line|flirt|flirty/i.test(m)) {
    return { text: getCheezyKpopLine(),
       provideLinks: false };
  }
 
  //  Handle farewell / gratitude messages
const farewell = getFarewellResponse(m);
if (farewell) {
  return { text: farewell, provideLinks: false };
}

//  Handle compliments, love, and appreciation
const compliment = getComplimentResponse(m);
if (compliment) {
  return { text: compliment, provideLinks: false };
}

  for (const key in KnownGroups) {
    if (m.includes(key) || m.includes(KnownGroups[key].name.toLowerCase())) {
      const group = KnownGroups[key];
      if (/journey|history|story|biograph|biography|career/i.test(m)) {
        if (liveMode || /live|latest|recent|news/i.test(m)) {
          const wiki = await fetchWikiSummary(group.name);
          if (wiki) return { text: `${wiki.title}: ${wiki.extract}`, provideLinks: false };
        }
        return { text: `${group.name} began their career after debuting on ${isoToDate(group.debut)} and rose to global recognition through hit releases and major tours.`, provideLinks: false };
      }

      const specific = detectIntent(m) || 'profile';
      return { text: buildGroupAnswer(group, specific), provideLinks: false };
    }
  }

  const liveMatch = m.match(/(?:live|latest|news)\s+(.+)/i) || m.match(/^live\s+(.+)/i);
  if (liveMatch) {
    const topic = liveMatch[1].trim();
    const wiki = await fetchWikiSummary(topic);
    if (wiki) return { text: `${wiki.title}: ${wiki.extract}`, provideLinks: false };
    return { text: `No live summary found for "${topic}". Try a different keyword.`, provideLinks: false };
  }

  const who = m.match(/(?:who is|who's|tell me about|info on|details on)\s+(.+)/i);
  if (who) {
    const target = who[1].trim();
    for (const k in KnownGroups) { if (target.toLowerCase().includes(k) || target.toLowerCase().includes(KnownGroups[k].name.toLowerCase())) { return { text: buildGroupAnswer(KnownGroups[k], 'profile'), provideLinks: false }; } }
    if (liveMode) {
      const wiki = await fetchWikiSummary(target);
      if (wiki) return { text: `${wiki.title}: ${wiki.extract}`, provideLinks: false };
    }
    return { text: `${target} — I don't have local data. Say "enable live" to let me fetch a live summary, or ask for searches.`, provideLinks: false };
  }

  if (/^\s*(hi|hello|hey|annyeong|sup)\b/i.test(m)) return { text: 'Hi — ask me about any K‑POP group or type "quiz", "joke", "recommend".', provideLinks: false };
  if (/help|what can you do|commands/i.test(m)) return { text: 'Commands: quiz, joke, recommend, enable live, disable live, live <topic>, who is <x>', provideLinks: false };

  if (liveMode && m.length > 2) {
    const wiki = await fetchWikiSummary(msg);
    if (wiki) return { text: `${wiki.title}: ${wiki.extract}`, provideLinks: false };
  }
  

  // final concise fallback
  return { text: 'I can answer concisely. Try "Who are BTS members", "When did BLACKPINK debut", "quiz","meme" joke, cheezy kpop line  or "recommendation".', provideLinks: false };
};
function getCheezyKpopLine() {
  const pickupLines =  ["Are you a K-pop comeback?Because my heart’s been waiting for you. 💿💖",
"Are you “Butter”?‘Cause you’re smooth like it, and you just melted my heart. 🧈",
"You must be from YG —because you’re making my heart go BOOMBAYAH! 💣",
"Are you a bias wrecker?Because you just ruined my list. 😳",
"Are we at a BTS concert?Because my heart’s going DDAENG! 💥",
"You’re like a K-drama plot twist —I never saw you coming, but now I’m obsessed. 🎬❤️",
"Call me a trainee,because I’m working hard to debut in your heart. 💪💘",
"Are you a lightstick?Because you light up my whole world. ✨",
"If loving you was a fan chant,I’d never miss a beat. 🗣💓",
"You’re like a comeback teaser —10 seconds and I’m already hooked. 👁️‍🗨️🔥",
"Are you a vocal line?Because your voice hits all the right notes in my heart. 🎤💞",
"You must be from HYBE,because you just built a whole universe in my heart. 🌌",
"Are you a K-pop stage?Because I can’t take my eyes off you. 🎶👀"
,"Girl, are you “Love Shot”?Because you just took aim at my heart. 💘🔫",
"You’re like an idol in a fan meet —limited edition, once in a lifetime. 💎",
"Are you in a music video?Because every time I see you, everything goes slow-mo. 🎥💫"
,"Are you the center of the group?Because everything revolves around you. 🌟",
"You must be a bias —because I can’t focus on anyone else. 💜",
"Are you “Cupid” by FIFTY FIFTY?Because you got me falling in love unintentionally. 💘🎶",
"You’re not just a visual,you’re the whole concept. 🔥",
"If we were a K-pop group,our unit name would be “Chemistry.” ⚡💞",
"Are you a fan chant?Because you keep repeating in my head. 🎶🧠",
"If hearts were photocards,I’d trade the world for yours. 💌",
"Are you a K-pop beat drop?Because every time you smile, my heart skips. 💓🎧",
"You’re like an encore stage - unexpected but absolutely the best part. 🎤🌈",
];
return pickupLines[Math.floor(Math.random() * pickupLines.length)];
}
/* --- Thank You / Farewell Responses --- */
function getFarewellResponse(message) {
  const m = message.toLowerCase();

  // 1️⃣ Patterns to detect thank-you or goodbye
  if (/\b(thank(s| you)?|appreciate|grateful|gracias|love you|luv you|u rock|amazing|awesome|great|thanks)\b/i.test(m)) {
    const gratitudeReplies = [
      "Aww 💜 thank YOU! Boraverse loves you too!",
      "You’re the sweetest! 💫 Keep shining like your bias ✨",
      "Thank you for chatting! Stay tuned for the next comeback! 💜",
      "Boraverse feels your love! Sending purple hearts 💜💜💜",
      "Glad I could help — you’re officially part of the Purple Kingdom now 👑",
      "Boraverse bows with gratitude 🙇‍♀ Thank you for your time!",
      "Aww thanks! You made my digital heart smile 😊💜"
    ];
    return gratitudeReplies[Math.floor(Math.random() * gratitudeReplies.length)];
  }

  //  Patterns for goodbye / exit / end of chat
  if (/\b(bye|goodbye|see you|later|gtg|good night|goodnight|farewell|sign off|exit|take care|thanx|toodles)\b/i.test(m)) {
    const byeReplies = [
      "Bye bye~ 👋 Until our next fan chat 💜",
      "See you soon in the next comeback era! 🌟",
      "Take care! Keep streaming and stay purple 💜",
      "Good night~ may your dreams be full of K-pop stages ✨",
      "Leaving already? Boraverse will be waiting 💫",
      "See ya~ and remember: stay loyal to your bias 😎",
      "Farewell, star! Until the next Boraverse adventure 🚀💜"
    ];
    return byeReplies[Math.floor(Math.random() * byeReplies.length)];
  }

  // If none matched, return null
  return null;
}
/* --- Compliment / Appreciation / Love Responses --- */
function getComplimentResponse(message) {
  const m = message.toLowerCase();

  // Patterns for love, affection, appreciation, praise, etc.
  if (/\b(love you|luv u|luv ya|i like you|you are (amazing|awesome|great|the best|cute|sweet|cool|perfect|so good)|good work|nice job|well done|great work|you did well|im proud|i'm proud)\b/i.test(m)) {
    const complimentReplies = [
      "Aww 💜 that means a lot! Boraverse is blushing right now 💫",
      "You’re the real star here 🌟 — thanks for the love!",
      "Love you toooo 💜 stay sparkly and proud like your bias ✨",
      "That made my digital heart skip a beat 😳💜",
      "You’re the reason Boraverse shines this bright 💫 thank you!",
      "Aww stop it~ you’re making me emotional 🥹💜",
      "Good vibes detected 💜 Sending 7 purple hearts your way 💜💜💜💜💜💜💜",
      "That energy!! I feel it from galaxies away 🌌 stay awesome 💜",
      "You’re so sweet I might need a fan chant for you 😍",
      "Love recognized 💜 Boraverse uplinks happiness to the Purple Kingdom 💫"
    ];
    return complimentReplies[Math.floor(Math.random() * complimentReplies.length)];
  }

  return null; // If no pattern matched
}
