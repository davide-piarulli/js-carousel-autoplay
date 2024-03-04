/*
1. inserisco tutte le img nell'array
2. Creo un ciclo FOR ed inserisco nel items-wrapper gli elementi HTML che contengono le img con già classe hide. inizializzo un contatore counterImg a 0.
  2.a mostro solo la prima img
3. dichiaro le variabili const per le frecce.
Creo un addEventListener che al loro click deve nascondere img attuale e incrementare o decrementare il counterImg
  3.a dopo aver incrementato/decrementato il counterImg, mostro img attuale
BONUS:
4. quando arrivo all'ultima img counterImg === images.lenght-1, allora faccio append child di images[0]
*/


// Elements
const slider = document.querySelector('.slider');
const itemsWrapper = document.querySelector('.items-wrapper');
const thmbsWrapper = document.querySelector('.thmbs-wrapper');

const up = document.querySelector('.up');
const down = document.querySelector('.down');


let counterImg = 0;

// 1
const images = [
  'assets/img/01.webp',
  'assets/img/02.webp',
  'assets/img/03.webp',
  'assets/img/04.webp',
  'assets/img/05.webp',
];

console.log(images);

// 2 ciclo per inserire img in html
for (let i = 0; i < images.length; i++) {
  const img = images[i];
  const imgThumb = images[i];

  itemsWrapper.innerHTML += `<img class="imgb hide" src="${img}">`;
  thmbsWrapper.innerHTML += `<img class="thumb grey" src="${imgThumb}">`;
}

const itemsCollection = document.getElementsByClassName('imgb');
const imgMini = document.getElementsByClassName('thumb');

// 2.a
itemsCollection[counterImg].classList.remove('hide');
imgMini[counterImg].classList.add('active');

// 3
up.addEventListener('click', function () {

  itemsCollection[counterImg].classList.add('hide');
  imgMini[counterImg].classList.remove('active');
  counterImg--;
  
  if(counterImg < 0){
    counterImg = images.length-1;
  }
  // 3.a
  itemsCollection[counterImg].classList.remove('hide');
  imgMini[counterImg].classList.add('active');
})


// 3
down.addEventListener('click', function () {
  itemsCollection[counterImg].classList.add('hide');
  imgMini[counterImg].classList.remove('active');
  counterImg++;

  if(counterImg == images.length){
    counterImg = 0;
  }

  // 3.a
  itemsCollection[counterImg].classList.remove('hide');
  imgMini[counterImg].classList.add('active');

})

// TIMING FUNCTION

let counter = 0;

const slideAuto = () => {
  itemsCollection[counter].classList.add('hide');
  imgMini[counter].classList.remove('active');
  counter++;

  if(counter == images.length){
    counter = 0;
  }

  // 3.a
  itemsCollection[counter].classList.remove('hide');
  imgMini[counter].classList.add('active');

}

const rotate = setInterval(slideAuto, 3000);

slider.addEventListener('mouseover', function (){
  clearInterval(rotate);
})