//----------------------------//

// 18. Variable Shadowing

// Shadowing is the process of creating a variable with the same name as a variable in a parent scope.

const myAge = 30;

function myFunction() {
  const myAge = 40;
  console.log(myAge);
}

myFunction();


//----------------------------//
