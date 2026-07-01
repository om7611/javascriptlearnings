// if statment

// // < =lessthan,>greaterthan,<=
// | Operator | Description                                   | Example     | Result  |
// | -------- | --------------------------------------------- | ----------- | ------- |
// | `==`     | Equal (compares values after type conversion) | `5 == "5"`  | `true`  |
// | `===`    | Strict equal (compares value and type)        | `5 === "5"` | `false` |
// | `!=`     | Not equal                                     | `5 != "5"`  | `false` |
// | `!==`    | Strict not equal                              | `5 !== "5"` | `true`  |
// | `>`      | Greater than                                  | `10 > 5`    | `true`  |
// | `<`      | Less than                                     | `5 < 10`    | `true`  |
// | `>=`     | Greater than or equal to                      | `10 >= 10`  | `true`  |
// | `<=`     | Less than or equal to                         | `5 <= 10`   | `true`  |
const isUserloggedin = true
// if(isUserloggedin){

// }
const usserloggedin = true
const debitcard = true
const loggedinfromemail=true
const loggedInfromgoggle =false

if(usserloggedin && debitcard  && 2==2){
    console.log("allow to buy course");
    
}
if(loggedInfromgoggle || loggedinfromemail){
    console.log("user logged in");
    
}