const Validate = require('../index.js');
const { Triangle, Circle, Square } = require("../lib/shapes.js");

//things to test 
/*
    3. when i pick triangle  it uses the traingle class to make it
    3.when i pcik circle it uses the cricle class to make it 
    when i pcik squar it uses the square to make it
    4. when i pick a color the shape is that color 

*/
describe('Triangle', () => {
    it('should return true if the svg file is made with the triangle constructor', () => {
        const triangle = new Triangle('green', 'ART');
        let result = triangle.color;
        console.log(result);
        expect(result).toBeTruthy();
    });
});

describe('Circle', () => {
    it('should return true if the svg file is made with the Circle constructor', () => {
        const circle = new Circle('blue', 'ART');
        let result = circle.color;
        console.log(result);
        expect(result).toBeTruthy();
    });
});

describe('Square', () => {
    it('should return true if the svg file is made with the square constructor', () => {
        const square = new Square('red', 'ART');
        let result = square.color;
        console.log(result);
        expect(result).toBeTruthy();
    });
});
