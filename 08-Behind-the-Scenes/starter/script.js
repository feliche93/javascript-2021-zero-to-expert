'use strict';

// function calcAge(birthYear) {
//     const age = 2021 - birthYear;

//     function printAge() {
//         const output = `${firstName} are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             const str = `Oh you are an millenial, ${firstName}`;
//             console.log(str);
//             }

//             // console.log(str);

//             function add(a,b) {
//                 return a + b;
//             }

//         console.log(add(2,3));


//     }

//     printAge();

//     return age;
// }

// const firstName = 'Felix';
// calcAge(1993);

// console.log(me)
// console.log(job)
// console.log(year)


// var me = 'Felix';
// let job = 'Data Engineer';
// const year = 1993;

// console.log(addDecl(2,3));

// function addDecl(a,b) {
//     return a + b;
// }

// console.log(addDecl(2,3));
// // console.log(addExpr(2,3));
// console.log(addArrow(2,3));

// const addExpr = function(a,b) {
//     return a + b;
// }


// const addArrow= (a,b) => a + b;


// console.log(this);

// const calcAge = function (birthYear) {

//     console.log( 2021 - birthYear);
//     console.log(this);
// }

// calcAge(1993);


// const calcAgeArrow = (birthYear) => {

//     console.log( 2021 - birthYear);
//     console.log(this);
// }

// calcAgeArrow(1993);

// const felix = {
//     birthYear: 1993,
//     calcAge: function() {
//         console.log(this);
//         console.log( 2021 - this.birthYear);
//     }
// }

// felix.calcAge();

// const lucas = {
//     birthYear: 1995,
// }

// lucas.calcAge = felix.calcAge;
// lucas.calcAge();

// const f = felix.calcAge;

// console.log(f);
// f();

// const felix = {
//     firstName: 'Felix',
//     birthYear: 1993,
//     calcAge: function() {
//         console.log(this);
//         console.log( 2021 - this.birthYear);
//     },
//     greet: () => console.log(`Hi, I am ${this.firstName}`)
// }

// felix.greet();

let lastName = 'Felix';
let oldLastName = lastName;
lastName = 'Watson';
console.log(lastName, oldLastName);


const felix = {
    firstName: 'Felix',
    lastName: 'Vemmer',
    age: 28
}

const marriedFelix = felix

felix.lastName = 'Watson';

console.log(felix, marriedFelix);


const felix2 = {
    firstName: 'Felix',
    lastName: 'Vemmer',
    age: 28,
    family: ['Lucas']
}

const felix2Copy = {...felix2};

felix2Copy.lastName = 'Watson';
felix2Copy.family.push('Ingrid');
felix2Copy.family.push('EA');

console.log(felix2, felix2Copy);