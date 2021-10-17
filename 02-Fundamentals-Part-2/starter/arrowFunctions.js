// Arrow Function

// no curly braces will be returned right away
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1997);
console.log(age3);

// more liner function return is needed
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1995, 'Lucas'));

console.log(yearsUntilRetirement(1993, 'Felix'));

