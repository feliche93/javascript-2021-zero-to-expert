
const age = 23;
// ternary operator is a shortcut for if else statement
// condition ? true : false
const vote = age >= 18 ? "vote" : "not vote";

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}

console.log(`You can ${age >= 18 ? "vote" : "not vote"}`);