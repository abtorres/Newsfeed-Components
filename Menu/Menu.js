/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM 
  , select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenu(menuItems) {
  //create div element
  const menu = document.createElement('div');
  menu.classList.add('menu');
  //create ul and append to menu
  const menuList = document.createElement('ul');
  menu.appendChild(menuList);
  //access all menu items and append to ul
  menuItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    menuList.appendChild(li);
  });
  //return our element
  return menu;
}
//open and close menu
const toggleMenu = () => {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('menu--open');
}
//selecting mount point
const header = document.querySelector('.header');
header.addEventListener('click', toggleMenu);
//appending our component to selected DOM elelment
header.appendChild(createMenu(menuItems));

