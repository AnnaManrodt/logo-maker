// promt to enter text for log 
// enter a text color 
// enter a shape 
// and color for the shape
// it says its generate a logo 
//  it create a text file called logonot html files in this 
//this is just text were we create certian elements using svg is a type of file that does stuff 
// the outter <svg is all the same 
// the inner is what chnages, 
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

inquirer
  .prompt([
    {
      type: "input",
      message: "What three letters would you like?",
      name: "letters"
    },
    {
      type: "input",
      message: "What color?",
      name: "shapeColor"
    },
    {
      type: "list",
      message: "What shape do you want?",
      name: "shape",
      choices: ["Triangle", "Circle", "Square"]
    }
  ])
  .then(response => {
    const svgFile = `<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">`;

    if (response.letters.length !== 3) {
      console.log("Please enter exactly 3 letters");
      return;
    }

    const color = response.shapeColor;
    const letters = response.letters;

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

    fs.writeFile("logo.svg", svgContent, function(err) {
      if (err) {
        console.error("Error writing file: " + err);
      } else {
        console.log("Generated logo.svg");
      }
    });
  });
