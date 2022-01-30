//----------------------------//

// 19. document.querySelector()

const heading = document.querySelector('#h1');
heading.innerText = 'Hello World';

console.log(heading);

//----------------------------//


// 20. document.querySelectorAll()

const allListItems = document.querySelectorAll('ul li');
for (let i = 0; i < allListItems.length; i++) {
    allListItems[i].innerText = 'Hello World';
}
console.log(allListItems);
//----------------------------//
