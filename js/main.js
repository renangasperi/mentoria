import GameController from './game-controller.js';

const startButton = document.getElementById('start-button');

startButton.addEventListener('click', GameController.startGame());