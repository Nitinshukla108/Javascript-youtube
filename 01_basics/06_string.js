
const name = "NitinShukla";
const num = 12;

// try to avoid this type of code 
console.log(name + num + "value");

// do this type of code 
console.log(`hello my name is ${name} and my age is ${num}`);



// let do the best method to create the string 
// and by this we can use the prototype of string which will very usefull in the code to do the many thing's
// and if you want to see the types of prototype then run it on the console there you can able to see the many types of the prototype's
const myName = new String ("NitinShukla");
console.log(myName);

// let's use the some prototype's
console.log(myName[1]);

console.log(myName.length);
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

console.log(myName.charAt(5)); // ye bata tha hai ki konse index pe konsa alphabet hai

console.log(myName.indexOf('t')); // isse position pata chlega jo letter likha hai uska


console.log(myName.includes('t')); // ye bata tha hai ki jo albhabet humne likha hai include me vo hamare me exist krta hai ki nahi 
console.log(myName.includes('z'));

const gameName = new String("   bgmi  ");
console.log(gameName.trim());// by this hum space hata skte hai

console.log(myName.substring(0,7)); // isse hum jo index dete hai utna hi letter aate hai 

const newString = myName.slice(-11,4); // slice me hum minus bhi use kr skte hai and substring me hum vo use nahi kr skte hai ye ek main difference bhi hai substring aur slice ke bich
console.log(newString);


console.log(myName.replace('Nit','--'));// isse hum replace krte haii jisko hum krna chae usse 


// split se hum cheeje split kr skte haiii 
const anotherString = new String('Nitin-Shukla-R')
console.log(anotherString.split('-'));


