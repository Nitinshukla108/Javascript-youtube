
// this is the best conversion to use in the programming 
// console.log(2 == 2);
// console.log(2 >= 2);
// console.log(2 > 2);
// console.log(2 >= 2);
// console.log(2 != 2);


// ye hota hai qki ye datatype change kr de raha haii
// console.log("2" > 1);
// console.log("02" > 1);


// this all comparison we have to avoid its a inconsistency
console.log(null > 0);
console.log(null <= 0);  // this behave differently in the js <= convert the null value into zero.
console.log(null == 0);

console.log(undefined < 0);
console.log(undefined > 0);
console.log(undefined == 0);


// strict comparison ===
console.log("2" === 0); // its check the data type also and do not convert the data type 
