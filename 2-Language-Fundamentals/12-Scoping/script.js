//----------------------------//

// 18. Scoping example

// Scoping is the process of determining the accessibility of variables and functions.
// In JavaScript, there are two scopes: global and local.
// Global scope is the scope that is outside of all functions.
// Local scope is the scope that is inside of a function.
// Global scope is accessible everywhere, and local scope is only accessible inside of a function.
const a = 'Hello World!'
// a is accessible in global scope

function x() {
  // scope of hello is local
  const hello = 'world';
  
  if (true) {
    // scope of hello is local
    console.log(hello);
  }
  console.log(hello);

  for (let i = 0; i < 10; i++) {
    // scope of i is local
    console.log(i);
  }
  console.log(i);
  // scope of i is local to the for loop and is not accessible outside of it      

}

console.log(hello); //undefined
x();

//----------------------------//
