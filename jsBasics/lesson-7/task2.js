
const countNum = (num) => {
    if (num <= 0){
    return
    } 
    console.log(num)
    return countNum(num -1)
}

const result = countNum
result(5)

