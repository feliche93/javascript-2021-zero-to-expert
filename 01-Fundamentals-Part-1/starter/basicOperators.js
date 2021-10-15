// ooperator to transform or combine multiple values

// mathematical operators
// + - * / %
// ** 3 to the power of

const currentYear = 2021;
const ageFelix = currentYear - 1993;
const ageLucas = currentYear - 1995;
console.log(ageFelix, ageLucas);
console.log(ageFelix - ageLucas);

const firstName = 'Felix'
const lastName = 'Vemmer'
const fullName = firstName + ' ' + lastName
console.log(fullName)

// assignment operators
// = += -= *= /= %= **=
let x = 10 + 5;
console.log(x);

// x = x + 5;
x += 5;
console.log(x);

// x = x * 4
x *= 4;
console.log(x);

// x++
// x = x + 1
x++;
console.log(x);

//x--
//x = x - 1
x--;
console.log(x);


// comparison operators
// == === != !== > < >= <=
const fullAge = 18;
console.log(ageFelix <= ageLucas);
console.log(ageFelix >= fullAge);