let greenPercentage = 60;
let redPercentage = 12;

const greenGraphic = document.querySelector('.green');
const greenGraphic2 = document.querySelector('.green2');
const green = document.querySelector('#green');

let greenGraf1 = greenPercentage*360/100;
window.addEventListener('load', () => {
  green.innerHTML= `${greenPercentage}<span>%</span>`
  if (greenGraf1 >= 180){
    greenGraphic.style.transition = '1s ease-in';
    greenGraphic.style.transform = `rotate(180deg)`;
    greenGraphic2.style.transform = `rotate(180deg)`;
    greenGraphic.addEventListener('transitionend', () => {
      greenGraphic2.style.visibility= 'visible';
      greenGraphic2.style.transition = '1s ease-out';
      greenGraphic2.style.transform = `rotate(360deg)`;
      greenGraphic2.addEventListener('transitionend', () => {
        greenGraphic2.style.transition = '1s ease';
        greenGraphic2.style.transform = `rotate(${greenGraf1}deg)`;
      });
    });
  }else{
    greenGraphic.style.transition = '2s ease';
    greenGraphic.style.transform = `rotate(180deg)`;
    greenGraphic.addEventListener('transitionend', () => {
      greenGraphic.style.transform= `rotate(${greenGraf1}deg)`;
    });
    greenGraphic2.style.visibility= 'visible';
    greenGraphic2.style.transform = `rotate(360deg)`;
    greenGraphic2.style.visibility= 'hidden';
  }
});


let purpulePercentage = 100 - greenPercentage;

const purpuleGraphic = document.querySelector('.purpule');
const purpuleGraphic2 = document.querySelector('.purpule2');
const purpule = document.querySelector('#purpule');

let purpuleGraf1 = purpulePercentage*360/100;
window.addEventListener('load', () => {
  purpule.innerHTML= `${purpulePercentage}<span>%</span>`
  if (purpuleGraf1 >= 180){
    purpuleGraphic.style.transition = '1s ease-in';
    purpuleGraphic.style.transform = `rotate(180deg)`;
    purpuleGraphic2.style.transform = `rotate(180deg)`;
    purpuleGraphic.addEventListener('transitionend', () => {
      purpuleGraphic2.style.visibility= 'visible';
      purpuleGraphic2.style.transition = '1s ease-out';
      purpuleGraphic2.style.transform = `rotate(360deg)`;
      purpuleGraphic2.addEventListener('transitionend', () => {
        purpuleGraphic2.style.transition = '1s ease';
        purpuleGraphic2.style.transform = `rotate(${purpuleGraf1}deg)`;
      });
    });
  }else{
    purpuleGraphic.style.transition = '2s ease';
    purpuleGraphic.style.transform = `rotate(180deg)`;
    purpuleGraphic.addEventListener('transitionend', () => {
      purpuleGraphic.style.transform= `rotate(${purpuleGraf1}deg)`;
    });
    purpuleGraphic2.style.visibility= 'visible';
    purpuleGraphic2.style.transform = `rotate(360deg)`;
    purpuleGraphic2.style.visibility= 'hidden';
  }
});



const redGraphic = document.querySelector('.red');
const redGraphic2 = document.querySelector('.red2');
const red = document.querySelector('#red');

let redGraf1 = redPercentage*360/100;
window.addEventListener('load', () => {
  red.innerHTML= `${redPercentage}<span>%</span>`
  if (redGraf1 >= 180){
    redGraphic.style.transition = '1s ease-in';
    redGraphic.style.transform = `rotate(180deg)`;
    redGraphic2.style.transform = `rotate(180deg)`;
    redGraphic.addEventListener('transitionend', () => {
      redGraphic2.style.visibility= 'visible';
      redGraphic2.style.transition = '1s ease-out';
      redGraphic2.style.transform = `rotate(360deg)`;
      redGraphic2.addEventListener('transitionend', () => {
        redGraphic2.style.transition = '1s ease';
        redGraphic2.style.transform = `rotate(${redGraf1}deg)`;
      });
    });
  }else{
    redGraphic.style.transition = '2s ease';
    redGraphic.style.transform = `rotate(180deg)`;
    redGraphic.addEventListener('transitionend', () => {
      redGraphic.style.transform= `rotate(${redGraf1}deg)`;
    });
    redGraphic2.style.visibility= 'visible';
    redGraphic2.style.transform = `rotate(360deg)`;
    redGraphic2.style.visibility= 'hidden';
  }
});



