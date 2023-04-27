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
    const newShape = new Shape(response.chars, response.textColor, response.chosenShape, response.shapeColor)
    const shapeString = newShape.buildShape()
    const svgString = newShape.buildSVG(shapeString)
    console.log(svgString)

    // Use the fs module to take in the string and use the info to generate the svg file
    const fileName = 'logo.svg'

    fs.writeFile(fileName, newShape.buildSVG(shapeString), (err) =>
    err ? console.log(err) : console.log('Your SVG file has been successfully created!')
    );
  })


