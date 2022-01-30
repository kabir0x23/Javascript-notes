//----------------------------//

// 29. Template literals
// These are string literals allowing embedded expressions.

const aboutMe = 'This is me.\
\nI am a web developer.\
\nI like to code.'
console.log(aboutMe);

const aboutMeLatest = `This is me.
I am a web developer.
I like to code.`

//----------------------------//

const person = {
  name: 'John',
  age: 30,
  job: 'developer',
  city: 'New York',
  hobbies: ['music', 'sports'],
}
console.log(" ");
const aboutMe1 = 'This is ' + person.name + ' ' + person.age + ' ' + person.job + ' ' + person.city + ' ' + person.hobbies[0] + ' ' + person.hobbies[1]

console.log(aboutMe1);

console.log(" ");

const aboutMe2 = `My name is ${person.name}.
I am ${person.age}.
I am a ${person.job}.
I live in ${person.city}.
My hobbies are ${person.hobbies[0]} and ${person.hobbies[1]}.`

console.log(aboutMe2);
//----------------------------//
