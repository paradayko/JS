const numbers = [2, -5, 0, 7, -3, 0, 10, -8]
let positiveValue = 0
let negativeValue = 0
let zeroValue = 0

const valueCounter = () => {
    for (const number of numbers){
    if (number > 0) {
        ++positiveValue
    } else if (number < 0) {
        ++negativeValue
    } else {
        ++zeroValue
    }
        }
}
valueCounter()
console.log(`positive value = ${positiveValue}`);
console.log(`negative value = ${negativeValue}`);
console.log(`zero value = ${zeroValue}`);
