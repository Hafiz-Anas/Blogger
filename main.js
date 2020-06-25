//RESPONSIVE NAVIGATION
var burger = document.querySelector('.burger');
var nav = document.querySelector('.nav-links');
var navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s  ease forwards  ${index / 7 + 0.3}s`;
        }
    })
    burger.classList.toggle('toggle');
});

//CARDS
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const track = document.querySelector('.track');
let containerWidth = document.querySelector('.container').offsetWidth;

window.addEventListener('click', () => {
    containerWidth = document.querySelector('.container').offsetWidth;
});
let index = 0;

next.addEventListener('click', () => {
    index++;
    prev.classList.add('show');
    track.style.transform = `translateX(-${index * containerWidth}px)`;
    if (track.offsetWidth - (index * containerWidth) < containerWidth) {
        next.classList.add('hide');
    }    
});
prev.addEventListener('click', () => {
    index--;
    next.classList.remove('hide');
    if (index === 0) {
        prev.classList.remove('show');
    }
    track.style.transform = `translateX(-${index * containerWidth}px)`;
});