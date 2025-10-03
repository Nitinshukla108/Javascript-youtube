
// Dates

let mydate = new Date();
console.log(mydate);
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());

// lets check the typeof Date

console.log(typeof mydate);


// lets create our own date 
let createdDate = new Date(2025,09,4)
console.log(createdDate);
console.log(createdDate.toLocaleDateString());

let createdDateTime = new Date(2025,09,4,8,9)
console.log(createdDateTime.toLocaleString());

let myCreatedDate = new Date("09-03-2025")
console.log(myCreatedDate.toLocaleString());

// time

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Date.now()); // isse aaj ki date aagai joh ki count hota hai 1 january 1970 se 
// ab agar hume seconds me chaiye toh divide by 1000
console.log(Math.floor(Date.now()/1000));




let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1); // use + 1 because its count from 0 means 0 = january but user are not friendly with this thats why use +1
console.log(newDate.getFullYear());



console.log(newDate.toLocaleString('default',{
    weekday:"long",
    day:"2-digit",
    hour:"2-digit",
    era:"long",
    dayPeriod:"long",
    minute:"2-digit"
}))