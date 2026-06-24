const devide = (numerator, denominator) => {
    if (typeof numerator !== "number" || typeof denominator !== "number"){
        throw new Error("numerator and denominator should be numbers")
    } else if (denominator === 0){
        throw new Error("denominator can't be zero!")
    }

    return numerator / denominator
}

try {
    console.log(devide(6,2))
}catch (error) {
    console.error(error.message)
} finally {
    console.log("Робота завершена")
}

try {
    console.log(devide(10,5))
}catch (error) {
    console.error(error.message)
}finally {
    console.log("Робота завершена")
}

try {
    console.log(devide(6,0))
}catch (error) {
    console.error(error.message)
}finally {
    console.log("Робота завершена")
}

try {
    console.log(devide("12",6))
}catch (error) {
    console.error(error.message)
}finally {
    console.log("Робота завершена")
}
