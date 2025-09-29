
// conversion operation 

let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let ValueInNumber = Number(score);
console.log(typeof ValueInNumber);
console.log(ValueInNumber);

// NaN => not an number
// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1 false=> 0



let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true 0=> false
// "" => false
// "nitin" => true


let someNumber = 33

let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);

