//----------------------------//


// 14. break vs continue vs return.

// let oddNumbers = []

function skipNumber(number) {
  let evenNumbers = [];

  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 1) {
      continue;
    }
    if (i === number) {
      continue;
    }
    evenNumbers.push(i);
  }
  return evenNumbers;
}

console.log(skipNumber(10));
console.log(skipNumber(2));

function breakNumber(number) {
  let evenNumbers = [];

  for (let i = 0; i <= 20; i++) {
    if (i === number) {
      break;
    }
    evenNumbers.push(i);
  }
  return evenNumbers;
}
console.log(breakNumber(10));

function breakNumber(number) {
  let evenNumbers = [];

  for (let i = 0; i <= 20; i++) {
    if (i === number) {
      return evenNumbers;
    }
    evenNumbers.push(i);
  }
  return evenNumbers;
} 
console.log(breakNumber(10));


//----------------------------//
