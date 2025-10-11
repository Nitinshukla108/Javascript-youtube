
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




// nested scope

function one(){
    const username = "nitin"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    two()
}
one()

// by this example you can see parent function, child function ki value access nahi kr pa raha hai pr child fucntion parent function ki value access kr raha haii



if(true){
    const userName = "nit"
    if(userName === "nit"){
        const webSite = " youtube"
        console.log(userName + webSite);
    }
    //console.log(webSite);   
}
//console.log(userName);

// same thing happend here too




// +++++++++ interesting ++++++++++


console.log(addOne(5));

function addOne(num){
    return num + 2
}


console.log(addTwo(5));

const addTwo = function(num){
    return num + 2
}


// to dekha apne dono me difference ek me error throw hua aur ek me nahii 
// to ye differences hai aagar hum aalg tarike se function declare kare toh

// and isko bolte hai hoisting ki funciton kaha rkha jata haii etc etc ....