const accountId = 144553;
let accountEmail= "aksay@gmail.com";
var accountPassword = "12345"
accountCity = " Bhopal"
 let accountState;

// accountId = 2  // not allowed
accountEmail =" ghodki@.com"
accountPassword = "45678"
accountCity = "Bengluru"
console.log(accountId);
/*  
praffered to not use var because
of issue in block scope and funsctional scope
*/
console.table([accountEmail, accountId , accountPassword , accountCity,accountState])