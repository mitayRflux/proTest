//alert('Hi Users!');

const start = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');

//console.log(screens);

start.addEventListener('click',(event)=>{
  event.preventDefault();
  screens[0].classList.add('up');
});
