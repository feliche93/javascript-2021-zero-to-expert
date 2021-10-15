
const age = 18;

// if we just have one line we do not need the {}
// if (age === 18) console.log('You just became an adult');

// strict equality operator ===
// does not convert data types and logs the value
if (age === '18') console.log('You just became an adult (strict)');
// loose equality operator ==
// passes as it converts 18 from a string to a number
if (age == '18') console.log('You just became an adult (loose)');

// avoid the loose quality operator
// always use the === operator

// const favoriteNumber = prompt('What is your favorite Number?');

// fix it  this way
const favoriteNumber = Number(prompt('What is your favorite Number?'));


// this works because the prompt returns a string
// if (favoriteNumber == 23) {
//     console.log('You guessed the right number');
// } else {
//     console.log('You guessed the wrong number');
// }

// this will not work because the prompt returns a string
// if (favoriteNumber === 23) {
//     console.log('You guessed the right number');
// } else {
//     console.log('You guessed the wrong number');
// }

// if else
// if (favoriteNumber === 23) {
//     console.log('You guessed the right number');
// } else if (favoriteNumber === 24) {
//     console.log('You guessed the right number');
// } else {
//     console.log('You guessed the wrong number');
// }

if (favoriteNumber !== 23) {
    console.log('Why not 23');
} else {
    console.log('23 it is');
}

// always use strict version === or !==