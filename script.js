'use strict';
const numberEl = document.querySelector('.number');
const guessEl = document.querySelector('.guess');
const checkbtn = document.querySelector('.check');
const messageEl = document.querySelector('.message');
const highscoreEl = document.querySelector('.highscore');
const scoreEl = document.querySelector('.score');
const againBtn = document.querySelector('.again');
let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const message = mas => (messageEl.textContent = mas);

checkbtn.addEventListener('click', function () {
  const guess = Number(guessEl.value);
  if (!guess) {
    message('⛔️ No number');
  } else if (number === guess) {
    message('✅ nice guess !');
    numberEl.textContent = number;
    numberEl.style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    checkbtn.disabled = true;
    if (highscore < score) {
      highscore = score;
      highscoreEl.textContent = score;
    }
  } else if (number != guess) {
    number > guess
      ? message('⬇️ number is to low')
      : message('⬆️ number is too high');
    score--;
    scoreEl.textContent = score;
    if (score < 1) {
      message('sorry you lost!');
      scoreEl.textContent = 0;
      checkbtn.disabled = true;
    }
  }
});

againBtn.addEventListener('click', function () {
  numberEl.textContent = '?';
  guessEl.value = '';
  messageEl.textContent = 'Start Guessing...';
  scoreEl.textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
  checkbtn.disabled = false;
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
});
