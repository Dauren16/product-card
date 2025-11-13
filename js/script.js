// Task 2

const productCard = document.querySelector('.card');
const changeCardColor = document.querySelector('#card-change-color');
const crimsonColorHash = '#DC143C';
const blueColorHash = '#0000FF';

changeCardColor.addEventListener('click', () => {
  productCard.style.backgroundColor = crimsonColorHash
})

// Task 3
const productCards = document.querySelectorAll('.card');
const changeCardsColor = document.querySelector('#cards-change-color');

changeCardsColor.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = blueColorHash)
})


//Task 4

const googleLinkButton = document.querySelector('#link');

googleLinkButton.addEventListener('click', openGoogle);


function openGoogle () {
  const answer = confirm("Вы действительно хотите открыть Google?");

  if (answer === true) {
    window.open('https://google.com');
  } else {
    return;
  }
}

//Task 5

const outputLogButton = document.querySelector('#output-console');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

//Task 6

const mainTitle = document.querySelector('.section__heading');


mainTitle.addEventListener('mouseover', () => {
  console.log(mainTitle.textContent);
})

//Task 7

const changeColorButton = document.querySelector('#button-change-color');

changeColorButton.addEventListener('click', () => {
  changeColorButton.classList.toggle('section__button-change-color')
})



