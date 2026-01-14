export class Drink {

  #temperature;

  constructor(name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = 0;
  }
  
  getInfo() {
    return `Напиток: ${ this.name }, размер: ${ this.size }, цена: ${ this.price }, температура: ${ this.#temperature }`;
  }

  getTemperature() {
    return `Температура напитка ${ this.name }, ${ this.#temperature } градусов`;
  }

  setTemperature(value) {
    this.#temperature = value;
  }

  #prepareDrink() {
    const drinkTemperature = 60;

    if (this.size === 'L') {
      this.setTemperature(drinkTemperature + 5);
    } else if (this.size === 'S') {
      this.setTemperature(drinkTemperature - 5);
    } else {
      this.setTemperature(drinkTemperature);
    }
    return `Напиток ${ this.name } (${ this.size }) готовится за ${ this.price }₸`;
  }

  dishOutDrink() {
    this.#prepareDrink();
    return `Напиток ${ this.name } готов`;
  }
}