const Validate = require('../index.js');
const { Triangle, Circle, Square } = require("../lib/shapes.js");

//tests if constuctor class was used to make this shape
describe('Triangle', () => {
    it('should return true if the svg file is made with the triangle constructor', () => {
        const triangle = new Triangle('green', 'ART');
        let result = triangle.color;
        console.log(result);
        expect(result).toBeTruthy();
    });
});

//tests if constuctor class was used to make this shape
describe('Circle', () => {
    it('should return true if the svg file is made with the Circle constructor', () => {
        const circle = new Circle('blue', 'ART');
        let result = circle.color;
        console.log(result);
        expect(result).toBeTruthy();
    });
});

//tests if constuctor class was used to make this shape
describe('Square', () => {
    it('should return true if the svg file is made with the square constructor', () => {
        const square = new Square('red', 'ART');
        let result = square.color;
        console.log(result);
        expect(result).toBeTruthy();
    });
});
