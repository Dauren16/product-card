import { cardsContent } from "./cards.js"

const cardList = document.querySelector('.card-list');
const cardListTemplate = document.querySelector('.card-list__template');

//task 4

const headingsString = cardsContent.reduce((acc, item) => {
  return acc ? acc + "; " + item.name : item.name;
}, "");

console.log(headingsString);

//task 5

const descriptionMap = cardsContent.reduce((acc, item) => {
  acc.push({
    [item.name]: item.description
  });
  return acc;
}, []);

console.log(descriptionMap);

//task 6

function showCards() {
  let cardsCount = Number(prompt('Сколько карточек отобразить?'))

  if (cardsCount > 0 && cardsCount <= 5) {
    cardsContent.slice(0, cardsCount).forEach(card => {
      const cardClone = cardListTemplate.content.cloneNode(true);

      cardClone.querySelector('.card__image').src = `images/${card.img}.png`
      cardClone.querySelector('.card__heading').textContent = card.name;
      cardClone.querySelector('.card__text').textContent = card.description;


      const cardInnerList = cardClone.querySelector('.card__composition')
      card.composition.forEach(item => {
        const liElement = document.createElement('li');
        liElement.textContent = item;
        cardInnerList.appendChild(liElement)
      })

      cardClone.querySelector('.card__price').textContent = card.price;
      cardList.appendChild(cardClone)
      })
  } else {
      alert('Введите корректное значение')
      cardsCount = Number(prompt('Сколько карточек отобразить?'))
      showCards()
    }
}

showCards()

