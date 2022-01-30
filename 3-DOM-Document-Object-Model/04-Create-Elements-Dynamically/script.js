//----------------------------//
// 22. Create Elements Dynamically

const increment = document.querySelector('#increment');
const decrement = document.querySelector('#decrement');
const counterEl = document.getElementById('counter');

const ulElement = document.getElementById('list-items');

let counter = 0;

function incrementCounter() {
    counter++
    counterEl.innerText = counter

    // create an element
    const li = document.createElement('li');
    const b = document.createElement('b');

    const textNode = document.createTextNode('Sentence ');
    b.appendChild(textNode);

    const textNode2 = document.createTextNode(counter);
    li.appendChild(b);
    li.appendChild(textNode2);

    // or this shortcut, but can't add event listener with this method
    // const li = document.createElement('li');
    // li.innerHTML = '<b>Sentence </b>' + counter;

    // append that element
    ulElement.appendChild(li);


}

function decrementCounter() {
    counter--
    counterEl.innerText = counter
    ulElement.removeChild(ulElement.lastChild);
}

increment.addEventListener('click', incrementCounter)
decrement.addEventListener('click', decrementCounter)

//----------------------------//
