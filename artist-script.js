/* ---------- Data for groups & members  ---------- */
const groups = {
  BTS: {
    name: "BTS",
    banner: "bts.jpeg",
    intro: "7-member global sensation redefining K-POP.Dominating global stages with unmatched talent, they stand as the true pioneers of modern K-POP.",
    members: [
      {name:"RM", role:"Leader / Rapper", fact:"Speaks english well; loves books", img:"RM.jpeg"},
      {name:"Jin", role:"Vocalist", fact:"Great cook", img:"jin.jpeg"},
      {name:"Suga", role:"Rapper", fact:"Producer alias Agust D", img:"yoongi.jpeg"},
      {name:"J-Hope", role:"Dancer / Rapper", fact:"Amazing dancer", img:"jhope.jpeg"},
      {name:"Jimin", role:"Vocalist", fact:"Known for stage charisma", img:"jimin.jpeg"},
      {name:"V", role:"Vocalist", fact:"Deep voice & actor", img:"V.jpeg"},
      {name:"Jungkook", role:"Main Vocalist", fact:"Golden maknae", img:"jk.jpeg"}
    ],
    songs:[
      {title:"Dynamite", img:"dynamite.jpeg", audio:"DYNAMITE.mp3"},
      {title:"Butter", img:"butter.jpeg", audio:"BUTTER.mp3"}
    ],
    mv: "https://www.youtube.com/embed/gQlMMD8auMs"
  },

  BLACKPINK: {
    name:"BLACKPINK",
    banner:"blackpink.jpeg",
    intro:"BLACKPINK — the unrivaled queens of K-POP, blending fierce charisma with flawless elegance to dominate the global stage..",
    members:[
      {name:"Jisoo", role:"Vocalist", fact:"Visual & actress", img:"jisoo.jpeg"},
      {name:"Jennie", role:"Main Rapper", fact:"Solo 'SOLO'", img:"jennie.jpeg"},
      {name:"Rosé", role:"Main Vocalist", fact:"Unique tone", img:"Rose.jpeg"},
      {name:"Lisa", role:"Main Dancer", fact:"International star", img:"lisa.jpeg"}
    ],
    songs:[
      {title:"Pink Venom", img:"PINK VENOM.jpeg", audio:"PINK VENOM.mp3"}
    ],
    mv:"https://www.youtube.com/watch?v=gQlMMD8auMs"
  },

  EXO: {
    name:"EXO",
    banner:"exo-artist.jpeg",
    intro:"Powerful vocals and legendary performances.",
    members:[
      {name:"Suho", role:"Leader", fact:"Caring leader", img:"suho.jpeg"},
      {name:"Baekhyun", role:"Main Vocalist", fact:"Strong vocals", img:"baekhyun.jpeg"},
      {name:"Chanyeol", role:"Rapper", fact:"Tall & multi-talented", img:"chanyeol.jpeg"},
      {name:"Kai", role:"Main Dancer", fact:"Exceptional dancer", img:"kai.jpeg"},
      {name:"Sehun", role:"Lead Dancer", fact:"Visual & dancer", img:"sehun.jpeg"},
      {name:"D.O.", role:"Main Vocalist", fact:"Powerful vocals", img:"DO.jpeg"},
      {name:"Xiumin", role:"Vocalist", fact:"Skilled martial artist", img:"xiumin.jpeg"},
      {name:"Lay", role:"Vocalist", fact:"Solo success in China", img:"lay.jpeg"},
      {name:"Chen", role:"Main Vocalist", fact:"Wide vocal range", img:"chen.jpeg"}
    ],
    songs:[
      {title:"Love Shot", img:"loveshot.jpeg", audio:"LOVE SHOT.mp3"}
    ],
    mv:"https://www.youtube.com/watch?v=pSudEWBAYRE"
  },

  SEVENTEEN: {
    name:"SEVENTEEN",
    banner:"SEVENTEEN-artist.jpeg",
    intro:"Self-producing idols known for choreography & creativity.",
    members:[
      {name:"S.Coups", role:"Leader", fact:"Leader & rapper", img:"s.coup.jpeg"},
      {name:"Jeonghan", role:"Vocalist", fact:"Gentle vocals", img:"jeonghan.jpeg"},
      {name:"Joshua", role:"Vocalist", fact:"Fluent in English", img:"joshua.jpeg"},
      {name:"Jun", role:"Dancer", fact:"Multilingual performer", img:"jun.jpeg"},
      {name:"Hoshi", role:"Main Dancer", fact:"Choreography master", img:"hoshi.jpeg"},
      {name:"Wonwoo", role:"Rapper", fact:"Deep voice", img:"wonwoo.jpeg"},
      {name:"Woozi", role:"Vocalist/Producer", fact:"Produces many songs", img:"woozi.jpeg"},
      {name:"DK", role:"Main Vocalist", fact:"Powerful vocals", img:"DK.jpeg"},
      {name:"Mingyu", role:"Rapper", fact:"Visual & rapper", img:"mingyu.jpeg"},
      {name:"The8", role:"Dancer", fact:"Versatile dancer", img:"The8.jpeg"},
      {name:"Seungkwan", role:"Main Vocalist", fact:"Strong vocals", img:"seungkwan.jpeg"},
      {name:"Vernon", role:"Rapper", fact:"Bilingual rapper", img:"vernon.jpeg"},
      {name:"Dino", role:"Main Dancer", fact:"Youngest member", img:"dino.jpeg"}
    ],
    songs:[{title:"Very Nice", img:"VERY NICE.jpeg", audio:"SEVENTEEN.mp3"}],
    mv:"https://www.youtube.com/watch?v=J-wFp43XOrA"
  },

  NewJeans:{
    name:"NewJeans",
    banner:"NEW JEANS-artist.jpeg",
    intro:"Fresh beats and Y2K vibes for Gen Z fans.",
    members:[
      {name:"Minji", role:"Vocalist", fact:"Fresh visuals", img:"minji.jpeg"},
      {name:"Hanni", role:"Vocalist", fact:"Bright tone", img:"hanni.jpeg"},
      {name:"Danielle", role:"Rapper", fact:"Multilingual skills", img:"danielle.jpeg"},
      {name:"Haerin", role:"Vocalist", fact:"Smooth vocals", img:"Haerin .jpeg"},
      {name:"Hyein", role:"Maknae", fact:"Youngest member", img:"hyein.jpeg"},
      
    ],
    songs:[{title:"Hype Boy", img:"HYPE BOY.jpeg", audio:"HYPE BOY.mp3"}],
    mv:"https://www.youtube.com/watch?v=11cta61wi0g"
  },

  TWICE:{
    name:"TWICE",
    banner:"TWICE2-artist.jpeg",
    intro:"The Nation's Girl Group — catchy tunes & colorful visuals.",
    members:[
      {name:"Nayeon", role:"Lead Vocalist", fact:"Great smile", img:"nayeon.jpeg"},
      {name:"Jeongyeon", role:"Vocalist", fact:"Calm presence", img:"jeongyeon.jpeg"},
      {name:"Momo", role:"Main Dancer", fact:"Dance powerhouse", img:"momo.jpeg"}, 
      {name:"Sana", role:"Vocalist", fact:"Bright personality", img:"sana.jpeg"},
      {name:"Jihyo", role:"Leader / Main Vocalist", fact:"Strong vocals", img:"jihyuo.jpeg"},
      {name:"Mina", role:"Vocalist", fact:"Ballet background", img:"mina.jpeg"},
      {name:"Dahyun", role:"Rapper", fact:"Energetic performer", img:"dahyun.jpeg"},
      {name:"Chaeyoung", role:"Main Rapper", fact:"Creative lyricist", img:"chaeyoung.jpeg"},
      {name:"Tzuyu", role:"Visual", fact:"Tallest member", img:"tzuyu.jpeg"}
      
    ],
    songs:[{title:"Feel Special", img:"feel special.jpeg", audio:"FEEL SPECIAL.mp3"}],
    mv:"https://www.youtube.com/watch?v=3ymwOvzhwHs"
  },

  StrayKids:{
    name:"Stray Kids",
    banner:"stray kids2-artist.jpeg",
    intro:"Revolutionizing K-POP with self-produced hits and fierce energy.",
    members:[
      {name:"Bang Chan", role:"Leader", fact:"Producer & leader", img:"bangchen.jpeg"},
      {name:"Changbin", role:"Rapper", fact:"Producer & rap powerhouse", img:"changbin.jpeg"},
      {name:"Han", role:"Vocalist/Rapper", fact:"Versatile performer", img:"Han.jpeg"},
      {name:"Felix", role:"Dancer", fact:"Unique deep voice", img:"felix.jpeg"},
      {name:"Hyunjin", role:"Main Dancer", fact:"Charismatic stage presence", img:"hyunjin.jpeg"},
      {name:"I.N.", role:"Maknae", fact:"Youngest member", img:"I_N.jpeg"},
      {name:"Seungmin", role:"Vocalist", fact:"Clear vocals", img:"seungmin.jpeg"},
      {name:"Lee Know", role:"Dancer", fact:"Exceptional dancer", img:"lee know.jpeg"},
      {name:"Woojin", role:"Former Member", fact:"Left the group in 2019", img:"woojin.jpeg"
      }],
    songs:[{title:"God's Menu", img:"GOD'S MENU.jpeg", audio:"GOD,W MENU.mp3"}],
    mv:"https://www.youtube.com/watch?v=TQTlCHxyuu8"
  }
};

