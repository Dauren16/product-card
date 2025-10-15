//task 2

const listItemEl = document.querySelector('.card-list__item');
const buttonEl = document.createElement('button');
buttonEl.textContent = 'Перекрасить карточку';
buttonEl.style.backgroundColor = 'green';
listItemEl.append(buttonEl);

buttonEl.addEventListener('click', () => {
  const cardEl = document.querySelector('.card');
  cardEl.style.backgroundColor = 'blue';
})

//task3

const selectAllBtn = document.createElement('button');
selectAllBtn.textContent = 'Перекрасить все карточки';
listItemEl.append(selectAllBtn);

selectAllBtn.addEventListener('click', () => {
  const cardsEl = document.querySelectorAll('.card');
  cardsEl.forEach(card => {
    card.classList.toggle('card--yellow');
  });
})

//task 4

const openGoogleBtn = document.getElementById('open-google');
openGoogleBtn.addEventListener('click', () =>{
  const openGoogleUrl = 'https://www.google.com/';
  window.open(openGoogleUrl)
})

//task 5

const h1El = document.querySelector('.section__heading');
h1El.addEventListener('mouseover', () => {
  console.log('Выбери свой продукт');
});

//task 6 

const h1Btn = document.createElement('button');
h1Btn.textContent = 'Перекрасить';
h1Btn.style.backgroundColor = 'orange';
h1El.append(h1Btn);

h1Btn.addEventListener('click', () => {
  h1El.classList.toggle('section__heading--red')
})



