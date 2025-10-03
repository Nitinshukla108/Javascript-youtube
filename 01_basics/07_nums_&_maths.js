
const score = 900
console.log(score);

const balance = new Number(40)
console.log(balance);

// you can see that both have the different output 
// the second is the perfect way to do define.

// in the console you can see the many of the prototype of the maths as same as the string which we saw previously

console.log(balance.toString());
// here we convert the number into string
console.log(balance.toString().length);

console.log(balance.toFixed(4));
console.log(balance);

const otherNumber = 90.98
console.log(otherNumber.toPrecision(2));
console.log(otherNumber.toPrecision(1));
// you can see the problem in the output. so you use it less as much as you can

const thousands = 1000000
console.log(thousands.toLocaleString());
console.log(thousands.toLocaleString(`en-In`));


// -------------------MATHS----------------

console.log(Math);
console.log(Math.abs(-9)); // by abs youo can convert the negative value into positive

console.log(Math.round(5.5));
console.log(Math.ceil(5.6));
console.log(Math.floor(5.6));
console.log(Math.min(3,3,4,5,6,7,8));
console.log(Math.max(3,3,4,5,6,7,8));


console.log(Math.random()); // by the only use of random function you can only get the number between the 0 and 1.

console.log(Math.random()*10);// by this you can get the number between 1 to 10
console.log(Math.random()*10 + 1);// by this we cant get 0

console.log(Math.random()*100);


// and if you specifically want number between the some number 
const min = 40
const max = 60
console.log(Math.random() * ((max - min) + 1) + min);

// if we want number in the normal form not in the float value 

console.log(Math.floor(Math.random() * ((max - min) + 1) + min)); // we can you round and ceil also in the place of floor 






