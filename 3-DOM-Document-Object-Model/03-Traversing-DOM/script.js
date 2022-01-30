//----------------------------//


// 22. Traversing the DOM

const allListItems = document.querySelectorAll('ul li');
for (let i = 0; i < allListItems.length; i++) {
    allListItems[i].innerText = 'Hello World';
}
console.log(allListItems);

// qerrySelector() uses format like css example #para
const para = document.querySelector('#para');

// getElementById() does not use format like that
// because it is only uses ids not classes etc
const para2 = document.getElementById('para');


const ul = document.querySelector('ul');
console.log(ul);

const li = ul.querySelectorAll('li');
console.log(li);

// get element do not work with ul.getElementById('li')
const li = ul.getElementsById('li');
console.log(li);
//----------------------------//
