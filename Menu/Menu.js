
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
  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself
  Step 5: return the menu component.
  Step 6: add the menu component to the DOM.
  
*/
const header = document.querySelector('.header')

header.appendChild(sideMenu(menuItems))

// Function to create a new menu utilizing inputted object array for nav items
function sideMenu(navItems) {
  // Define new elements
  const menu = document.createElement('div')
  const uList = document.createElement('ul')

  // Using the array inputted, run through each item, create a new 'li', assign text of item into 'li', then append it to the unordered list
  navItems.forEach(item => {
    const listItem = document.createElement('li')
    listItem.textContent = item
    uList.appendChild(listItem)
  })

  // Structure of elements
  menu.appendChild(uList)

  // Setting up class names
  menu.classList.add('menu')

  // Button events
  const menuButton = document.querySelector('.menu-button')
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open')
  })

  document.addEventListener('click', event =>{
    if (menu.classList.contains('menu--open') === false) return
    else if ((event.target === menu) || (event.target === uList) || (event.target.tagName === 'LI') || (event.target === menuButton)) return
    else menu.classList.toggle('menu--open') 
  })

  return menu
}