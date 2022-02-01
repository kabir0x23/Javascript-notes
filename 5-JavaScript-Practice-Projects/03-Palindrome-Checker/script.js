// 03 - Palindrome Checker


function palindrome(str) {

    str = str.toLowerCase();  //Turn everything to lower case
    // Remove all alphanumeric characters.
    str = str.replace(/[^a-z0-9]/g, '');  let backward = str.split('');
    backward = backward.reverse().join('').toString();

    return backward === str;
}

console.log(palindrome('eye'));
console.log(palindrome('racEcar'));
console.log(palindrome('RaceCar'));
console.log(palindrome('race CAR'));
console.log(palindrome('2A3*3a2'));
console.log(palindrome('2A3 3a2'));
console.log(palindrome('2_A3*3#A2'));


//----------------------------//
