export default class {
  constructor(data = {}) {
    this.color = data.color;
    this.state = data.state || "CLICKABLE";
  }
  getElement() {
    return document.getElementById(`${this.color}-button`);
  }

  addClickEvent() {
    this.getElement().addEventListener("click", function() {
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    });
  }

  turnOnButton() {
    const element = this.getElement();
    element.classList.add("button-mouse-over");
    setTimeout(() => {
      element.classList.remove("button-mouse-over");
    }, 1000);
  }
}
