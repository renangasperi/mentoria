import ButtonEntity from "./button.entity.js";

class GameController {
  constructor() {
    this.greenButton = new ButtonEntity({ color: "green" });
    this.redButton = new ButtonEntity({ color: "red" });
    this.blueButton = new ButtonEntity({ color: "blue" });
    this.yellowButton = new ButtonEntity({ color: "yellow" });
  }
  addEventClickToButtons() {
    this.greenButton.addClickEvent();
    this.redButton.addClickEvent();
    this.blueButton.addClickEvent();
    this.yellowButton.addClickEvent();
  }
  startGame() {
    this.addEventClickToButtons();
    this.startFakeGame();
  }
  startFakeGame() {
    setInterval(async () => {
      await this.greenButton.activateButton();
      await this.redButton.activateButton();
      await this.yellowButton.activateButton();
      await this.blueButton.activateButton();
    }, 4600);
  }
}

export default new GameController();
