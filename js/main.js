import ButtonEntity from "./button.entity.js";

const greenButton = new ButtonEntity({ color: "green" });
const redButton = new ButtonEntity({ color: "red" });
const blueButton = new ButtonEntity({ color: "blue" });
const yellowButton = new ButtonEntity({ color: "yellow" });

// const buttons = {
//   greenButton = new ButtonEntity({ color: "green" }),
//   redButton = new ButtonEntity({ color: "red" }),
//   blueButton = new ButtonEntity({ color: "blue" }),
//   yellowButton = new ButtonEntity({ color: "yellow" }),
// }

greenButton.addClickEvent();
redButton.addClickEvent();
blueButton.addClickEvent();
yellowButton.addClickEvent();

setInterval(() => {
  greenButton.turnOnButton();
  setTimeout(() => {
    redButton.turnOnButton();
  }, 1150);
  setTimeout(() => {
    yellowButton.turnOnButton();
  }, 2300);
  setTimeout(() => {
    blueButton.turnOnButton();
  }, 3450);
}, 4600);
