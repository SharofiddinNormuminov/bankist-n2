'use strict';

//////////////////////////////////
////////  Modal window
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btnModal => {
  btnModal.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Add cookies

const cookie = document.createElement('div');
cookie.classList.add('cookie-message');
cookie.innerHTML = `We use cookied for improved functionality and analytics
<button class='btn btn--close-cookie'>Got it!</button>`;

body.prepend(cookie);

//style cookies
cookie.style.background = '#37383d';
// cookie.style.width = '120%';
// cookie.style.overflowX = 'hidden';

// console.log(cookie.style.background);
// console.log(cookie.style.color); // ''
// console.log(cookie.style.height); // ''

//Css dan style qiymatni olish => getComputedStyle(element)

// console.log(getComputedStyle(cookie).color);
// console.log(getComputedStyle(cookie).height);

//o'lchamlardan sonni ajratib olish

// console.log(parseInt('12px', 10));
// console.log(parseInt('12.9px'));
// console.log(parseFloat('12.4px'));

cookie.style.height = getComputedStyle(cookie).height + '30px';
// console.log(getComputedStyle(cookie).height + 30 + 'px');

//remove cookie
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => cookie.remove());

///////////////////////////////////////////
// Atributes

const logo = document.querySelector('.nav__logo');

// console.log(logo);
// console.log(logo.alt); // Bankist logo
// console.log(logo.src); // http://127.0.0.1:5500/img/logo.png

// console.log(logo.designer); // undefined
// console.log(logo.getAttribute('designer')); // Jonas

// logo.alt = 'Bankist logo by Jonas';
//logo.company = "Banklist"; => Ishlamaydi
// logo.setAttribute('company', 'Banklist');

// data attribute
// console.log(logo.dataset.id); // #123
// console.log(logo.dataset.version); // version-1

//PART 2
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  e.preventDefault();

  //getBoundingClientRect() => element koordinatalarini viewport (ko'rinib turgan joy) ga nisbatan oladi
  // console.log(section1);
  console.log(section1.getBoundingClientRect());

  // window.pageXOffset, window.pageYoffset => bular document dastlabki holatiga kora qancha scroll bolganini korsatadi

  console.log('x', window.pageXOffset);
  console.log('y', window.pageYOffset);

  // JS da scroll ilish
  // JS da scroll qilish uchun: window.scrollTo
  // 1-usul(eskirgan): window.scrollTo
  // window.scrollTo({
  //   left: section1.getBoundingClientRect().left + window.pageXOffset,
  //   top: section1.getBoundingClientRect().top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // 2-usul: scrollIntoView
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Capturing and bubbling

const colorGenerator = () => {
  return `rgb(
    ${Math.trunc(Math.random() * 256 + 1)},
    ${Math.trunc(Math.random() * 256 + 1)},
    ${Math.trunc(Math.random() * 256 + 1)}
  )`;
};

// const nav = document.querySelector('.nav');
// const navLinks = document.querySelector('.nav__links');
// const navItem = document.querySelector('.nav__item');

// navItem.addEventListener('click', e => {
//   e.preventDefault();
//   navItem.style.background = colorGenerator();
// });

// navLinks.addEventListener('click', e => {
//   navLinks.style.background = colorGenerator();
// });

// nav.addEventListener('click', e => {
//   nav.style.background = colorGenerator();
// }, true);

//1-usul

// const navLinks = document.querySelectorAll('.nav__item');

// navLinks.forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();

//     const sectionName = this.children[0].getAttribute('href');
//     document.querySelector(sectionName).sctollIntoView({ behavior: 'smooth' });
//   });
// });

// 2-usul
const navLink = document.querySelector('.nav__links');

navLink.addEventListener('click', function (e) {
  e.preventDefault();
  // navLink.style.background = colorGenerator();
  // console.log(this);
  // console.log('target', e.target);
  // console.log('current target', e.currentTarget);

  // console.log(e.currentTarget == this); // => true; eventListener qo'shilgan elementi ayni o'zi

  // Matching
  if (e.target.classList.contains('nav__link')) {
    console.log(e.target);

    const sectionName = e.target.getAttribute('href');
    document.querySelector(sectionName).scrollIntoView({ behavior: 'smooth' });
  }
});

// DOM Traverse
/*
const h1 = document.querySelector('h1');
// 1) Up => Down
console.log(h1.children);
console.log(h1.childNodes);

console.log(document.querySelector('.highlight'));
console.log(h1.querySelector('.highlight'));

// 2) Down => Up

console.log(h1.parentElement);
console.log(h1.parentNode);

// closest
console.log(h1.closest('.header__title'));

// 3) Sideways || Siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// console.log(document.querySelector('.header__title').childNodes);

// Barcha siblinglarga olish
console.log(h1.parentElement.children);
*/

// Tab
const tabs = document.querySelectorAll('.operations__tab');
const tabContents = document.querySelectorAll('.operations__content');
const tabContainer = document.querySelector('.operations__tab-container');

tabContainer.addEventListener('click', e => {
  // matching
  const clicked = e.target.closest('.operations__tab');

  // Guarding
  if (!clicked) return;

  // Active tab
  tabs.forEach(tab => {
    tab.classList.remove('operations__tab--active');
  });

  clicked.classList.add('operations__tab--active');

  // Active tab content
  tabContents.forEach(content => {
    content.classList.remove('operations__content--active');
  });

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
});

// navbar

// const hoverNavbar = function(e, opacity) {
//   // matching
//   if (e.target.classList.contains('nav__link')) {
//     const logo = nav.children[0];
//     const siblings = nav.querySelectorAll('.nav__link');

//     logo.style.opacity = opacity;
//     siblings.forEach(link => {
//       if (link != e.target) link.style.opacity = opacity;
//     });
//   }
// };

const hoverNavbar = function (e) {
  // matching
  if (e.target.classList.contains('nav__link')) {
    const logo = nav.children[0];
    const siblings = nav.querySelectorAll('.nav__link');

    logo.style.opacity = this;
    siblings.forEach(link => {
      if (link != e.target) link.style.opacity = this;
    });
  }
};

const nav = document.querySelector('.nav');

// nav.addEventListener('mouseover',(e) => hoverNavbar(e, opacity))
nav.addEventListener('mouseover', hoverNavbar.bind(0.5));

// nav.addEventListener('mouseout',(e) => hoverNavbar(e, opacity))
nav.addEventListener('mouseout', hoverNavbar.bind(1));

