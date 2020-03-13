export default class Button {
  constructor(data = {}) {
    this.color = data.color;
    this.state = data.state || "CLICKABLE";
  }
  getElement() {
    return document.getElementById(`${this.color}-button`);
  }
  addClickEvent(callback) {
    this.getElement().addEventListener("click", () => {
      callback(this);
    });
  }
  async activateButton() {
    return new Promise(resolve => {
      const element = this.getElement();
      this.turnButtonOn(element);
      setTimeout(() => {
        this.turnButtonOff(element);
        setTimeout(() => {
          resolve();
        }, 150);
      }, 1000);
    });
  }
  turnButtonOn(element) {
    element.classList.add("button-mouse-over");
  }
  turnButtonOff(element) {
    element.classList.remove("button-mouse-over");
  }
}
