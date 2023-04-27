const inquirer = require("inquirer");
const fs = require("fs");

// Takes the user input for the shape
class Shape {
  constructor(chars, textColor, chosenShape, shapeColor) {
    this.chars = chars;
    this.textColor = textColor;
    this.chosenShape = chosenShape;
    this.shapeColor = shapeColor;
  }
  // method
  buildSVG(shapeParam) {
    // return a template literal that is the svg tag
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeParam}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.chars}</text>
    </svg>
    `;
  }

  buildShape() {
    if (this.chosenShape == "circle") {
      return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    } else if (this.chosenShape == "square") {
      return ` <rect x="10" y="10" width="30" height="30" fill="${this.shapeColor}"/>`;
    } else {
      return `<polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
    fill="${this.shapeColor}"/>`;
    }
  }
}

//const logo = new logo( )

module.exports = Shape;
