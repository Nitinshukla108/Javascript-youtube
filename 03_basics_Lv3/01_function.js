// syntax
function sayMyName(){
    console.log("Nitin");
}
sayMyName();


// adding two number

// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNumber() // output Nan
// addTwoNumber(2,3) // output 5
// addTwoNumber(2,"3")  // output 23
// addTwoNumber(2,null) // 2


// return

function addTwoNumber(num1,num2){
    return num1 + num2
    console.log("hello"); // ye kabhi print nahi hoga qki ye rule hai ki return ke baad kuch aur print krna chaye to vo print nahi hota
    
}
const result = addTwoNumber(2,3)
console.log(result);
// jab hum return use krege tb hi hum variable me value store kr skte hai



function loggedInUser(username){
    return `${username} just loggedIn`
}

console.log(loggedInUser("Nitin"));
// what if koi value hi pass nahi hui hoti toh 
console.log(loggedInUser()); // undefinder just loggedIn
// to yehi sab problem solve krne ke liye hum use krte hai if else function ke aandar

function logged(userName){
    if(userName === undefined){
        console.log("Please Enter your Username");
        return  
    }
    return `${userName} just logged`
}
console.log(logged());

// userName === undefined ye sahi to haii but professionally log use krte hai iske jaga 
// !userName


// and sab kuch avoid krne ke liye hum chaye toh default value phle se hi pass kr skte hai parameter me hi 
// like userName = "sam" toh user value nahi pass krega toh default value uski sam ho jayega and aagar value pass krega toh over-write ho jayegi value.




// ab dekhte hai aagar user value ek se jada pass kre toh usse kaise handle kre hum

// for that hum use krte rest(...) or ha hum isse spread bhi bolte hai pr dono ko aalg aalg use krte hai
function shoppingCart(...device){
    return device
}
console.log(shoppingCart(1,2,3,4));



// ab dekhte hai aagar object ko function me kaise pass kia jata hai aur kaise use kia jata hai 

const user = {
    userID:1,
    userName:"nitin"
}
function handleObject(anyObject){
    return `${anyObject.userID} is my ID and my user name is ${anyObject.userName}`
}
// console.log(handleObject(user))
console.log({
    userID:2,
    userName:"shukla"
});
                     
// iska ye mtlb hai ki hum object badme bhi create kr skte haii



// ab same dekhte hai array ke liye 

const myArray = [100,200,300,400]
function findNumberTwo(numberTwo){
    return `${numberTwo[1]}`
}
console.log(findNumberTwo(myArray))
console.log(findNumberTwo([200,600,400,500]))

// by that we can see ki hum array bhi badme create kr skte hai jaruri nahi hai ki phle hi banaye