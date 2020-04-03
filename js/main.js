import GameController from './game-controller.js';
import RankingController from './ranking-controller.js'
import PlayerModalController from './player-modal-controller.js';

class Main {
  static startGame() {
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', () => {
      PlayerModalController.openModal();
    });
  }
  static handleRanking() {
    const rankingButton = document.getElementById('ranking-button');
    rankingButton.addEventListener('click', () => {
      RankingController.toggleRanking();
    });
  }
  static init() {
    this.startGame();
    this.handleRanking();
  }
}

Main.init();