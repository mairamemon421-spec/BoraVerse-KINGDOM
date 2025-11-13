// Load Fan Art Data
fetch('fanzoneData.json')
  .then(response => response.json())
  .then(data => {
    const gallery = document.getElementById('artGallery');
    data.fanArt.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('art-card');
      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>By: ${item.artist}</p>
      `;
      gallery.appendChild(card);
    });
  });

// Message Wall Functionality
const form = document.getElementById('messageForm');
const container = document.getElementById('messagesContainer');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('fanName').value;
  const idol = document.getElementById('idolSelect').value;
  const message = document.getElementById('fanMessage').value;

  const msgCard = document.createElement('div');
  msgCard.classList.add('message-card');
  msgCard.innerHTML = `<strong>${name}</strong> 💜 to <strong>${idol}</strong>:<br>${message}`;

  container.prepend(msgCard);
  form.reset();
});

// Poll Section
const buttons = document.querySelectorAll('.poll-btn');
const result = document.getElementById('pollResult');
let votes = { Dynamite: 0, Butter: 0, DNA: 0 };

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const choice = btn.dataset.option;
    votes[choice]++;
    const total = votes.Dynamite + votes.Butter + votes.DNA;
    result.textContent = `💜 Dynamite: ${((votes.Dynamite / total) * 100).toFixed(1)}% | Butter: ${((votes.Butter / total) * 100).toFixed(1)}% | DNA: ${((votes.DNA / total) * 100).toFixed(1)}%`;
  });
});

// Trivia Game
let triviaData = [];
let currentQuestion = 0;
let score = 0;

// Elements (make sure these IDs exist in your HTML)
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const nextBtn = document.getElementById('nextQuestion');
const startBtn = document.getElementById('startTrivia');
const scoreDisplay = document.getElementById('scoreDisplay');
const progressBarInner = document.getElementById('progressBarInner');

// Defensive checks: if elements missing, don't run trivia
if (!questionText || !optionsContainer || !nextBtn || !startBtn || !scoreDisplay || !progressBarInner) {
  console.warn('Trivia: one or more elements are missing (IDs). Trivia will not initialize.');
} else {
  // Initially hide/disable controls until data loads
  startBtn.disabled = true;
  nextBtn.style.display = 'none';

  // Load Trivia Data from JSON
  fetch('fanzoneData.json')
    .then(res => {
      if (!res.ok) throw new Error('Failed to load trivia JSON');
      return res.json();
    })
    .then(data => {
      triviaData = Array.isArray(data.trivia) ? data.trivia : [];
      if (triviaData.length === 0) {
        questionText.textContent = 'No trivia available right now.';
        startBtn.disabled = true;
        return;
      }
      startBtn.disabled = false;
      questionText.textContent = 'Click "Start Quiz 🎤" to begin!';
    })
    .catch(err => {
      console.error('Error loading trivia data:', err);
      questionText.textContent = 'Unable to load quiz. Try again later.';
    });

  // Event listeners
  startBtn.addEventListener('click', startQuiz);
  nextBtn.addEventListener('click', nextQuestion);

  function startQuiz() {
    if (triviaData.length === 0) return;
    score = 0;
    currentQuestion = 0;
    startBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
    nextBtn.disabled = true; // disabled until user answers
    showQuestion();
  }

  function showQuestion() {
    // Guard
    if (currentQuestion < 0 || currentQuestion >= triviaData.length) {
      finishQuiz();
      return;
    }

    const q = triviaData[currentQuestion];
    questionText.textContent = `Q${currentQuestion + 1}. ${q.question}`;
    optionsContainer.innerHTML = '';
    nextBtn.disabled = true; // until an answer is selected

    // Shuffle options so order changes each play
    const options = shuffleArray([...q.options]);

    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.classList.add('option-btn');
      btn.textContent = opt;
      btn.type = 'button';
      btn.addEventListener('click', () => selectAnswer(btn, opt, q.answer));
      optionsContainer.appendChild(btn);
    });

    updateProgress();
    scoreDisplay.textContent = `Score: ${score}/${triviaData.length}`;
  }

  function selectAnswer(button, selected, correct) {
    // disable all option buttons immediately to prevent multiple clicks
    const all = optionsContainer.querySelectorAll('.option-btn');
    all.forEach(b => b.disabled = true);

    // Visual feedback
    if (selected === correct) {
      button.style.background = '#7a33ff'; // correct color
      score++;
    } else {
      button.style.background = '#ff4da6'; // wrong color
      // show which one was correct
      all.forEach(b => {
        if (b.textContent === correct) {
          b.style.background = '#7a33ff';
        }
      });
    }

    // enable Next button so user moves on
    nextBtn.disabled = false;
    scoreDisplay.textContent = `Score: ${score}/${triviaData.length}`;
  }

  function nextQuestion() {
    // Move to next; if last was just answered, advance; else finish
    currentQuestion++;
    if (currentQuestion < triviaData.length) {
      showQuestion();
    } else {
      finishQuiz();
    }
  }

  function finishQuiz() {
    questionText.textContent = `🎉 You finished the quiz! Final Score: ${score}/${triviaData.length}`;
    optionsContainer.innerHTML = '';
    nextBtn.style.display = 'none';
    startBtn.style.display = 'inline-block';
    startBtn.disabled = false;
    startBtn.textContent = 'Play Again 🎤';
    // progress to 100%
    progressBarInner.style.width = '100%';
    scoreDisplay.textContent = `Score: ${score}/${triviaData.length}`;
  }

  function updateProgress() {
    const total = triviaData.length || 1;
    // progress shows how many QUESTIONS have been **shown** (0-based)
    const percent = Math.round((currentQuestion / total) * 100);
    progressBarInner.style.width = `${percent}%`;
  }

  // Utility: Fisher–Yates shuffle
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}
// End of fanzone.js