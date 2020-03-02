//Given an integral number, determine if it's a square number
// Examples
// isSquare(-1) returns  false
// isSquare(0) returns   true
// isSquare(3) returns   false
// isSquare(4) returns   true
// isSquare(25) returns  true  
// isSquare(26) returns  false

let n = 27;
let isSquare = (Math.sqrt(n) % 1 === 0) ? true : false;

console.log(isSquare);

//this is the equivalent of:

let isSquareSecond = function (n) {
    if (Math.sqrt(n) % 1 === 0) { return true; }
    else { return false; }
}
console.log(isSquareSecond(25));