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
  threshold: 0.5
})

contOb.observe(home);

// WITH MENU BAR
const hidden = document.querySelector('.hidden');
const menuBar = document.querySelector('.menu-bar');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const blurr = document.querySelector('.blurry');
const menuu = document.querySelector('.menuu')


menuu.addEventListener('click', () => {
  menuu.classList.toggle('openmenu');
  blurr.classList.toggle('hidden')

  if(menuu.classList.contains('openmenu')) {
    menuBar.style.right = '0'
    console.log('yoo')
  } else {
    menuBar.style.right = '-200px'
  }
})


// REVEALING ON SCROLL
const allSection = document.querySelectorAll('.section');
const locationInfo = document.querySelector('.location-info');

const revSection = function(entries, observer) {

  const [entry] = entries;

  if(entry.isIntersecting) {
    entry.target.classList.remove('section-hidden');
  }

}

const intSection = new IntersectionObserver(revSection, {
  root: null,
  threshold: 0.1,
});

allSection.forEach(section => {
  intSection.observe(section);
  section.classList.add('section-hidden')
});


// HIDING THE LOCATION INFO
const homee = document.querySelector('.home');
const bod = document.querySelector('body');
const mediaQuery = window.matchMedia('(min-width: 768px)');


const homSection = function(entries, observer) {
  const [entry] = entries;
  console.log(entry)

  if(!entry.isIntersecting) {

      if(mediaQuery.matches == true) {
        console.log(mediaQuery)
        locationInfo.style.display = 'none'
      } 
    } else if(entry.isIntersecting) {
      if(mediaQuery.matches == true) {
        console.log(mediaQuery)
        locationInfo.style.display = 'flex'
      } 
    }
}

const homeSection = new IntersectionObserver(homSection, {
  root: null,
  threshold: 0,
});

homeSection.observe(homee)

// Working with search Box

const searchIcon = document.querySelectorAll('.search-icon');
const searchBox = document.querySelectorAll('.search-box');


const sIcon = function() {
  searchIcon.classList.add('hidden');
  searchBox.classList.remove('hidden')
}

// searchIcon.addEventListener('click', sIcon)

searchIcon.forEach(searchI => {
  searchI.addEventListener('click', () => {
    searchI.classList.add('hidden');

    searchBox.forEach(searchB => {
      searchB.classList.remove('hidden')
    })
  })
})

