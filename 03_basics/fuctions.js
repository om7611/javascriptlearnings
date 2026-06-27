
// function saymyname(){
//  console.log("o");
// console.log("m");
// console.log("m");
// console.log("i");
// console.log("i");
// }

// // saymyname()

// // function addTwonumbers(number1,number2){
// //     console.log(number1+number2);
    
// // }
// addTwonumbers()
function loginuserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginuserMessage("omii"))
