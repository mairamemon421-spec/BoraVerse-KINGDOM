// 🌙 Artist & Song Data
const artists = {
  BTS: [
    { title: "Butter", src: "music/butter.mp3", img: "https://i.scdn.co/image/ab67616d0000b273f5d19f0108e1c6f0b2e6c8b3" },
    { title: "Dynamite", src: "music/dynamite.mp3", img: "https://i.scdn.co/image/ab67616d0000b2738c7f52c1ab0563dcd6d8b985" }
  ],
  BLACKPINK: [
    { title: "Pink Venom", src: "music/pink-venom.mp3", img: "https://i.scdn.co/image/ab67616d0000b2730dc12e0d93926ab9dd98db9a" },
    { title: "Shut Down", src: "music/shut-down.mp3", img: "https://i.scdn.co/image/ab67616d0000b273dc2dceae5b0fdd88b478f4be" }
  ],
  IVE: [
    { title: "Love Dive", src: "music/love-dive.mp3", img: "https://i.scdn.co/image/ab67616d0000b273a68c9debbfd3e3c81c5116d3" },
    { title: "After Like", src: "music/after-like.mp3", img: "https://i.scdn.co/image/ab67616d0000b273fe24eac6807a69f8e3d3c756" }
  ],
  SEVENTEEN: [
    { title: "Super", src: "music/super.mp3", img: "https://i.scdn.co/image/ab67616d0000b273b203e30c191ae6ccf98d1a5c" },
    { title: "Hot", src: "music/hot.mp3", img: "https://i.scdn.co/image/ab67616d0000b2734f88985ea6c65c3a4bfc50b2" }
  ]
};

const albumArt = document.getElementById('albumArt');
const songTitle = document.getElementById('songTitle');
const artistName = document.getElementById('artistName');
const audioPlayer = document.getElementById('audioPlayer');
const artistsContainer = document.getElementById('artistsContainer');
const addFavBtn = document.getElementById('addFavBtn');
const favPlaylist = document.getElementById('favPlaylist');
const shuffleBtn = document.getElementById('shuffleBtn');

let currentSong = null;
let favSongs = [];

// 🎧 Display artists and songs
for (let artist in artists) {
  const card = document.createElement('div');
  card.classList.add('artist-card');
  card.innerHTML = `<h4>${artist}</h4>`;

  artists[artist].forEach(song => {
    const s = document.createElement('div');
    s.classList.add('song-item');
    s.textContent = `🎵 ${song.title}`;
    s.onclick = () => playSong(song, artist);
    card.appendChild(s);
  });

  artistsContainer.appendChild(card);
}

// 🎶 Play a song
function playSong(song, artist) {
  currentSong = { ...song, artist };
  audioPlayer.src = song.src;
  albumArt.src = song.img;
  songTitle.textContent = song.title;
  artistName.textContent = artist;
  audioPlayer.play();
}

// 💜 Add to B-Fav Playlist
addFavBtn.addEventListener('click', () => {
  if (!currentSong) return alert('Play a song first!');
  const exists = favSongs.find(f => f.title === currentSong.title);
  if (!exists) {
    favSongs.push(currentSong);
    renderFavs();
  }
});

function renderFavs() {
  favPlaylist.innerHTML = '';
  favSongs.forEach((s, i) => {
    const item = document.createElement('div');
    item.classList.add('fav-item');
    item.innerHTML = `
      <span>🎧 ${s.title} — ${s.artist}</span>
      <button onclick="removeFav(${i})">✖</button>
    `;
    item.onclick = () => playSong(s, s.artist);
    favPlaylist.appendChild(item);
  });
}

function removeFav(i) {
  favSongs.splice(i, 1);
  renderFavs();
}

// 🔀 Shuffle Play
shuffleBtn.addEventListener('click', () => {
  const allSongs = Object.entries(artists)
    .flatMap(([artist, list]) => list.map(song => ({ ...song, artist })));
  const randomSong = allSongs[Math.floor(Math.random() * allSongs.length)];
  playSong(randomSong, randomSong.artist);
});
// 🎵 Auto-play next song when current ends
audioPlayer.addEventListener('ended', () => {
  shuffleBtn.click();
});

// 🎤 Initial shuffle play on load
window.onload = () => {
  shuffleBtn.click();
};