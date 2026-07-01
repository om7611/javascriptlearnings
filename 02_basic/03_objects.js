//  singleton 

// object literals
const mysym =  Symbol("key1")

const jsuser ={
    name: "omii",
    fullname :"omprasad sanjay mane",
    [mysym] : "key1",
    age:21,
    location:"latur",
    email:"omii@",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["fullname"]);
// console.log(jsuser[mysym]);

jsuser.email = "omiy@.com"
// Object.freeze(jsuser)
jsuser.email = "omiichatgpt@.com"
console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello js users ");
    
}
console.log(jsuser.greeting());



