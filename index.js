// promt to enter text for log 
// enter a text color 
// enter a shape 
// and color for the shape
// it says its generate a logo 
//  it create a text file called logonot html files in this 
//this is just text were we create certian elements using svg is a type of file that does stuff 
// the outter <svg is all the same 
// the inner is what chnages, 
const inquirer = require("inquirer")
const { ColdObservable } = require("rxjs/internal/testing/ColdObservable")
const fs = require("fs");
const {Traingle} = require("./lib/shapes")
const {Circle} = require("./lib/shapes")
const {Square} = require("./lib/shapes")
// the text has a fill vaule that matches what eve the user chose for the ColdObservable, 

// text property 

// <svg version = 1.1 width = 300 height = "200" 
// circle cs=150 cy= 100 r=80 filll = Color 

//use classes thing about say we wrote a class to handle the svg part 


inquirer
  .prompt([
    {
      type: "input",
      message: "What three letters would you like?",
      name: "letters"
    },
    {
      type: "input",
      message: "what color",
      name: "shapeColor"
    },
    {
      type: "list",
      message: "what shape do you want?",
      name: "shape",
      choices: ["Triangle", "Circle", "Square"]
    },
  ]) .then (response => {
    const svgFile = `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    ${response.shape}
    ${response.shapeColor}
    ${response.letters}
    `

    if (response.letters.length !== 3) {
      console.log("Please enter exactly 3 letters");
      return;
    }

      const color = response.shapeColor;
      const letters = response.letters;


      switch (response.shape) {
        case "Triangle":
          const traingle = new Traingle(color, letters)
          render(traingle)
          break;
        case "Circle":
          const circle = new Circle(color, letters);
          render(circle)
          break;
        case "Square":
          const square = new Square(color, letters);
            render(square);
          break;
        default:
          console.log("Invalid shape choice");
          return;
      }
      function render(shape){
      fs.writeFile("logo.svg", svgFile, function(err){
        if(err){
          console.error("Error writing file:" + err)
        }
        else{
          console.log("Generated logo.svg")
        }
      })
    }
})