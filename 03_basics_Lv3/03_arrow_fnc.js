
// first we will know about the "this"

const one = {
    username: "nitin",
    age : 22,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome here `)
    }
}
one.welcomeMessage()
one.username = "shukla"
one.welcomeMessage()

// toh dekha apne this ke use hume current context milta hai 

console.log(this);   // output - {}  ye hum node environment kr rahe hai islye aarha hai aagar console me krte toh "window" aata 




function chai(){
    console.log(this);   
}
chai()

// toh dekha apne function ke aandar sirf this use kia toh kitna kuch dekhne ko mil raha hai output me 


function chai(){
    const userName = "nit"
    console.log(this.userName); // toh ye output dega undefined qki funciton ke aandar ye work nai krta   
}
chai()





// ARROW function 

const addTwo = (num1,num2) => {return num1 + num2}
console.log(addTwo(2,3));


// IMPLICIT RETURN 
//  mtlb ki hume {} ye use nai krna hota hai aur na return 
const addTWo = (num1,num2) =>  num1 + num2
console.log(addTWo(2,3));



const addTWO = (num1,num2) =>  (num1 + num2)
console.log(addTWO(2,3));

