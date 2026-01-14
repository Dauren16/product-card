import { Drink } from './Drink.js';

export class Tea extends Drink {

  constructor(name, size, price, temperature, sugarLump) {
    super(name, size, price, temperature)
    this.sugarLump = sugarLump;
  }
}