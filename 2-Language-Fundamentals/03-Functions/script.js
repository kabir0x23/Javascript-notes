//----------------------------//


// 7. Functions. 

let myAge = 22;
myAge ++
console.log(myAge)
// O/P> 23

// function 
function makeConsoleLog() {
    console.log('My age is ', myAge)
}

makeConsoleLog()
// O/P> My age is 23


//----------------------------//


// 8. Functions Parameter.

function addsToMyAge(incrementBy) {
    myAge = myAge + incrementBy;
}

addsToMyAge(5);
console.log(myAge)
// O/P> My age is 33


//----------------------------//


// 9. Return statements in Functions.

function addsToMyAge(incrementBy, multiplyBy) {
    return (myAge + incrementBy) * multiplyBy;
    // after the return statement no statment extecute, myAge += 500 won't execute
    myAge += 500
}

myNewAge = addsToMyAge(5, 6);

console.log(myAge, myNewAge)
// O/P> My age is 23 168


//----------------------------//
