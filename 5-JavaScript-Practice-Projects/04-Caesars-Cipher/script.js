// 04 - Caesars Cipher


let lookup = {
    'A': 'N','B': 'O','C': 'P','D': 'Q',
    'E': 'R','F': 'S','G': 'T','H': 'U',
    'I': 'V','J': 'W','K': 'X','L': 'Y',
    'M': 'Z','N': 'A','O': 'B','P': 'C',
    'Q': 'D','R': 'E','S': 'F','T': 'G',
    'U': 'H','V': 'I','W': 'J','X': 'K',
    'Y': 'L','Z': 'M'
};

function rot13(encodedStr) {
    let codeArr = encodedStr.split("");  // String to Array
    let decodedArr = []; // Your Result goes here
    // Only change code below this line

    decodedArr = codeArr.map(function(letter) {
        if(lookup.hasOwnProperty(letter)) {
            letter = lookup[letter];
        }
        return letter;
    });

    // Only change code above this line
    return decodedArr.join(""); // Array to String
}


console.log(rot13("SERR CVMMN!"))

//----------------------------//
