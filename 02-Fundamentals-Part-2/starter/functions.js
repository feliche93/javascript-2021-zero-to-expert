// functions can be reused

function nameOfTheFunction() {
    // function body
    console.log('My name is Felix!')
}

// nameOfTheFunction()
// nameOfTheFunction()


// function with parameters
function sayHello(name) {
    console.log('Hello ' + name)
}

sayHello('Felix')

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const juice = fruitProcessor(2, 3)
console.log(juice)

// function declearation
// can be called before it is defined

// const age = calcAge1(1993)
// console.log(age)

function calcAge1(birthYear) {
    const year = 2021
    return year - birthYear;
}

// Function expressions
// stored as variable
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}