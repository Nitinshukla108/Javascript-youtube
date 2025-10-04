
const bollywood = ["hrithik","vicky","manoj"]
const tollywood = ["rajnikant","prabhas","rishabh"]

// bollywood.push(tollywood);
// console.log(bollywood);
// as we see array ke andar array ban raha hai 

const hero = bollywood.concat(tollywood);
console.log(hero);
// here its give only one array 



// lets see the other method to do this which is use widely because here we can add the more 2 array at a time -- spread method
const all_heros = [...bollywood,...tollywood]
console.log(all_heros);



const numbers = [1,2,3,[4,5,6,[7,8,9,[1,2,3]]]]
console.log(numbers.flat(Infinity));
// you can see humne sabko ek array me daal dia easily with the use of flat


console.log(Array.isArray("nitinShukla"));// idhar humne check kia ki ye array hai?

console.log(Array.from("nitinShukla")); // isme humne string ko array me convert kr dia easily 

console.log(Array.from({name:"nitin"})); // interesting and interview question ye ky krta hai ki emptry array de deta hai qki ye sochta hai ki phle key convert kru ya value.

console.log(Array.of("nitinshukla"));



// ab dekhte hai ki aagar multiple hoo usko array me kaise convert kre
const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1,score2,score3));
// console.log(Array.from(score1,score2,score3));