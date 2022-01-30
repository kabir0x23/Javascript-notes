//----------------------------//

// 24. Change CSS Styles

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
    li.setAttribute('data-counter', counter);

    // without using css
    if(counter % 2 === 0) {
        li.style.background = 'cornflowerblue';
        li.style.padding = '10px';
    } else{
        li.style.background = 'dimgrey';
        li.style.padding = '10px';

    }

    // with css
    // if(counter % 2 === 0) {
    //     li.setAttribute('class', 'cornflowerblue');
    // } else{
    //     li.setAttribute('class', 'dimgrey');
    // }

    li.innerHTML = '<b>Sentence </b>' + counter;
    console.log(li);

    // append that element
    ulElement.appendChild(li);


}

function decrementCounter() {
    const li = ulElement.querySelector('[data-counter="' + counter + '"]');
    li.remove();

    // const number = parseInt(li.getAttribute('data-counter'), 10);

    // if(number % 2 === 0) {
    //     li.remove();
    // }

    counter--
    counterEl.innerText = counter
    // ulElement.removeChild(ulElement.lastChild);
}

increment.addEventListener('click', incrementCounter)
decrement.addEventListener('click', decrementCounter)

//----------------------------//
