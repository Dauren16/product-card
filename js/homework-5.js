//1
function getPlaceTemperature (city, temperature) {
  console.log(`Сейчас в городе ${city} температура ${temperature} градусов по Цельсию`);
}

getPlaceTemperature("Уральск", 25);

//2
const SoundSpeed = 343;

function checkSpeedType (speed) {
  if (speed > soundSpeed) {
    console.log("Сверхзвуковая скорость");
  } else {
    console.log("Дозвуковая скорость");
  }
}

checkSpeedType(400);

//3
const productName = "Хлеб";
const productPrice = 150;

function getProduct(budget) {
  if (budget >= productPrice) {
    console.log(`Ваш товар ${productName} приобретен. Спасибо за покупку`);
  } else {
    console.log(`Вам не хватает ${productPrice - budget}. Пополните баланс`);
  }
}

getProduct(85);

//4
let articleName = "Мастер и Маргарита";
let balance = 500;
const isPedestrians = true;

//5
function getCashATM(balance) {
  if (balance > 500) {
    console.log("Операция успешно проведена");
  } else {
    console.log("Недостаточно средств");
  }
}

