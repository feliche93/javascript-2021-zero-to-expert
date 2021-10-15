// TypeConversion: manually convert
// TypeCoercion: automatically convert


// string
const inputYear = '1991'

// convert
console.log(Number(inputYear) + 18)

// NaN Not a Number

// String conversion
console.log(String(23))

// Boolean conversion
console.log(Boolean(0))
console.log(Boolean(1))

console.log(Number(true))
console.log(Number(false))

// type coercion
console.log("I am " + 28 + " years old")


// convert strings to numbers automatically only plus is around
console.log('23' - 10 - '3')
console.log(23 + 10 + '3')
console.log('23' > '20')