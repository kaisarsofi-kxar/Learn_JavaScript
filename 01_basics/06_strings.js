const name ="Kaisar"
const repoCount = 50

const getName = new String('hameed-ks')

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repoCount is : ${repoCount}`);


console.log(getName.length); 
console.log(getName.charAt(2)); 
console.log(getName.indexOf('t'));

const newString = getName.substring(0,4) // (start, end) // end not included
const anotherString = getName.slice(-3, 4) // -3 start from back thirdlast character


const newString1 = "     hitesh.  ";
const trimedString = newString1.trim() // without whitespace

console.log(newString.replace('.', '-'))

//include 

console.log(getName.split('-'));


