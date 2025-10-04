// singleton
// object.create - constructor method through
// dekho jab hum "object.create" ka use krke object banate hai mtlb ki constructor se banta hai toh singleton ban jata hai



// object literals

const mySymbol = Symbol("key1"); // ye hum symbol wale ke liye bana rhe jo ki h interview quesion.

const Jsuser = {
    name:"nitin",    // ye jo name likha hai na ye key hai and key bydefault string ke form me hi hota hai
    age:22,
    "surname mera" : "shukla",
    [mySymbol] : "mykey1",
    location:"surat",
    email: "nitin@google.com",
    isLoggedIn:false,
    lastLoggedIn:["monday","saturday"]
}

console.log(Jsuser.name);
// this is the right many times when there is the key is like "name" then this form will not work 
// lets see the example of it create one more key and value
// console.log(Jsuser.surname mera); // dekha error aaya na
console.log(Jsuser["surname mera"]); // ab aaya na output so, try to use this form widely 



// ab dekhte hai symbol ho to kaise krte hai and ye ek important interview question bhi haii jo ki interview me puchte hai 
// ki symbol ko kaise dekhte hai object me and uska datatype bhi symbol kaise late hai 
// symbol lo aur usko key me add krke dikhao ye hai question

// phle symbol create kie "const mySymbol = Symbol("key1")"
// object ke andar likhege [mySymbol] = "mykey1"
// ho jayega symbol ap datatype bhi check krke dekh skte ho symbol hi show hoga

console.log(Jsuser[mySymbol]);
console.log(Jsuser); // isse dekh skte hai ap ki output me dikh raha hai symbol likha 


// aab agar hum changes krna hoon toh
Jsuser.email = "shukla@google.com"// isse change ho jayega email 

// and ab agar hume rok dena hai ki data change nahi kr sake to hum use krege freeze 

// Object.freeze(Jsuser);
Jsuser.email = "ns@microsoft.com"
console.log(Jsuser);
// dekha apne shukla mene change kia tha hogya but freeze lagane ke baad jo change kia tha vo change nahi hua because of freeze


// isse phle freeze ko comment kr do warna change nahi hoga kuch
// ab agar hume object me function dalna hoto 

Jsuser.address = function(){
    console.log("hello js user");
}
console.log(Jsuser.address());

// aab agar hume koi object me kisi ko use krna hoto
Jsuser.nameTwo = function(){
    console.log(`hello js user ${this.name}`);
}
console.log(Jsuser.nameTwo());

