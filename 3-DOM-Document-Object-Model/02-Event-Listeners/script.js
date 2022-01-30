//----------------------------//


// 21. Event Listeners

const increment = document.querySelector('#increment');
const decrement = document.querySelector('#decrement');
const counterEl = document.getElementById('counter');
let counter = 0;

function incrementCounter() {
    counter++
    counterEl.innerText = counter
}

function decrementCounter() {
    counter--
    counterEl.innerText = counter
}

increment.addEventListener('click', incrementCounter)
decrement.addEventListener('click', decrementCounter)

//----------------------------//
