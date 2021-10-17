
// // intial value of the counter (rep), logical evaluation (condition), increment (rep)
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Printing this ${rep} time(s)`);
// }

const felixArray = [
    'Felix',
    'vemmer',
    2021 - 1993,
    'Data Engineer',
    ['Luca', 'Clara', 'Paulina']
]

// const types = []

// for (let i = 0; i < felixArray.length; i++) {
//     console.log(felixArray[i]);
//     types.push(typeof felixArray[i])
// }

// console.log(types);


// const years = [1995, 1996, 1997, 1998, 1999, 2000, 2007, 2008, 2009, 2010, 2014, 2015, 2016];

// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2021 - years[i]);
// }

// console.log(ages);

console.log('--- ONLY STRINGS ---')
for (let i = 0; i < felixArray.length; i++) {
    // continue exits the loop and goes to the next iteration
    // if not string it gets exited
    if (typeof felixArray[i] !== 'string') continue;

    console.log(felixArray[i], typeof felixArray[i]);
}


console.log('--- ONLY UNTIL NUMBER ---')
for (let i = 0; i < felixArray.length; i++) {
    // continue exits the loop and goes to the next iteration
    // if not string it gets exited
    if (typeof felixArray[i] === 'number') break;

    console.log(felixArray[i], typeof felixArray[i]);
}