const header = document.getElementById('header')
const barsButton = document.getElementById('open-menu');
const closeButton = document.getElementById('close-menu');
const menuItems = document.querySelectorAll('.about-bottom-nav > li > a');

let showing = false;

function displayMenu() {
  showing = true;
  header.classList.toggle('show');
  barsButton.classList.toggle('hide');
}

function collapseMenu() {
  showing = false;
  header.classList.toggle('show');
  barsButton.classList.toggle('hide');
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
