//----------------------------//

// 27. Arrow Functions
// These are the new feature in ES6.
// They are a shorter syntax for writing function expressions.
// They are also a new way to write functions.


// javaScript hoists all the function declaration to the top of the file.
// do not do in the cases of arrows functions
normalFunction()
function normalFunction() {
    return 1
}
normalFunction()

// can not access arrow function before it is declared
// arrowFunction()
const arrowFunction = () => 2
console.log(arrowFunction())

const btn = document.getElementById('increment')

btn.addEventListener('click', () => {
    console.log('clicked')
})

//----------------------------//
