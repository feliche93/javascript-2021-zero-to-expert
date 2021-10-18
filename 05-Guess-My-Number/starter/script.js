'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number! 🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 5;
// console.log(document.querySelector('.guess').value);

// outside only defined once
const secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;

const reload = function () {
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}

document.querySelector('.again').addEventListener('click', reload);


document.querySelector('.check').addEventListener(
    'click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess);

        // When there is no input
        if (!guess) {
            document.querySelector('.message').textContent = 'No Number! 🛑'

            // When the input is the correct number
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = 'Correct Number! 🎉'
            document.querySelector('.number').textContent = secretNumber;


            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            // When the input is too high
        } else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Number is too high! 🔼'
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'Game Over! 💀'
                document.querySelector('.score').textContent = 0;
            }

            // When the input is too low
        } else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Number is too low! 🔽'
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'Game Over! 💀'
                document.querySelector('.score').textContent = 0;
            }
        }


    });