/* ---------- small DOM helpers ---------- */
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

/* ---------- state for audio players ---------- */
let previewAudio = null; // for card previews (one at a time)
let miniAudio = new Audio(); // floating mini-player
let miniPlaying = false;
let miniMuted = false;

/* ---------- helper: escape HTML ---------- */
function escapeHtml(s = "") {
  return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
}

/* ---------- DOM wiring ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // Search filter
  const searchInput = $('#searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = String(e.target.value).toLowerCase();
      $$('.group-card').forEach(card => {
        const name = card.querySelector('h3')?.textContent.toLowerCase() || "";
        const desc = card.querySelector('p')?.textContent.toLowerCase() || "";
        card.style.display = (name.includes(q) || desc.includes(q)) ? '' : 'none';
      });
    });
  }

  // Open group detail buttons
  $$('.open-group').forEach(btn => {
    btn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      const target = btn.dataset.target;
      if (target) openGroup(target);
      const detailsEl = $('#groupDetails');
      if (detailsEl) detailsEl.scrollIntoView({behavior:'smooth'});
    });
  });

  // Card preview buttons (play short preview)
  $$('.preview-btn').forEach(pb => {
    pb.addEventListener('click', (ev) => {
      ev.stopPropagation();
      const src = pb.dataset.audio;
      if (!src) return;
      // if a different preview is playing, stop it
      if (!previewAudio || previewAudio.src !== src) {
        if (previewAudio) previewAudio.pause();
        previewAudio = new Audio(src);
        previewAudio.volume = 0.6;
        previewAudio.play();
        setMiniPlayer(src, 'Preview track');
        playMini();
      } else {
        // toggle
        if (previewAudio.paused) { previewAudio.play(); playMini(); }
        else { previewAudio.pause(); pauseMini(); }
      }
    });
  });

  // Opening by clicking on the card (avoid clicks on buttons)
  $$('.group-card').forEach(card => {
    card.addEventListener('click', (ev) => {
      if (ev.target.closest('.card-actions')) return;
      const g = card.dataset.group;
      if (g) {
        openGroup(g);
        const detailsEl = $('#groupDetails');
        if (detailsEl) detailsEl.scrollIntoView({behavior:'smooth'});
      }
    });
  });

  // Random Bias button(s)
  const biasBtnHeader = $('#biasBtn');
  const randomBiasBtn = $('#randomBiasBtn');
  if (biasBtnHeader) biasBtnHeader.addEventListener('click', randomBias);
  if (randomBiasBtn) randomBiasBtn.addEventListener('click', randomBias);

  // Fan box controls
  if ($('#postFan')) $('#postFan').addEventListener('click', postFan);
  if ($('#clearFan')) $('#clearFan').addEventListener('click', clearFans);
  loadFanList();

  // Mini player buttons
  if ($('#miniPlay')) $('#miniPlay').addEventListener('click', () => {
    if (!miniAudio.src) return alert('Choose a track or preview first.');
    miniPlaying ? pauseMini() : playMini();
  });
  if ($('#muteBtn')) $('#muteBtn').addEventListener('click', toggleMute);

  // Modal close
  if ($('#modalClose')) $('#modalClose').addEventListener('click', closeModal);
  const modalEl = $('#modal');
  if (modalEl) modalEl.addEventListener('click', (ev) => { if (ev.target === modalEl) closeModal(); });

  // Theme
  initTheme();
  const themeSwitch = $('#themeSwitch');
  if (themeSwitch) themeSwitch.addEventListener('change', toggleTheme);
});

/* ---------- Open group details & wire dynamic buttons ---------- */
function openGroup(key){
  const data = groups[key];
  const details = $('#groupDetails');
  if(!data || !details) return;

  details.innerHTML = generateGroupHtml(data);

  // wire play-track buttons
  $$('.play-track').forEach(btn => {
    const src = btn.dataset.audio;
    btn.addEventListener('click', () => {
     if (src) { setMiniPlayer(src, `${data.name} - ${data.songs[0]?.title || 'Track'}`); playMini(); }

    });
  });

  // wire play-song buttons in carousel
  $$('.play-song').forEach(btn => {
    btn.addEventListener('click', () => {
      const s = btn.dataset.audio;
      if (s) { setMiniPlayer(s, 'Song preview'); playMini(); }
    });
  });

  // wire random fact button
  const openFacts = $('#openFacts');
  if (openFacts) openFacts.addEventListener('click', () => showRandomFact(key));

  // wire view-member modal buttons
  $$('.view-member').forEach(b=>{
    b.addEventListener('click', () => {
      const mn = b.dataset.member;
      const grp = b.dataset.group;
      openModal(`<h3>${escapeHtml(mn)} — ${escapeHtml(grp)}</h3><p style="color:var(--muted)">Full profile is coming soon. Fun fact: ${escapeHtml(getMemberFact(grp, mn))}</p>`);

    });
  });

  // small reveal animation class if desired
  details.classList.add('visible');
}

