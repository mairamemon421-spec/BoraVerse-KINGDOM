// 🌙 Dark / Light Mode Toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeToggle.textContent =
    document.body.classList.contains("dark-mode") ? "☀" : "🌙";
});

// 📱 Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

//  Watch Now Button
document.getElementById("watchNow").addEventListener("click", () => {
  alert("Redirecting to BLACKPINK - Pink Venom music video!");
  window.open("https://www.youtube.com/watch?v=gQlMMD8auMs", "_blank");
  
});
// 🎬 Watch Now Buttons for Trending Section
document.querySelectorAll(".watch-btn").forEach(button => {
  button.addEventListener("click", () => {
    const videoLink = button.getAttribute("data-link");
    if (videoLink) {
      alert("🎥 Redirecting to " + button.previousElementSibling.textContent + "!");
      window.open(videoLink, "_blank");
    }
  });
});

// 🎤 Artist Data for Modal
const artistDetails = {
  BTS: {
    bio: "BTS is a 7-member South Korean boy band known for inspiring lyrics and global influence.",
    audio: "b-t-s-396587.mp3"
  },
  BLACKPINK: {
    bio: "BLACKPINK is a record-breaking girl group famous for confidence and fierce performances.",
    audio: "black-box-ficx-your-heart-129460.mp3"
  },
  EXO: {
    bio: "EXO is one of K-POP’s most powerful groups known for stunning harmonies and visuals.",
    audio: "count-your-blessings-238930.mp3"
  },
  NewJeans: {
    bio: "NewJeans redefined K-POP’s next generation with refreshing, retro-inspired music and aesthetics.",
    audio: "dancing-in-the-stars-219514.mp3"
  },
  SEVENTEEN: {
    bio: "SEVENTEEN is a self-producing idol group known for intricate choreography and vibrant music.",
    audio: "salvation-devil-249821.mp3"
  },
  StrayKids: {
    bio: "Stray Kids dominate the stage with raw energy, self-written tracks, and intense performances.",
    audio: "body-temperatur-328736.mp3"
  },
  Twice: {
  bio: "TWICE is a nine-member group known for catchy tunes, bright visuals, and synchronized choreography.",
  audio: "love-syndrome-328787.mp3"
}};

//  Modal Functionality
const modal = document.getElementById("artistModal");
const modalName = document.getElementById("modalName");
const modalBio = document.getElementById("modalBio");
const modalAudio = document.getElementById("modalAudio");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".learn-more").forEach(button => {
  button.addEventListener("click", e => {
    const artist = e.target.dataset.artist;
    modal.style.display = "flex";
    modalName.textContent = artist;
    modalBio.textContent = artistDetails[artist].bio;
    modalAudio.src = artistDetails[artist].audio;
    modalAudio.play();
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modalAudio.pause();
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalAudio.pause();
  }
});

// 🎶 Play / Pause Music
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const currentSong = document.getElementById("currentSong");
const audio = new Audio("a-future-of-fantasy-219844.mp3");


playBtn.addEventListener("click", () => {
  audio.play();
  currentSong.textContent = "🎶 Now Playing: K-POP Sample Track";
});
pauseBtn.addEventListener("click", () => {
  audio.pause();
  currentSong.textContent = "⏸ Paused";
});

// Fan Zone Voting
const voteBtns = document.querySelectorAll(".vote-btn");
const resultDiv = document.getElementById("voteResult");
const votes = { BTS: 0, BLACKPINK: 0, EXO: 0, SEVENTEEN: 0, STRAYKIDS: 0, TWICE: 0, NEWJEANS: 0 };

voteBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const artist = btn.getAttribute("data-artist");
    votes[artist]++;
    resultDiv.innerHTML = `
      🏆 Current Votes:
      <br>BTS: ${votes.BTS}
      <br>BLACKPINK: ${votes.BLACKPINK}
      <br>SEVENTEEN: ${votes.SEVENTEEN}
      <br>STRAYKIDS: ${votes.STRAYKIDS}
      <br>EXO: ${votes.EXO}
      <br>TWICE: ${votes.TWICE}
      <br>NEWJEANS: ${votes.NEWJEANS}
    `;
  });
});

// 🌈 Fade-in animation on scroll
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.classList.add("visible");
    }
  });
});
