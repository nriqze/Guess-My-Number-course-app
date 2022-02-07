'use strict'

// APP GUESS MY NUMBER
//////////////////////

///// Elements /////
let secretNum = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNum);

let score = 20;
let highscore = 0;

const number = document.querySelector('.number');

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

///// Functions /////
const displayNum = function (element) {
    document.querySelector(`.${element}`).textContent = score;
};
const displayMsg = function(message) {
    document.querySelector('.message').textContent = message;
};

///// Event handlers /////
// Play
btnCheck.addEventListener('click', function() {
    const guess = +(document.querySelector('.guess').value);
    console.log(number);
    
    if (!guess || guess > 20) {
        displayMsg('⛔ Enter a number between 1 and 20!');
    } else if (guess === secretNum) {
        displayMsg('🍕 Correct Number!');
        document.body.style.backgroundColor = '#60B347';
        number.style.width = '30rem';
        number.textContent = secretNum;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }

    } else if (guess !== secretNum) {
        (guess < secretNum) ? displayMsg('📉 Too low!') : displayMsg('📈 Too high!');
        score--;
        displayNum('score')
    };
});
// Reset
btnAgain.addEventListener('click', function() {
    score = 20;
    secretNum = Math.trunc(Math.random() * 20) + 1;
    
    displayMsg('Start guessing...');
    displayNum('score');
    
    document.body.style.backgroundColor = '#222';
    
    document.querySelector('.guess').value = '';
    
    number.style.width = '15rem';
    number.textContent = '?';
});
