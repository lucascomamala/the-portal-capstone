const header = document.getElementById('header')
const barsButton = document.getElementById('open-menu');
const closeButton = document.getElementById('close-menu');
const menuItems = document.querySelectorAll('.about-bottom-nav > li > a');

let showing = false;

function displayMenu() {
  showing = true;
  header.style.display = 'block';
  barsButton.style.display = 'none';
}

function collapseMenu() {
  showing = false;
  header.style.display = 'none';
  barsButton.style.display = 'initial';
}

barsButton.addEventListener('click', displayMenu);
closeButton.addEventListener('click', collapseMenu);

menuItems.forEach((element) => {
  element.addEventListener('click', collapseMenu);
});

window.addEventListener('click', function(e){
  if (showing && !header.contains(e.target) && !barsButton.contains(e.target)) {
    collapseMenu();
  }
});
