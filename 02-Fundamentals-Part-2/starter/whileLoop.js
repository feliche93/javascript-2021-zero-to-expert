for (let excercise = 1; excercise <= 3; excercise++) {
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Excercise Number: ${excercise} (Wrap ${rep})`)
    }
}

// while loop

let rep = 1

while (rep <= 10) {
    console.log(`Excercise Number: ${rep}`)
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1
console.log(dice)

while (dice !== 6) {
    dice = Math.trunc(Math.random() * 6) + 1
    console.log(`You rolled a ${dice}.`)
}