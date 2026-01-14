import { Drink } from './Drink.js';

export class Juice extends Drink {

  constructor(name, size, price, temperature, taste) {
    super(name, size, price, temperature)
    this.taste = taste;
  }
}