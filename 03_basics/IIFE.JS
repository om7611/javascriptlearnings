// Immediately Invoked Fuction Expression(IIFE)
// 1. Avoid polluting the global scope

// function chai(){
//     console.log(`db connected `);
    

// }
// chai()
(function () {
  let message = "Private";
  console.log(message);
})();

console.log(message); 
// Variables declared inside the IIFE are not accessible outside it.
 const counter = (function () {
  let count = 0;

  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
  };
})();
// Useful when you want to use await without creating a named function.
// Running setup code immediately.
// Creating isolated scopes.
// Using await in scripts that aren't modules.
// for ending iifi the semicoln is very important