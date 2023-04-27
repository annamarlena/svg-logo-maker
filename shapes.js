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
  buildShape(){
    console.log(`${this.chars} , ${this.textColor} , ${this.chosenShape} , ${this.shapeColor}`)
  }

}

const logo = new logo( )

// class Circle extends Shape {
//   constructor
// }

// class Square extends Shape {
//   constructor
// }

// class Triangle extends Shape {
//   constructor
// }

// module.exports = {
//   Shape, Circle, Square, Triangle
// }