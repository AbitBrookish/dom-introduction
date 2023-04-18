const HEADER = document.querySelector('#main__header');
const LOGO = document.querySelector('.main__logo');
const NAV = document.querySelector('#main__nav');
const NAVLINK = document.querySelectorAll('.main__nav-link');

NAVLINK.forEach(item => {
  item.setAttribute('style', 'text-decoration: none; color: black');
});

let randomizer = (select) => {
  let random = Math.floor(Math.random() * 20);
  if (random % 2 === 1) {
    select.style.fontFamily = 'Georgia';
  } else {
    select.style.fontFamily = 'Helvetica';
  };
}

LOGO.addEventListener('click', () => {
  randomizer(LOGO);
});