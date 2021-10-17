// literal syntax
const friends = ['Bob', 'Jane', 'Mark'];
console.log(friends);

const years = new Array(1990, 1969, 1948);
console.log(years);

console.log(friends[1]);
console.log(friends.length);

// get last element
console.log(friends[friends.length - 1])

// remove
friends[2] = 'Mike';
console.log(friends);

const firstName = 'Felix'
const felix = [firstName, 'Vemmer', 2021 - 1993, friends];

console.log(felix);

const calAge = function (birthYear) {
    return 2021 - birthYear;
}

const y = [calAge(2021), 2020, 2019, calAge(2018)]

console.log(y);

// push adds elements to end of array
friends.push('Felix');

// push element to beginning
friends.unshift('alpha');

// remove last element of array
const popped = friends.pop();
console.log(popped)

const shifted = friends.shift();
console.log(shifted)
console.log(friends);

// returns index
console.log(friends.indexOf('Jane'));

// returns true if element is in array
// testing with strict conversion
console.log(friends.includes('Bob'))

// if conditions
if (friends.includes('Felix')) {
    console.log('Bob is a friend');
} else {
    console.log('Felix is not a friend');
}

// coding challenge

const calcTip = function (bill) {
    if (bill >= 50 && bill < 300) {
        tipPercentage = 0.15
    } else {
        tipPercentage = 0.2
    }

    return tip = bill * tipPercentage;

}

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(total);