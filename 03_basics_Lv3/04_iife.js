// Immediately Invoked Function Expression (IIFE)


(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})();

// ; ye use krna jaruri jab do iife use krege tb aur normally bhi use krna chaiye 


( () => {
    console.log(`DB CONNECTED TWO`);
} )();


( (user) => {
    console.log(`${user} DB CONNECTED WITH YOU`);
} )("Nitin");