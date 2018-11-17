log('scripts.js loaded');
let scroll = new SmoothScroll('a[href*="#"]');
let burger = doc.querySelector('.burger');
let nav = doc.querySelector('#'+burger.dataset.target);

    burger.addEventListener('click',() => {
      burger.classList.toggle('is-active');
      nav.classList.toggle('is-active');
    });

    let signIn = () =>{
      window.open('https://my.mlh.io/oauth/authorize?client_id=a5d42319c720d586e0ca1047e9ba7b307610c4ceafd982401cf7b66bde301385&redirect_uri=https%3A%2F%2F${window.location.href}&response_type=token')
    }
    let addtoCal = () =>{
      window.open('https://calendar.google.com/event?action=TEMPLATE&tmeid=NnNpYmQwdHVxdGFvdjk2OWEwdmxhYWJxZ24gc2Jjb21wc2NpY2x1YkBt&tmsrc=sbcompsciclub%40gmail.com')
    }