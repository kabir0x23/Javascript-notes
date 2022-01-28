//----------------------------//


// 11. Logical-Operators.
let myAge = 22;
let sum = 200;

// function shouldIgetALicense(age) {
//     if (age > 18) {
//         console.log('This person is above 18');
//         return;
//     } else {
//         if (bribe > 100) {
//             console.log('You pass');
//         } else {
//             console.log('This person is below 18');
//         }
//     }
// }

// console.log(shouldIgetALicense(233));

// 0, undefined, null, false == false
function shouldIgetALicense2(age, bribe, whitelisted) {

    if (!whitelisted) {
        console.log('This person is not whitelisted');
        return
    }

    if (age <= 18 && bribe > 100) {
        console.log('This person is above 18');
        return;
    } else if (age > 18) {
        console.log('This person is above 18');
    } else if (bribe <= 100) {
        console.log('This person is below 18');
    }
}
shouldIgetALicense2(233, 1000, false);


//----------------------------//
