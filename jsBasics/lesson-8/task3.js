const newArr = [1,2,3,4,5,6,7,8,9,10]

const reducedArr = newArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(reducedArr)