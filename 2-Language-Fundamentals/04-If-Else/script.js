//----------------------------//


// 10. If-Else.
let myAge = 22;
let sum = 200;

function shouldIgetALicense(age) {
    if (age > 18) {
      console.log("Age is", age)
    return true;
  } else {
    return false;
  }
}

console.log(shouldIgetALicense(233));

// calculator
function performMath(number1, op, number2) {
    if (op == '+') {
        result = number1 + number2
    }
    if (op == '-') {
        result = number1 - number2
    }
    if (op == '*') {
        result = number1 * number2
    }
    if (op == '/') {
        result = number1 / number2
    }
    if (op == '%') {
        result = number1 % number2
    }

    return result
}
console.log(performMath(55, '+', 33));
console.log(performMath(55, '-', 33));
console.log(performMath(55, '*', 33));
console.log(performMath(55, '/', 33));
console.log(performMath(55, '%', 33));


//----------------------------//
