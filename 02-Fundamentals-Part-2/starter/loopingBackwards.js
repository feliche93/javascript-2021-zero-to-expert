const felixArray = [
    'Felix',
    'vemmer',
    2021 - 1993,
    'Data Engineer',
    ['Luca', 'Clara', 'Paulina']
]

// loop backwards
for (let i = felixArray.length - 1; i >= 0; i--) {
    console.log(felixArray[i])
}


for (let excercise = 1; excercise <= 3; excercise++) {
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Excercise Number: ${excercise} (Wrap ${rep})`)
    }
}