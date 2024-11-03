// Primitive data types
// call by value means what ever we change we are given copy and value ae changed in copy
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// dynamic typed

// symbol
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId); // false because it gives unique value to both


// Reference type. non primitive  memory meh reference allocate kiya jaye ga
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj ={
   name: 'kaisar',
   age:  22
}

const myFunction = function(){
    console.log("Hello world!"); 
}


// ************************ Memory

// Stack(Primitive) => change kro ge to copy meh hoga  ## Heap (Non-Primitive) change in original


let myName = 'kaisar'
let anoherName = myName; // kaisar
// console.log(anoherName);  // kaisar
anoherName = 'hameed'
// console.log(myName); // kaisar
// console.log(anoherName); // hameed. change only in copy

// just change in copy 

let userOne = {
    name : 'kaisar',
    age : 22
}

let userTwo = userOne;  //
userTwo.name = 'hameed' ;

console.log(userOne.name); // hameed
console.log(userTwo.name); // hameed



