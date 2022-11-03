//alert('Hi Users!');

const start = document.querySelector('#start');
const btn = document.querySelector('#btn');
const enter = document.querySelector('#entr');
const finish = document.querySelector('#tab');
const screens = document.querySelectorAll('.screen');

//console.log(finish);

start.addEventListener('click',(event)=>{
  event.preventDefault();
  screens[0].classList.add('up');
});

btn.addEventListener('click',(event)=>{
screens[1].classList.add('up');
});

enter.addEventListener('click',(event)=>{
  event.preventDefault();
  screens[2].classList.add('up');
});

finish.addEventListener('click',(event)=>{
  event.preventDefault();
  setTimeout(()=>{location.reload();},200);
  //screens.classList.remove('up');
});

//setTimeout(()=>{location.reload();},2000);
