import { Cafe } from './Cafe.js';
import { Tea } from './Tea.js';

const blackTea = new Tea('черный', 200, 100, 50, 2);
blackTea.getInfo();

const myStartap = new Cafe('Zebra', 'Уральск');
myStartap.orderDrink(blackTea);