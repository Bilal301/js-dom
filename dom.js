// console.dir(document);

// examine the document object
// console.log(document.baseURI);
// document.title = 'Yes';

//Single element selector

//get element by ID

//console.log(document.getElementById('header-title'));

//const headerTitle = document.getElementById('header-title');
//console.log(headerTitle);

//headerTitle.textContent = 'Hello';

// const mainHeader = document.querySelector('.main-header');
// mainHeader.style.borderBottom = '3px solid green';

//headerTitle.style.borderBottom = '3px dotted black';

//GETELEMENTSBYCLASSNAME
// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[2]);
// items[2].textContent = 'danger';
// items[1].style.fontWeight = 'bold';

// let input = document.querySelector('#email');
// input.value = 'Hello people';

// let buttn = document.querySelector('input[type = "submit"]');
// buttn.value = 'send';

///QUERYSELECTOR ALL

// let titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'hello';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// for (let i = o; i < odd.length; i++) {
//   odd[i].style.backgroundColor = 'black';
//   even[i].style.backgroundColor = 'blue';
// }

// Treversing the DOM

// let itemList = document.querySelector('.items');
// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = '';

//children

// let itemList = document.querySelector('.items');
// console.log(itemList.children);
// console.log(itemList.children[1]);

// itemList.children[1].style.backgroundColor = 'yellow';

//Create element

// let newDiv = document.createElement('div');
// newDiv.className = 'hello';
// newDiv.id = 'hello1';
// newDiv.textContent = 'have a nice day';
// newDiv.setAttribute('title', 'HEllo Div');

// console.log(newDiv);

// let container = document.querySelector('header .container');
// console.log(container);
// let h1 = document.querySelector('header h1');
// console.log(h1);
// container.insertBefore(newDiv, h1);

// newDiv.style.backgroundColor = 'blue';

let button = document
  .getElementById('button')
  .addEventListener('click', buttonClick);

function buttonClick() {
  //console.log('button clicked');
  document.getElementById('header-title').textContent = 'changed';
}
