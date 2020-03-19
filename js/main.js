import GameController from "./game-controller.js";

class Main {
  static start() {
    const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", () => {
      GameController.startGame();
    });
  }
}

Main.start();

// Revealing Module
// const app = (() => {
//   const start = () => {
//     const startButton = document.getElementById("start-button");
//     startButton.addEventListener("click", () => {
//       GameController.startGame();
//     });
//   }
//   return  {
//     start
//   }
// })()

// app.start()