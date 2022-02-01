//----------------------------//

// 01 - Telephone Number Validator

function telephoneCheck(str) {
    const format = /(?:(\+1)[ -])?\(?(?<areaCode>\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})/gm
    return format.test(str);
}

telephoneCheck("555-555-5555");
// console.log(telephoneCheck("555-555-5555"));
// console.log(telephoneCheck("555-555-5555"));
// console.log(telephoneCheck("(555)555-5555"));
// console.log(telephoneCheck("(555) 555-5555"));
// console.log(telephoneCheck("555 555 5555"));
// console.log(telephoneCheck("5555555555"));
// console.log(telephoneCheck("1 555 555 5555"));
// console.log(telephoneCheck("1 555)555-5555"));
//----------------------------//


function telephoneCheck2(str) {

    // Don't be afraid! learn about "regular expressions" before attempting this challenge.
    const format0z = /(?:(\+1)[ -])?\(?(?<areaCode>\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})/gm

    const format0 = /^\d{10}$/
    const format1 = /^\d{3}\-\d{3}\-\d{4}$/
    const format2 = /^\(\d{3}\)\d{3}\-\d{4}$/
    const format3 = /^\(\d{3}\) \d{3}\-\d{4}$/
    const format4 = /^\d{3} \d{3} \d{4}$/
    const format5 = /^1 \d{3} \d{3} \d{4}$/
    const format6 = /^1 \(\d{3}\) \d{3}\-\d{4}$/
    const format7 = /^1\(\d{3}\)\d{3}\-\d{4}$/
    const format8 = /^1 \d{3}\-\d{3}\-\d{4}$/

    return format0.test(str) || format1.test(str) || format2.test(str) || format3.test(str) || format4.test(str) || format5.test(str) || format6.test(str) || format7.test(str) || format8.test(str)
}

console.log(telephoneCheck2("555-555-5555"));
console.log(telephoneCheck2("555-555-5555"));
console.log(telephoneCheck2("(555)555-5555"));
console.log(telephoneCheck2("(555) 555-5555"));
console.log(telephoneCheck2("555 555 5555"));
console.log(telephoneCheck2("5555555555"));
console.log(telephoneCheck2("1 555 555 5555"));
console.log(telephoneCheck2("1 (555) 555-5555"));




