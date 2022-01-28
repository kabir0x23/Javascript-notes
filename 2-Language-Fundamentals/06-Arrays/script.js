//----------------------------//


// 12. Arrays.
let myFriends = []
let sum = 200;

function addMyFriends(friend) {
    // arrays are ordered
    // push adds the element at the end
    // myFriends.push(friend)
    // unshift adds the element at the beginning
    myFriends.unshift(friend);
    console.log(myFriends)
}

addMyFriends('John')
addMyFriends('Mary')
addMyFriends('Peter')
addMyFriends('Sue')

console.log(myFriends[1])
console.log(myFriends.length);

// remove last item from array
myFriends.pop()
console.log(myFriends)


//----------------------------//
