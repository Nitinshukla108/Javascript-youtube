
// phle dekhte hai var q use nai krna chaiye 



if(true){
    let a = 2
    const b = 3
    var c = 4
}

//console.log(a); // error
//console.log(b); // error
//console.log(c); // 4 
// to yehi problem ki ye var block scope ke aandar hone ke baad bhi bahar run ho jata haii toh islye var use nai krna chaiye


// ab samjte hai scope

let d = 400
if(true){
    let d = 20
    console.log("INNER-d:", d);
}
console.log("OUTER:d", d);


// so by that you can see the inner d is the block scope and the outer d is the global scope 