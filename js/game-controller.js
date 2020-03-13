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
    this.round = 0;
  }
  startGame() {
    this.setInitialValues();
    this.toggleLoseScreen(false);
    this.addEventClickToButtons();
    this.generateNewItemToSequence();
    this.startSequence();
  }
  setInitialValues() {
    this.buttonsSequence = [];
    this.round = 0;
  }
  addEventClickToButtons() {
    this.buttons.forEach(button => button.addClickEvent(this.checkButtonClick.bind(this)))
  }
  checkButtonClick(buttonClicked) {
    if (buttonClicked === this.buttonsSequence[this.round]) {
      this.round++;
    } else {
      this.toggleLoseScreen(true);
      return;
    };
    if (this.buttonsSequence.length === this.round) {
      this.round = 0;
      this.generateNewItemToSequence();
      this.startSequence();
      return;
    }
  }
  generateNewItemToSequence() {
    const newItem = Math.floor(Math.random() * (3 + 1));
    this.buttonsSequence.push(this.buttons[newItem]);
  }
  startSequence() {
    this.togglePointerEvents(true);
    setTimeout(async () => {
      for (const button of this.buttonsSequence) {
        await button.activateButton();
      }
      this.togglePointerEvents(false);
    }, 1000);
  }
  togglePointerEvents(value) {
    this.buttons.forEach(button => {
      const element = button.getElement();
      element.classList.toggle('click--disabled', value);
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
