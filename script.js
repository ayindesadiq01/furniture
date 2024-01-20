'use strict';
const progressEl = document.querySelector('.progress');
const html = document.querySelector('html');


// WORKINGK WITH PROGRESS BAR
window.addEventListener('scroll', () => {
  const srcHeight = window.innerHeight;
  const scrollY = Math.round(window.scrollY);
  const scrollHeight = html.scrollHeight;

  const scrollCalc = srcHeight + scrollY;
  const progress = scrollCalc / scrollHeight * 100;

  progressEl.value = progress;
});

// WORKING WITH SCROLL BAR
const homePage = document.querySelector('.homepage');
const home = document.querySelector('.home');

const conObFtn = function(entries) {
  const [entry] = entries;

  if(!entry.isIntersecting) {
    homePage.classList.add('sticky-container')
  } else {
    homePage.classList.remove('sticky-container')
  }
}

const contOb = new IntersectionObserver(conObFtn, {
  root: null,
  threshold: 0.6
})

contOb.observe(home);

// WITH MENU BAR
const hidden = document.querySelector('.hidden');
const menuBar = document.querySelector('.menu-bar');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => {
  // menuBar.classList.remove('hidden');

})