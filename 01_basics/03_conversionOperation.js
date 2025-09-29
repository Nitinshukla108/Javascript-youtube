
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



// **************Operation**************

let value = 3
let negValue = -value
console.log(negValue);


console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2***2);
console.log(2%2);


let str1 = "hello"
let str2 = " nitin"
let str3 = str1 + str2
console.log(str3);


console.log("1" + 2); //12
console.log(1 + "2");  //12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32


console.log(true);  // true
console.log(+true); // 1
console.log(true+);  // error
console.log(+"");  // 0



let gameCounter = 100
gameCounter++;
console.log(gameCounter);

let gameCounter = 100
++gameCounter;
console.log(gameCounter);



