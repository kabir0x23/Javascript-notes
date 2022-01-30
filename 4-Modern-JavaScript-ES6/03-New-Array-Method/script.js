//----------------------------//

// 28. New Array Method

const friends = [
    {
        name: "x",
        age: 30,
        city: "New York"
    },
    {
        name: "y",
        age: 23,
        city: "Los Angeles"
    },
    {
        name: "z",
        age: 45,
        city: "Miami"
    },
    {
        name: "^",
        age: 18,
        city: "Paris"
    }
];


const arr = [1, 2, 3, 4, 5];
const newMappedArray_forEq = []

for (let i = 0; i < arr.length; i++) {
    const el = (arr[i]);

    newMappedArray_forEq.push(el * 2);
}


// const filteredArray = arr.filter(element => false)
// output: []

// const filteredArray = arr.filter(element => true)
// output: [1, 2, 3, 4, 5]

// const filteredArray = arr.filter(element => element < 5)
// output: [1, 2, 3, 4]

const filteredArray = friends.filter(element => element.age > 18)

const newMappedArray = arr.map(element => element * 2)
console.log(newMappedArray_forEq);
// output: [2, 4, 6, 8, 10]

const findX = friends.find(friend => friend.name === "x")
console.log(findX)
// output: { name: 'x', age: 30, city: 'New York' }

friends.forEach(friend => {
    console.log(friend)
})
arr.forEach(element => {
    console.log(element)
})



console.log(arr, filteredArray);
// output: [1, 2, 3, 4, 5] [1, 2, 3, 4, 5]

console.log(friends, filteredArray);


//----------------------------//
