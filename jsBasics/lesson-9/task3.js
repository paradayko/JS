const car1 = {
    brand: 'Volkswagen',
    model: 'Passat',
    year: 2014
}

const car2 = {
    brand: 'BMW',
    model: 'F10',
    owner: "Andrii"
}

const car3 = {...car1, ...car2}
console.log(car1)
console.log(car2)
console.log(car3)