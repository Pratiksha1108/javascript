const accountId =23456
let accountEmail ="pariksha@gmail.com"
var accountPassword = "123"
accountCity = "Nashik"


// accountId = 33 // not allowed 
/* prefer not to use var because of issue in block scope and functional scope
*/

accountEmail ="prati@gmail.com"
accountPassword ="654"
accountCity ="Pune"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])