// const user ={
//     username: "omii",
//     price:999,
//     welcomemessage: function(){
//         console.log(`${this.username},WELCOME TO WEBSITE`);
        
//     }
// }

// user.welcomemessage()
// user.username ="sam"
// user.welcomemessage()

// console.log(this);
// function chai(){
//     let username = "omii"
//     console.log(this);
    
// }
// chai()

// ********* */ arrow fuction/***** */
const chai = () =>{
    let username = "omii"
    console.log(this.username);
    
}
// chai()
const addTwo = (num1,num2)=>{
    return num1 + num2
}
// console.log(addTwo(3,4));

const addTwo = (num1,num2)=> num1+num2 //implicit return
console.log(addTwo(3,4));