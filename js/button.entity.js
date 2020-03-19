export default class Button {
  constructor(data = {}) {
    this.color = data.color;
    this.state = data.state || "CLICKABLE";
  }
  // TODO TIRAR TODOS OS BUTTONS DOS NOMES PQ O ADRIANO FALOU Q FICA FEIO
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
      this.turnButtonOn(element);
    });
    this.getElement().addEventListener("mouseleave", () => {
      this.turnButtonOff(element);
    });
  }
  async activateButton() {
    return new Promise(resolve => {
      this.turnButtonOn();
      setTimeout(() => {
        this.turnButtonOff();
        setTimeout(() => {
          resolve();
        }, 150);
      }, 1000);
    });
  }
  turnButtonOn() {
    const element = this.getElement();
    element.classList.add("button-mouse-over");
  }
  turnButtonOff() {
    const element = this.getElement();
    element.classList.remove("button-mouse-over");
  }
  toggleDisabledButton(value) {
    const element = this.getElement();
    element.classList.toggle('click--disabled', value);
  }
}
