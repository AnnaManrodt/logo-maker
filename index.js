const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

//questions to get the input for the shape
inquirer
  .prompt([
    {
      type: "input",
      message: "What three letters would you like?",
      name: "letters"
    },
    {
      type: "list",
      message: "What color?",
      name: "shapeColor",
      choices: ["red", "blue", "green", "yellow", "cyan", "magenta"],
    },
    {
      type: "list",
      message: "What shape do you want?",
      name: "shape",
      choices: ["Triangle", "Circle", "Square"]
    }
  ])
  .then(response => {
    //builds the svg file
    const svgFile = `<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">`;

    if (response.letters.length !== 3) {
      console.log("Please enter exactly 3 letters");
      return;
    }

    const color = response.shapeColor;
    const letters = response.letters;


    //swithch statments to determin shape and build from there
    let shape;
    switch (response.shape) {
      case "Triangle":
        shape = new Triangle(color, letters);
        break;
      case "Circle":
        shape = new Circle(color, letters);
        break;
      case "Square":
        shape = new Square(color, letters);
        break;
      default:
        console.log("Invalid shape choice");
        return;
    }

    const svgContent = svgFile + shape.render() + `</svg>`;
// writes the actually file

    fs.writeFile("logo.svg", svgContent, function(err) {
      if (err) {
        console.error("Error writing file: " + err);
      } else {
        console.log("Generated logo.svg");
      }
    });
  });
