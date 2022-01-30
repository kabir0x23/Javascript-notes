//----------------------------//

// 30. Promises and Fetch
// Promise is a new way to handle asynchronous operations.
// It is a way to handle asynchronous operations in a synchronous manner.

const promiseObject = fetch('data.json')
promiseObject.then(response => {
    const promiseObject2 = response.json()
    promiseObject2.then(data => {
        console.log(data)
    })
})

//----------------------------//
