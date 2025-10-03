
// array 

let myArray = [23,45,87,98,78];
console.log(myArray);

// other way to create the array

let newArray = new Array(23,45,87,98,78)
console.log(newArray);

// you can use different-different datatype values in one array also okay na....

console.log(newArray[3]);

console.log(typeof newArray);
// console.log(newArray.push(90));


// Array Methods

newArray.push(90) // add number in end
newArray.pop() // remove number from end


newArray.unshift(77) // its add number in start but by this load will increase in computer and its a time consuming

newArray.shift() // its remove the starting number

console.log(newArray);

let otherArray = [9,98,56,34,1,90]
console.log(otherArray.includes(98));
console.log(otherArray.includes(8));
// basically its check the number is in our array or not.

console.log(otherArray.indexOf(1));



let anotherArray = otherArray.join()
console.log(anotherArray);
console.log(typeof anotherArray);
// by using join its changes into the string datatype



// slice and splice 

let CreatedArray = [99,22,33,44,55,66]
console.log("A ", CreatedArray );

const myArrayn1 = CreatedArray.slice(1,3)
console.log(myArrayn1);
console.log("C", CreatedArray);

const myArrayn2 = CreatedArray.splice(1,3)

console.log(myArrayn2);
console.log("C", CreatedArray);

// as you can see the difference between the slice and splice is that 
// 01 - is splice is include range number and slice not include the range number.
// 02 - splice is also manipulate the array but slice will not manipulate the array.