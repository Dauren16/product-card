//task 3

function checkTemperature(place, temperature) {
  console.log(`Сейчас в ${place} температура ${temperature} градусов по Цельсию`);
}

checkTemperature('г. Уральск', 8);

//task 4

const SOUND_VELOCITY = 343;

function speedTest(speed) {
  if (speed > SOUND_VELOCITY) {
    console.log('Сверхзвуковая скорость');
  } else if (speed < SOUND_VELOCITY) {
    console.log('Дозвуковая скорость');
  }  else  {
    console.log('Скорость звука');
  }
}

speedTest(343);

//task 5

const product = 'Мясо';
const price = 500;

function buyProduct(balance) {
  if (balance > price) {
    console.log(`Ваш товар ${product}, приобретен. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${price - balance}, пополните баланс`);
  }
}

buyProduct(200);

//task 6

function greet() {
  const introducePerson = prompt('Введите ваше имя');
  const checkAge = prompt('Введите ваш возраст');

  if(checkAge >= 18) {
    console.log(`Добро пожаловать ${introducePerson}`);
  } else {
    console.log(`Извините ${introducePerson} но вам доступ запрещен`);
  }
}

greet();

//task 7

const isPedestrians = true;
let holydays = 2;
const areaMap = 'Карта местности';