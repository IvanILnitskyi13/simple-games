'use strict';

const generateNumber = () => Number(Math.trunc(Math.random() * 20) + 1);

const setBodyBackgroundColor = color =>
  (document.querySelector('body').style.backgroundColor = color);

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

const setNumberWidth = width =>
  (document.querySelector('.number').style.width = width);

const setNumberContent = content =>
  (document.querySelector('.number').textContent = content);

const setScore = score =>
  (document.querySelector('.score').textContent = score);

let number = generateNumber();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🛑 Not a number 🛑';

    //When guess is equals
  } else if (guess === number && score > 1) {
    displayMessage('✅You won✅');
    setNumberContent(number);
    setBodyBackgroundColor('#60b347');
    setNumberWidth('30rem');

    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is different
  } else if (guess !== number && score > 1) {
    score--;
    setScore(score);
    displayMessage(guess < number ? '⬇Too low⬇' : '⬆Too hight⬆');

    //When scope equals 1 and  when scope equals 0 do nothing
  } else if (score === 1) {
    score--;
    displayMessage('❌Game over❌');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = generateNumber();
  score = 20;
  setScore(score);
  setNumberContent('?');
  setNumberWidth('15rem');
  setBodyBackgroundColor('#222');
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});
