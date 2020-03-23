import Button from "./button.entity.js";
import Player from "./player.entity.js";

class GameController {
  constructor() {
    this.buttons = [
      new Button({ color: "green" }),
      new Button({ color: "red" }),
      new Button({ color: "blue" }),
      new Button({ color: "yellow" }),
    ]
    this.buttonsSequence = [];
    this.buttonsLength = 4;
    this.addEventClickToButtons();
    this.addMouseEventsToButtons();
  }
  startGame(playerName) {
    this.setPlayerName(playerName);
    this.setInitialValues();
    this.toggleLoseScreen(false);
    this.generateNewItemToSequence();
    this.startSequence();
  }
  setInitialValues() {
    this.buttonsSequence = [];
    this.playerMoves = 0;
    this.buttonsLength = 4;
  }
  addEventClickToButtons() {
    this.buttons.forEach(button => button.addClickEvent(this.checkButtonClick.bind(this)))
  }
  addMouseEventsToButtons() {
    this.buttons.forEach(button => button.addMouseEvent());
  }
  checkButtonClick(buttonClicked) {
    if (buttonClicked === this.buttonsSequence[this.playerMoves]) {
      this.playerMoves++;
    } else {
      this.toggleLoseScreen(true);
      this.player.addPlayerToLocalStorage();
      return;
    };
    if (this.buttonsSequence.length === this.playerMoves) {
      this.playerMoves = 0;
      this.player.score++;
      this.generateNewItemToSequence();
      this.startSequence();
      return;
    }
  }
  generateNewItemToSequence() {
    const newItem = Math.floor(Math.random() * (this.buttonsLength));
    this.buttonsSequence.push(this.buttons[newItem]);
  }
  startSequence() {
    this.togglePointerEvents(true);
    this.turnOffAllButtons();
    setTimeout(async () => {
      for (const button of this.buttonsSequence) {
        await button.activate();
      }
      this.togglePointerEvents(false);
    }, 1000);
  }
  turnOffAllButtons() {
    this.buttons.forEach(button => {
      button.turnOff();
    });
  }
  togglePointerEvents(value) {
    this.buttons.forEach(button => {
      button.toggleDisabled(value);
    });
  }
  toggleLoseScreen(value) {
    this.toggleGrayscale(value);
    const element = document.getElementById('game-lose-screen');
    element.classList.toggle('game__lose-screen--show', value);
  }
  toggleGrayscale(value) {
    const element = document.getElementById('game-wrapper');
    element.classList.toggle('game__wrapper--disabled', value);
  }
  setPlayerName(playerName) {
    this.player = new Player({ nickname: playerName });
  }
}

export default new GameController();
