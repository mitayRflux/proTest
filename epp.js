//alert('Hi Users!');


const upBtn = document.querySelector('.up-btn');
const downBtn = document.querySelector('.down-btn');
const sidebar = document.querySelector('.sitebar');
const mainSlide = document.querySelector('.main-menu');
const container = document.querySelector('#section');
//console.log(downBtn);
const slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount-1)*100}vh`;

upBtn.addEventListener('click',function(){
changeSlide('up');
});

downBtn.addEventListener('click',function(){
  changeSlide('down');
});

function changeSlide(direction){
  if(direction===0){
   activeSlideIndex++;
   if(activeSlideIndex===slidesCount){
     activeSlideIndex=0;
   }
  }else if(direction ==='down'){
    activeSlideIndex--;
    if(activeSlideIndex < 0){
      activeSlideIndex = slidesCount-1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = 
  `translateY(-${activeSlideIndex*height}px)`;

  sidebar.style.transform = 
  `translateY(${activeSlideIndex*height}px)`;

}
