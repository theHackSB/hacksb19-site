log('scripts.js loaded');
let scroll = new SmoothScroll('a[href*="#"]');
let burger = doc.querySelector('.burger');
let nav = doc.querySelector('#'+burger.dataset.target);

    burger.addEventListener('click',() => {
      burger.classList.toggle('is-active');
      nav.classList.toggle('is-active');
    });