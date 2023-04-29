const inquirer = require("inquirer");
const fs = require("fs"); 
const Shape = require("./shapes")

// Ask initial questions 
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter up to three characters for your logo',
      name: 'chars',
      validate: function(chars){
        if (chars.length > 3) {
          return "Too many characters"
        } else {
          return true
        }
      }
    },
    {
      type: 'input',
      message: 'Please enter a text color using a keyword or a hexadecimal number',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'Please choose a logo shape',
      name: 'chosenShape',
      choices: ['circle', 'square', 'triange'],
    },
    {
      type: 'input',
      message: 'Please enter a shape color using a keyword or a hexadecimal number',
      name: 'shapeColor',
    },
  ])
  .then((response) => {
    // Build the svg string
    const newShape = new Shape(response.chars, response.textColor, response.chosenShape, response.shapeColor)
    const shapeString = newShape.buildShape()

    // Use the fs module to take in the string and use the info to generate the svg file
    const fileName = 'logo.svg'

    fs.writeFile(fileName, newShape.buildSVG(shapeString), (err) =>
    err ? console.log(err) : console.log("Generated log.svg")
    );
  })