/* ---------- generate group HTML (keeps separation of concerns) ---------- */
function generateGroupHtml(data) {
  return `
    <div class="group-header">
      <div class="group-banner"><img class="banner-img" src="${escapeHtml(data.banner)}" alt="${escapeHtml(data.name)} banner"></div>
      <div class="group-meta">
        <h2>${escapeHtml(data.name)}</h2>
        <p>${escapeHtml(data.intro)}</p>
        <div class="group-controls">
          <button class="play-track btn" data-audio="${escapeHtml(data.songs[0]?.audio || '')}">▶ Play Top Track</button>
          <a class="btn ghost" href="${escapeHtml(data.mv)}" target="_blank" rel="noopener">Watch MV</a>
          <button class="btn small" id="openFacts">Random Fact</button>
        </div>
      </div>
    </div>

    <h3 style="margin-top:18px">Members</h3>
    <div class="member-grid">
      ${data.members.map(m => `
        <div class="flip-card">
          <div class="flip-inner">
            <div class="flip-front">
              <img src="${escapeHtml(m.img)}" alt="${escapeHtml(m.name)}">
              <h4>${escapeHtml(m.name)}</h4>
              <div style="color:var(--muted); font-size:0.9rem">${escapeHtml(m.role)}</div>
            </div>
            <div class="flip-back">
              <h4>${escapeHtml(m.name)}</h4>
              <p style="font-size:0.95rem">${escapeHtml(m.fact)}</p>
              <div style="margin-top:10px">
                <button class="btn small view-member" data-member="${escapeHtml(m.name)}" data-group="${escapeHtml(data.name)}">View Profile</button>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <h3 style="margin-top:18px">Top Songs</h3>
    <div class="song-carousel">
      ${data.songs.map(s => `
        <div class="song-item">
          <img src="${escapeHtml(s.img)}" alt="${escapeHtml(s.title)}">
          <div>
            <div style="font-weight:600">${escapeHtml(s.title)}</div>
            <div style="font-size:0.85rem; color:var(--muted)">Click to preview</div>
          </div>
          <button class="btn tiny play-song" data-audio="${escapeHtml(s.audio)}">▶</button>
        </div>
      `).join('')}
    </div>
    <div style="margin-top:14px;">
      <h3>Fun Fan Facts</h3>
      <div id="factsArea" style="padding:10px; background:rgba(255,255,255,0.02); border-radius:8px; color:var(--muted)">
        Click "Random Fact" to reveal a fun fact about this group.
      </div>
    </div>
  `;
}

/* ---------- helper: member fact lookup ---------- */
function getMemberFact(groupName, memberName){
  const g = Object.values(groups).find(x=>x.name===groupName);
  if(!g) return '';
  const m = g.members.find(m=>m.name===memberName);
  return m?.fact || "A beloved member!";
}

/* ---------- Random Bias Generator ---------- */
function randomBias(){
  const keys = Object.keys(groups);
  const gKey = keys[Math.floor(Math.random()*keys.length)];
  const g = groups[gKey];
  const member = g.members[Math.floor(Math.random()*g.members.length)];
  const html = `<strong>${escapeHtml(member.name)}</strong> — ${escapeHtml(g.name)}<br><em>${escapeHtml(member.fact)}</em>`;

  const biasRes = $('#biasResult');
  if (biasRes) biasRes.innerHTML = html;
  openModal(`<h2>Your bias is ${escapeHtml(member.name)}!</h2><p>${escapeHtml(member.fact)}</p>`);
}



/* ---------- Fan box  ---------- */
function loadFanList(){
  const arr = JSON.parse(localStorage.getItem('fanPosts') || "[]");
  const ul = $('#fanList'); if(!ul) return;
  ul.innerHTML = '';
  arr.slice().reverse().forEach(item => {
    const li = document.createElement('li');
    li.style.padding = '8px 6px'; li.style.borderBottom = '1px solid rgba(255,255,255,0.03)';
   li.innerHTML = `<div style="font-size:0.95rem">${escapeHtml(item.text)}</div><div style="font-size:0.8rem;color:var(--muted);margin-top:6px">${escapeHtml(item.time)}</div>`;

    ul.appendChild(li);
  });
}
function postFan(){
  const ta = $('#fanText');
  if(!ta) return;
  const txt = ta.value.trim();
  if(!txt) { alert("Write something to post!"); return; }
  const arr = JSON.parse(localStorage.getItem('fanPosts') || "[]");
  arr.push({text: txt, time: new Date().toLocaleString()});
  localStorage.setItem('fanPosts', JSON.stringify(arr));
  ta.value = '';
  loadFanList();
}
function clearFans(){
  if(confirm("Clear all fan messages?")) {
    localStorage.removeItem('fanPosts'); loadFanList();
  }
}

/* ---------- modal ---------- */
function openModal(html){
  const modal = $('#modal');
  const content = $('#modalContent');
  if(!modal || !content) return;
  content.innerHTML = html;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
}
function closeModal(){
  const modal = $('#modal');
  if(!modal) return;
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
}

/* ---------- mini player functions ---------- */
function setMiniPlayer(src, title){
  if (!src) return;
  miniAudio.src = src;
  $('#miniTitle') && ($('#miniTitle').textContent = title || 'Track');
  miniAudio.loop = false;
  miniAudio.volume = miniMuted ? 0 : 0.7;
}
function playMini(){
  if(!miniAudio.src) return;
  miniAudio.play().then(()=> {
    miniPlaying = true;
    if ($('#miniPlay')) $('#miniPlay').textContent = '⏸';
  }).catch(()=>{ /* ignore play promise rejection */ });
}
function pauseMini(){
  miniAudio.pause();
  miniPlaying = false;
  if ($('#miniPlay')) $('#miniPlay').textContent = '▶';
}
function toggleMute(){
  miniMuted = !miniMuted;
  miniAudio.muted = miniMuted;
  if ($('#muteBtn')) $('#muteBtn').textContent = miniMuted ? '🔇' : '🔊';
}

/* ---------- theme handling ---------- */
function initTheme(){
  const saved = localStorage.getItem('kp_theme');
  if(saved === 'light'){ document.body.classList.add('light-mode'); const sw = $('#themeSwitch'); if(sw) sw.checked = true; }
}
function toggleTheme(){
  const sw = $('#themeSwitch');
  const on = sw && sw.checked;
  if(on){ document.body.classList.add('light-mode'); localStorage.setItem('kp_theme','light'); }
  else{ document.body.classList.remove('light-mode'); localStorage.setItem('kp_theme','dark'); }
}

/* ---------- keyboard accessibility: ESC to close modal ---------- */
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });