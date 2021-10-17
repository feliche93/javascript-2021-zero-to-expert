const felix = {
    firstName: "Felix",
    lastName: "Vemmer",
    age: "28",
    job: "Programmer",
    age: 2021 - 1993,
    friends: ["Clara", "Paulina", "Luca"],
    hasDriveresLicense: true,
    birthYear: 1993,
    // calcAge: function calcAge(birthYear) {
    //     const year = 2021
    //     return year - birthYear;
    // }
    calcAge: function calcAge() {
        console.log(this);
        const year = 2021
        this.age = year - this.birthYear
        return this.age
    },
    getSummary: function () {
        return `${this.firstName} is ${this.calcAge()} years old, works as a ${this.job} and ${this.hasDriveresLicense ? 'has a' : 'does not have a'} drivers licencse. `
    },
}


// console.log(felix.calcAge(felix.birthYear));
console.log(felix.getSummary());

john = {
    fullName: 'John Smith',
    height: 1.95,
    mass: 92,
    calcBmi: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

mark = {
    fullName: 'Mark Miller',
    height: 1.69,
    mass: 78,
    calcBmi: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

mark.calcBmi()
john.calcBmi()

console.log(`${mark.bmi > john.bmi ? "John's" : "Mark's"} BMI (${mark.bmi > john.bmi ? mark.bmi : john.bmi}) is higher than ${mark.bmi < john.bmi ? "John's" : "Mark's"} BMI (${mark.bmi < john.bmi ? mark.bmi : john.bmi})`)