//----------------------------//

// 25. Destructuring
// ES6 / ES2015 introduces the new syntax for destructuring arrays and objects.
// Destructuring is a new way to extract data from arrays and objects.

// destructuring between Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3)

const arr4 = [{
    name: 'kabir'
}];
const arr5 = [{
    name: 'sahil'
}];
const arr6 = [...arr4, ...arr5];
console.log(arr6)

// destructuring between objects

const KEYNAME1 = 'Developer + hacker';
const KEYNAME2 = 'Developer + hacker';
const obj1 = {
    name1: 'kabir',
    age1: 21,
    KEYNAME1
};

const obj2 = {
    name2: 'sahil',
    age2: 20,
    KEYNAME2,
};

const obj3 = {
    ...obj1,
    // obj2 will overwrite obj1 name property value,
    // if both properties having same name like name, name
    ...obj2
};

console.log(obj3);

//----------------------------//