/*

let graphicHeight = 240;
let day0 = greenPercentage; let day0Height = day0 * 240 / 100;
let day1 = 80; let day1Height = day1 * 240 / 100;
let day2 = 70; let day2Height = day2 * 240 / 100;
let day3 = 50; let day3Height = day3 * 240 / 100;
let day4 = 70; let day4Height = day4 * 240 / 100;
let day5 = 90; let day5Height = day5 * 240 / 100;
let day6 = 100; let day6Height = day6 * 240 / 100;
let day7 = 90; let day7Height = day7 * 240 / 100;
let day8 = 60; let day8Height = day8 * 240 / 100;
let day9 = 70; let day9Height = day9 * 240 / 100;
let day10 = 50; let day10Height = day10 * 240 / 100;
let day11 = 30; let day11Height = day11 * 240 / 100;
let day12 = 40; let day12Height = day12 * 240 / 100;
let day13 = 70; let day13Height = day13 * 240 / 100;
let day14 = 60; let day14Height = day14 * 240 / 100;
let day15 = 40; let day15Height = day15 * 240 / 100;

const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const line4 = document.querySelector('.line4');
const line5 = document.querySelector('.line5');
const line6 = document.querySelector('.line6');
const line7 = document.querySelector('.line7');
const line8 = document.querySelector('.line8');
const line9 = document.querySelector('.line9');
const line10 = document.querySelector('.line10');
const line11 = document.querySelector('.line11');
const line12 = document.querySelector('.line12');
const line13 = document.querySelector('.line13');
const line14 = document.querySelector('.line14');
const line15 = document.querySelector('.line15');

const connec1 = document.querySelector('.connec1');
const connec2 = document.querySelector('.connec2');
const connec3 = document.querySelector('.connec3');
const connec4 = document.querySelector('.connec4');
const connec5 = document.querySelector('.connec5');
const connec6 = document.querySelector('.connec6');
const connec7 = document.querySelector('.connec7');
const connec8 = document.querySelector('.connec8');

// day 1
window.addEventListener('load', () => {
let height1 = day1 - day0;
let height2 = day0 - day1;
let sqrWidth = line5.offsetWidth;
let tangente1 = Math.atan(height1 / sqrWidth) / (Math.PI / 180);
let tangente2 = Math.atan(height2 / sqrWidth) / (Math.PI / 180);

window.alert(tangente1);
if(height1 > 0){
  connec1.style.bottom = `${day0Height}px`;
  connec1.style.transform = `rotate(-${tangente1}deg)`
}else{
  connec1.style.bottom = `${day1Height}px`;
  connec1.style.transform = `rotate(${tangente2}deg)`;
}
});

// day 1
window.addEventListener('load', () => {
let height1 = day2 - day1;
let height2 = day1 - day2;
let sqrWidth = line5.offsetWidth;
let tangente1 = Math.atan(height1 / sqrWidth) / (Math.PI / 180);
let tangente2 = Math.atan(height2 / sqrWidth) / (Math.PI / 180);

window.alert(tangente1);
if(height1 > 0){
  connec2.style.bottom = `${day1Height}px`;
  connec2.style.transform = `rotate(-${tangente1}deg)`
}else{
  connec2.style.bottom = `${day2Height}px`;
  connec2.style.transform = `rotate(${tangente2}deg)`;
}
});



// day 3
window.addEventListener('load', () => {
let height1 = day3 - day2;
let height2 = day2 - day3;
let sqrWidth = line3.offsetWidth;
let tangente1 = Math.atan(height1 / sqrWidth) / (Math.PI / 180);
let tangente2 = Math.atan(height2 / sqrWidth) / (Math.PI / 180);
if(height1 > 0){
  line3.style.bottom = `${day2Height}px`;
  line3.style.height = `${height1}px`;
  line3.style.backgroundColor = `red`;
  connec3.style.transform = `rotate(-${tangente1}deg)`
}else{
  line3.style.bottom = `${day3Height}px`;
  line3.style.height = `${height2}px`;
  connec3.style.transform = `rotate(${tangente2}deg)`;
  line3.style.backgroundColor = `red`;
}
});

// day 4
window.addEventListener('load', () => {
let height1 = day4 - day3;
let height2 = day3 - day4;
let sqrWidth = line4.offsetWidth;
let tangente1 = Math.atan(height1 / sqrWidth) / (Math.PI / 180);
let tangente2 = Math.atan(height2 / sqrWidth) / (Math.PI / 180);
if(height1 > 0){
  line4.style.bottom = `${day3Height}px`;
  line4.style.height = `${height1}px`;
  line4.style.backgroundColor = `red`;
  connec4.style.transform = `rotate(-${tangente1}deg)`
}else{
  line4.style.bottom = `${day4Height}px`;
  line4.style.height = `${height2}px`;
  connec4.style.transform = `rotate(${tangente2}deg)`;
  line4.style.backgroundColor = `red`;
}
});


// day 5
window.addEventListener('load', () => {
let height1 = day5 - day4;
let height2 = day4 - day5;
let sqrWidth = line5.offsetWidth;
let tangente1 = Math.atan(height1 / sqrWidth) / (Math.PI / 180);
let tangente2 = Math.atan(height2 / sqrWidth) / (Math.PI / 180);
if(height1 > 0){
  line5.style.top = `${240 - day5Height + height1}px`;
  line5.style.height = `${height1}px`;
  line5.style.backgroundColor = `red`;
  connec5.style.transform = `rotate(-${tangente1}deg)`
}else{
  line5.style.bottom = `${240 - day5Height}px`;
  line5.style.height = `${height2}px`;
  connec5.style.transform = `rotate(${tangente2}deg)`;
  line5.style.backgroundColor = `red`;
}
});




// day 6
window.addEventListener('load', () => {
let height1 = day6 - day5;
let height2 = day5 - day6;
let sqrWidth = line6.offsetWidth;
let tangente1 = Math.atan(height1 / sqrWidth) / (Math.PI / 180);
let tangente2 = Math.atan(height2 / sqrWidth) / (Math.PI / 180);
if(height1 > 0){
  line6.style.top = `${240 - day6Height + height1}px`;
  line6.style.height = `${height1}px`;
  line6.style.backgroundColor = `red`;
  connec6.style.transform = `rotate(-${tangente1}deg)`
}else{
  line6.style.bottom = `${240 - day6Height}px`;
  line6.style.height = `${height2}px`;
  connec6.style.transform = `rotate(${tangente2}deg)`;
  line6.style.backgroundColor = `red`;
}
});




*/