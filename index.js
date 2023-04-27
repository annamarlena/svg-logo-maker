const inquirer = require("inquirer");
const fs = require("fs"); 
// const { Shape, Circle, Square, Triangle } = require("./shapes")

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
    console.log(response)
  })


