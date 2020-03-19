import ButtonEntity from "./button.entity.js";

class GameController {
  constructor() {
    this.buttons = [
      new ButtonEntity({ color: "green" }),
      new ButtonEntity({ color: "red" }),
      new ButtonEntity({ color: "blue" }),
      new ButtonEntity({ color: "yellow" }),
    ]
    this.buttonsSequence = [];
    this.playerMoves = 0;
    this.buttonsLength = 4;
    this.addEventClickToButtons();
    this.addMouseEventsToButtons();
    //TODO remover todos os eventos
  }
  startGame() {
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
      return;
    };
    if (this.buttonsSequence.length === this.playerMoves) {
      this.playerMoves = 0;
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
    // TODO Procurar o impacto de usar um await dentro de um for.
    this.togglePointerEvents(true);
    this.turnOffAllButtons();
    setTimeout(async () => {
      for (const button of this.buttonsSequence) {
        await button.activateButton();
      }
      this.togglePointerEvents(false);
    }, 1000);
  }
  turnOffAllButtons() {
    this.buttons.forEach(button => {
      button.turnButtonOff();
    });
  }
  togglePointerEvents(value) {
    this.buttons.forEach(button => {
      button.toggleDisabledButton(value);
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
}

export default new GameController();
