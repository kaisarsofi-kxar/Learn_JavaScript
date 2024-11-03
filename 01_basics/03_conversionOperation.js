let score = "123"
let value  = null;
let val = undefined;


let scoreInNumber = Number(score)  
let valueInNumber = Number(value)  
let valInNumber = Number(undefined)  

console.log(typeof scoreInNumber); // it will give number
console.log(scoreInNumber); // it will give NaN

console.log(typeof valueInNumber); // it will give number
console.log(valueInNumber); // it will give 0

console.log(typeof valInNumber); // it will give number
console.log(valInNumber); // it will give NaN

// "33" => 33
// "33asss" => NaN
// null => 0
// undefined => NaN
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

// 1 => true; 0 => false
// "" => false
// "kaisar" => true

let someNumber = 33

let StringNumber = String(someNumber)

// StringNumber => String; value => 33



