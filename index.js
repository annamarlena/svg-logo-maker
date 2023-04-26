const inquirer = require("inquirer");
const fs = require("fs"); 
const { Shape, Circle, Square, Triangle } = require("./shapes")

inquirer.prompt([
  {
    type: 'input',
    message: 'Please enter up to three characters for your logo',
    chars: 'chars',
  },
  {
    type: 'input',
    message: 'Please enter a text color using a keyword or a hexadecimal number',
    name: 'textColor',
  },
  {
    type: 'list',
    message: 'Please choose a logo shape',
    name: 'shape',
    choices: ['circle', 'square', 'triange'],
  },
  {
    type: 'input',
    message: 'Please enter a shape color using a keyword or a hexadecimal number',
    name: 'shapeColor',
  },
])

.then((data) => {
  const filename = `new-logo.svg`
  const svg = createLogo(data)

  fs.writeFile(filename, svg, (err) =>
  err ? console.log(err) : console.log('Your logo has been successfully created!')
  );
})

