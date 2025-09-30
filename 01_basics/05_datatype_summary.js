// Data types - primitive and non-primitive(reference)

// primitive - number, string, boolean, null, undefined, symbol, bigInt 
// Non-primitve(reference) - array, object, function


// primitive
const score = 100; // typeof is number 
const scoreValue = 100.3; // typeof is number
// console.log(typeof scoreValue);

const isLoggedIn = false; //typeof is boolean
const value = null; // typeof is object
let userEmail; // typeof undefined
const bigNumber = 7854785266952366n; // typeof is bigInt
console.log(typeof(bigNumber)); // typeof is bigint

const id = Symbol('132'); // typeof is symbol
const anotherId = Symbol('123');
// you can see that value is same but its unique because of symbol
console.log(id === anotherId);


// non-primitive(Reference)
const hero = ["shaktiman","krish","naga"]; // array - its typeof is object 
let myObj = {
    name:"nitin",
    age: 22,
}  // object -  its typeof is also object 

let myFunction = function(){
    console.log("hello dude");
    
} // function - its typeof is the obejct-function
