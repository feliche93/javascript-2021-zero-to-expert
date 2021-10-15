// 5 falsy values: 0, "", null, undefined, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// truthy values
console.log(Boolean(1));
console.log(Boolean("a"));
console.log(Boolean(true));
console.log(Boolean({}));

const money = 0;

// money = 0 is falsy
// first condition is false
// second condition is true
if (money) {
    console.log("You have money");
} else {
    console.log("You have no money");
}

// is undefined
let height;
if (height) {
    console.log("Height is defined");
} else {
    console.log("Height is undefined");
}