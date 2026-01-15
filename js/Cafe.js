export class Cafe {

  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfoAboutCafe() {
    return `Кафе ${ this.name } распаложен в ${ this.location }`;
  }
 
  orderDrink(drink) {
    drink.dishOutDrink();
  }
}