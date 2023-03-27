// function Button(text, background) {
//   this.text = text
//   this.background = background
// }

// Button.prototype.element = function() {
//   const buttonEl = document.createElement('button')
//   buttonEl.innerText = this.text
//   buttonEl.style.background = this.background
//   return buttonEl
// }

// const blueButton = new Button('Comprar', 'blue')
// blueButton.element()
// console.log(blueButton.element())

// document.body.appendChild(blueButton.element())

class Button {
  constructor(text, background, color) {
    this.text = text
    this.background = background
    this.color = color
  }
  element() {
    const buttonEl = document.createElement('button')
    buttonEl.innerText = this.text
    buttonEl.style.background = this.background
    buttonEl.style.color = this.color
    return buttonEl
  }
} 

const blueButton = new Button('Comprar', 'red', 'white')
document.body.appendChild(blueButton.element())
