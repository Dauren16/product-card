import { Game } from './Game.js'

class GameDetails extends Game {
  constructor(name, genre, developer, year) {
    super(name, genre, developer)
    this.year = year;
  }

  showGame() {
    console.log(`Эту игру ${this.name} ${this.year} года, в жанре ${this.genre} разработала ${this.developer}`);
  }
}