const handleNum = (num, evenCallback, OddCallback) => {
    if (num % 2 === 0){
       return evenCallback()
    }
    return OddCallback()
}

const handleEven = () => console.log("number is even")
const handleOdd = () => console.log("number is odd")

handleNum(5, handleEven, handleOdd)