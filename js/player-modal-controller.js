import GameController from './game-controller.js';

class PlayerModalController {
  getModal() {
    return document.getElementById('player-modal');
  }
  getInput() {
    return document.getElementById('player-modal-input');
  }
  getButton() {
    return document.getElementById('player-modal-btn');
  }
  openModal() {
    const modal = this.getModal();
    modal.classList.add('player-modal--active');
    this.addEventClickToButton();
  }
  closeModal() {
    const modal = this.getModal();
    modal.classList.remove('player-modal--active');
  }
  addEventClickToButton() {
    const button = this.getButton();
    button.addEventListener('click', () => {
      this.startGame();
    });
  }
  startGame() {
    const input = this.getInput();
    const playerName = input.value;
    GameController.startGame(playerName);
    this.closeModal();
  }
}

export default new PlayerModalController();