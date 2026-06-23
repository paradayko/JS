const checkOrder = (available, ordered) => {
    if (typeof available !== "number" || typeof ordered !== "number"){
        return "Data should be number"
    }
    else if (available < ordered){
        return "Your order is too large, we don't have enough goods."
    } else if (ordered === 0){
        return "Your order is empty"
    } else {
        return "Your order is accepted"
    }
}

console.log(checkOrder(15,20))
console.log(checkOrder(15,0))
console.log(checkOrder(25,20))
console.log(checkOrder(20,20))