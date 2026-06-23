function declarationTriangleArea (wigth, height) {
    if (typeof wigth !== "number" || typeof height !== "number"){
        return ("Declaration - Type of args should be number")
    }

    return wigth * height
}

const expressionTriangleArea = function (wigth, height) {
    if (typeof wigth !== "number" || typeof height !== "number"){
        return ("Expression - Type of args should be number")
    }

    return wigth * height
}

const TriangleArea = (wigth, height) => {
    if (typeof wigth !== "number" || typeof height !== "number"){
        return ("Array - Type of args should be number")
    }

    return wigth * height
}

const shortTriangleArea = (wigth, height) => wigth * height



console.log(declarationTriangleArea("awdawd", 12));
console.log(declarationTriangleArea(8,9));
console.log(expressionTriangleArea(12, "12"));
console.log(expressionTriangleArea(15, 4));
console.log(TriangleArea('1123', 'iauwd'));
console.log(TriangleArea(14,2));
console.log(shortTriangleArea("aowid", 1234));
console.log(shortTriangleArea(6,6));


