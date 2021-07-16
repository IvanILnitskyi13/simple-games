'use strict';

const randomGenerator = () => Math.trunc(Math.random() * 6) + 1;

const player0 = document.querySelector('.player-0');
const player1 = document.querySelector('.player-1');
const player0Score = document.querySelector('.score-0');
const player1Score = document.querySelector('.score-1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRol = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');

let currentScore, activePlayer, score;

const setCurrentScore = () => {
    document.querySelector(`.current-score-${activePlayer}`).textContent = currentScore;
};


const init = function () {
    player0Score.textContent = '0';
    player1Score.textContent = '0';
    dice.classList.add('hidden');

    player0.classList.remove('player-active');
    player1.classList.remove('player-active');
    player0.classList.remove('player-winner');
    player1.classList.remove('player-winner');
    player0.classList.add('player-active');
    btnRol.disabled = false;
    btnHold.disabled = false;
    activePlayer = 0;
    currentScore = 0;
    score = [0, 0];
}

init();

btnRol
    .addEventListener('click', function () {
        const diceNumber = randomGenerator();

        dice.src = `img/dice-${diceNumber}.png`;
        dice.classList.remove('hidden');

        if (diceNumber !== 1) {
            currentScore += diceNumber;
            setCurrentScore();
        } else {
            resetCurrentScoreAndSetScore();
            switchPlayer();
        }
    });

btnHold.addEventListener('click', function () {
    score [activePlayer] += currentScore;

    if (score[activePlayer] >= 100) {
        resetCurrentScoreAndSetScore();
        dice.classList.add('hidden');
        document.querySelector(`.player-${activePlayer}`).classList.add('player-winner');
        btnRol.disabled = true;
        btnHold.disabled = true;
    } else {
        resetCurrentScoreAndSetScore();
        switchPlayer();
    }
});


function switchPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    player0.classList.toggle('player-active');
    player1.classList.toggle('player-active');
}

function resetCurrentScoreAndSetScore() {
    currentScore = 0;
    setCurrentScore();
    document.querySelector(`.score-${activePlayer}`).textContent = score[activePlayer];
}

btnNew.addEventListener('click', function () {
    init();
});


