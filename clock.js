const timeContainer = document.querySelector(".js-clock"),
timeTitle = timeContainer.querySelector("h1");

function clock(){
   const date = new Date();
   const hours = date.getHours();
   const minutes = date.getMinutes();
   const seconds = date.getSeconds();
   timeTitle.innerText = `${convertZero(hours)}:${convertZero(minutes)}:${convertZero(seconds)}`;
}

function convertZero(value){
   const digit = value < 10 ? `0${value}` : value;
   return digit;
}

function init(){
   clock();
   setInterval(clock, 1000);
}

init();