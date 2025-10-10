
// const tinder = new Object();  -- singleton object
const tinder = {} // -- non-singleton object
// hum iss dono way se object create kr skte hai and dono ka output bhi same aayega bas difference ye hai ki ek singleton object hai aur ek non-singleton object hai 
console.log(tinder);

tinder.id =23;
tinder.name = "nit"
tinder.gender = "male"
tinder.isLoggedIn = false
console.log(tinder);


// hum dekhege object ke aandar object 

const regularUser = {
    id:23,
    fullName:{
        userFullName:{
            firstName: "nitin",
            lastName:"shukla"
        }
    }
}

console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName.firstName);


// hum dekhte hai two or more than two object ko ek sth kaise jode

const user01 = {1:"as",2:"sd"}
const user02 = {3:"ol",4:"ok"}

// method-01 using assign
const user03 = Object.assign({} ,user01,user02)
console.log(user03);

// method - 02 using spread
const user04 = {...user01,...user02}
console.log(user04);



// jab data hume database se aaye tb 

const user = [
    {
        id:1,
        name:"nit"
    },
    {
        id:4,
        name:"tin"
    },
    {
        id:2,
        name:"in"
    },
    {
        id:3,
        name:"ni"
    },
]

console.log(user[1].id);



// ab chaliye kuch interesting cheeje dekhte hai 

console.log(tinder);

console.log(Object.keys(tinder));
// interesting cheej ye hai ki output hume array datatype me mila hai 
console.log(Object.values(tinder));
console.log(Object.entries(tinder));


console.log(tinder.hasOwnProperty('gender'));
console.log(tinder.hasOwnProperty('isLogged'));
