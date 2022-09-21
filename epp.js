//alert('Hi Users!');

const start = document.querySelector('#start');
const btn = document.querySelector('#btn');
const enter = document.querySelector('#entr');
const screens = document.querySelectorAll('.screen');

//console.log(screens);

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


//setTimeout(()=>{location.reload();},2000);
