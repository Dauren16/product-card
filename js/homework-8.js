import { cardsContent } from "./cards.js"

const cardList = document.querySelector('.card-list');
const cardListTemplate = document.querySelector('.card-list__template');

//task 4

const headingsString = cardsContent.reduce((acc, item) => {
  return acc ? acc + "; " + item.heading : item.heading;
}, "");

console.log(headingsString);

//task 5

const descriptionMap = cardsContent.reduce((acc, item) => {
  acc.push({
    [item.heading]: item.description
  });
  return acc;
}, []);

console.log(descriptionMap);

//task 6

function showCards() {
  let cardsCount = Number(prompt('Сколько карточек отобразить?'))

  if (cardsCount > 0 && cardsCount <= 5) {
    cardList.innerHTML = "";
    cardsContent.slice(0, cardsCount).forEach(card => {
      const cardClone = cardListTemplate.content.cloneNode(true);

      //Картинки
      const imgElement = cardClone.querySelector('.card__image')
      imgElement.src = card.img;
      imgElement.alt = card.alt || card.heading;

      cardClone.querySelector('.card__descr').textContent = card.description;
      cardClone.querySelector('.card__heading').textContent = card.heading;
      cardClone.querySelector('.card__text').textContent = card.text;
      cardClone.querySelector('.card__list-title').textContent = card.listTitle;

      //Элементы списка
      const cardInnerList = cardClone.querySelector('.card__list')
      cardInnerList.innerHTML = "";
      card.listRow.forEach(item => {
        const liElement = document.createElement('li');
        liElement.textContent = item;
        cardInnerList.appendChild(liElement)
      })


      cardClone.querySelector('.card__price-title').textContent = card.priceTitle;
      cardClone.querySelector('.card__price').textContent = card.price;
      cardList.appendChild(cardClone)
      })
  } else {
      alert('Введите корректное значение')
    }
}

showCards()

