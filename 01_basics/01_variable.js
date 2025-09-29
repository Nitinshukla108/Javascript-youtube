
const accountId = 1254;
let account_name = "nitin";
var account_email = "nitin@09.com";

account_password = 5252;
// accountId = 90909; // not allowed because const value is fixed it will not change

account_email = "nit@89.com";
account_name = "shukla";
account_password = "78965";

let account_State;

console.log(accountId);

/*
    prefer to not use var 
    because of issue in block scope and functional scope
*/

console.table([accountId,account_email,account_name,account_password,account_State]);

// as you can see in the output that except accountId all value is changed 
