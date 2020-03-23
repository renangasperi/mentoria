export default class Button {
  constructor(data = {}) {
    this.color = data.color;
  }
  getElement() {
    return document.getElementById(`${this.color}-button`);
  }
  addClickEvent(callback) {
    this.getElement().addEventListener("click", () => {
      callback(this);
    });
  }
  addMouseEvent() {
    const element = this.getElement();
    this.getElement().addEventListener("mousemove", () => {
      this.turnOn(element);
    });
    this.getElement().addEventListener("mouseleave", () => {
      this.turnOff(element);
    });
  }
  async activate() {
    return new Promise(resolve => {
      this.turnOn();
      setTimeout(() => {
        this.turnOff();
        setTimeout(() => {
          resolve();
        }, 150);
      }, 1000);
    });
  }
  turnOn() {
    const element = this.getElement();
    element.classList.add("button-mouse-over");
  }
  turnOff() {
    const element = this.getElement();
    element.classList.remove("button-mouse-over");
  }
  toggleDisabled(value) {
    const element = this.getElement();
    element.classList.toggle('click--disabled', value);
  }
}
