import { Drink } from './Drink.js';

export class Energy extends Drink {

  constructor(name, size, price, temperature, caffeine) {
    super(name, size, price, temperature)
    this.caffeine = caffeine;
  }
}