/*
* Variables
**/

const images = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png"
];
const title = document.querySelector("#title");
const play = document.querySelector("#play");
var img1 = document.getElementById("image1");
var img2 = document.getElementById("image2");


class Game {
  /*
  * Dice Game Entry Point/ Controller
  **/

  play() {
    /*
    * Reshuffles the dice
    **/

    this.randomIndex1 = Math.floor(Math.random() * images.length);
    this.randomIndex2 = Math.floor(Math.random() * images.length);

    this.renderDice(this.randomIndex1, this.randomIndex2);
  }

  checkWinner() {
    /*
    * Checks for winner
    **/

    if (this.randomIndex1 > this.randomIndex2) {
      title.textContent = "🏆Player 1 Wins!";
    } else if (this.randomIndex1 == this.randomIndex2) {
      title.textContent = "It's a Draw!";
    } else {
      title.textContent = "Player 2 Wins🏆!";
    }
  }

  renderDice(die1, die2) {
    /*
    * Renders the dice with the given number.
    **/

    img1.src = images[die1];
    img2.src = images[die2];

    this.checkWinner();
  }
}

game = new Game();
document.getElementById("play").addEventListener("click", () => {
  game.play();
})