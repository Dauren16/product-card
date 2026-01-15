export class Game {
  constructor(name, genre, developer, year) {
    this.name = name;
    this.genre = genre;
    this.developer = developer;
    this.year = year;
  }

  showGame() {
    console.log(
      `Эту игру ${this.name} ${this.year} года, в жанре ${this.genre} разработала ${this.developer}`
    );
  }
}