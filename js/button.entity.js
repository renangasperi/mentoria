export default class Button {
  constructor(data = {}) {
    this.color = data.color;
    this.state = data.state || "CLICKABLE";
  }
  getElement() {
    return document.getElementById(`${this.color}-button`);
  }
  addClickEvent(callback) {
    this.getElement().addEventListener("click", function() {
      callback(this);
      console.log(this.getElement());
    });
  }
  async turnOnButton() {
    return new Promise(resolve => {
      const element = this.getElement();
      element.classList.add("button-mouse-over");
      setTimeout(() => {
        element.classList.remove("button-mouse-over");
        setTimeout(() => {
          resolve();
        }, 150);
      }, 1000);
    });
  }
}
