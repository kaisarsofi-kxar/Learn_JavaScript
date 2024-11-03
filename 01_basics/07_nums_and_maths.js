// Numbers
const score = 400;
// console.log(score);
const balance = new Number(20)
// console.log(balance);
const otherNumber = 123.12
// console.log(typeof(balance.toString()));
// console.log(balance.toFixed(2));
// console.log(otherNumber.toPrecision(3));


const hundreds = 1000000000
// console.log(hundreds.toLocaleString()); // 1,000,000,000
// console.log(hundreds.toLocaleString('en-In')); // Indian standard  1,00,00,00,000

// ************************ Maths ***************************

console.log(Math.abs(-4));  // -ve to +ve 4
console.log(Math.round(4.32));  //==> 4
console.log(Math.ceil(4.6));  //==> 5
console.log(Math.floor(4.9));  //==> 4
console.log(Math.sqrt(4));  //==> 2
console.log(Math.min(4,5,3,2));  //==> 2
console.log(Math.max(4,5,3,2));  //==> 5


console.log(Math.random());  //==> 0-1
console.log((Math.random() * 10) + 1);  //==> 1 - 10


// to get value between max and min 
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max -min + 1)) + min);  
