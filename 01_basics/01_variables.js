const accountID = 248
let accountEmail = "imran@dev.com"
var accountPassword = "12345"
accountCity = "Dhaka"
let accountState;

// accountID = 2

accountEmail = "nazir@abc.com"
accountPassword = "67890"
accountCity = "USA"

/*
Prefer not to use var
because of issue in block scope & functional scope
*/

console.log(accountID);

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])