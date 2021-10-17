
const felix = {
    firstName: "Felix",
    lastName: "Vemmer",
    age: "28",
    job: "Programmer",
    age: 2021 - 1993,
    friends: ["Clara", "Paulina", "Luca"]
}

console.log(felix.job);

//any expression we like
console.log(felix["job"]);

const nameKey = 'Name'
console.log(felix["first" + nameKey]);

// const userInput = prompt("What key to retrieve?")
// console.log(felix[userInput]);

felix.location = 'Berlin'
felix["Twitter"] = '@FelixVemmer'

console.log(felix);
