const personIsAdult = (age) => {
    if (typeof age !== "number" || age < 0){
        console.log('Data should be positive number')
    }

    return age >= 18 ? "person is adult" : "person is not adult"
}

console.log(personIsAdult(19))
console.log(personIsAdult(18))
console.log(personIsAdult(17))

