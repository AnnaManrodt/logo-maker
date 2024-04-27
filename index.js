// promt to enter text for log 
// enter a text color 
// enter a shape 
// and color for the shape
// it says its generate a logo 
//  it create a text file called logonot html files in this 
//this is just text were we create certian elements using svg is a type of file that does stuff 
// the outter <svg is all the same 
// the inner is what chnages, 

const { response } = require("express")
const { default: inquirer } = require("inquirer")
const { ColdObservable } = require("rxjs/internal/testing/ColdObservable")

the text has a fill vaule that matches what eve the user chose for the ColdObservable, 

text property 

// <svg version = 1.1 width = 300 height = "200" 
// circle cs=150 cy= 100 r=80 filll = Color 

//use classes thing about say we wrote a class to handle the svg part 

class Svg {
  constructor(){
    this.version = "1.1",
    this.width - "300",
    this.height = "200",
    this.xmlns ="http://www.w3.org/2000/svg"
  }

  render(){
    //gather the data above and render and html tag
    return `<vs verison = ${this.version}........`
  }
}

class Circle{
  constructor(color, ){
    this.color = fdsa,
    
  }
  render(){


  }
}


inquirer.prompt([
  {
    type: "list",
    message: "what shape do you want?",
    name: "shape"
  },
  {
    type: "input",
    message: "what color",
    name: "shapeColor"
  },
  {
    type: "input",
    message: "what three letters would you like?",
    name: "letters"
  }
]) .then (response => {
  if( response.shape === "circle"){
    const shape = newCirle(response.shapeColor)
  }
})