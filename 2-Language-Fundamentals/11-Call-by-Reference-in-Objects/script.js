//----------------------------//

// 17. Call by Reference in Objects.
// Call by reference is when you pass a reference to a variable.

const myProfile = {
  name: 'John',
  age: 30
}

const secondProfile = {
  name: 'Johnathan',
  age: 42
}

function primitiveMutate(primitive) {
  primitive++ // primitive is a copy of the original value
  console.log(primitive);
}

function mutate(obj) {
  console.log(obj.age);
}
// obj
mutate(secondProfile)

// primitive
let num = 100
primitiveMutate(num) // in scope value
console.log(num)
//----------------------------//
