 export class Game {
  constructor(name, genre, developer) {
    this.name = name;
    this.genre = genre;
    this.developer = developer;
  }

  showGame() {
    console.log(`Эту игру ${this.name} в жанре ${this.genre} разработала ${this.developer}`);
  }
}