// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);  // true
// console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true. here == and >= works differently in >= null is converted to 0 that is why true

/// strick check ===
console.log("2" === 2); // false no conversion, check both datatype and value
