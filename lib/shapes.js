class Svg {
    constructor() {
        this.version = "1.1";
        this.width = "300";
        this.height = "200";
        this.xmlns = "http://www.w3.org/2000/svg";
    }

    render() {
        return `<svg version="${this.version}" width="${this.width}" height="${this.height}" xmlns="${this.xmlns}">`;
    }
}

class Circle extends Svg {
    constructor(color, letters) {
        super();
        this.color = color ;
        this.letters = letters ;
    }

    render() {
        return `${super.render()}<circle cx="150" cy="100" r="80" fill="${this.color} " />
        <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="white">${this.letters}</text>`;
    }
}

class Triangle extends Svg {
    constructor(color, letters) {
        super();
        this.color = color;
        this.letters = letters;
    }

    render() {
        return `${super.render()}<polygon points='150, 18 244, 182 56, 182' fill="${this.color} " />
        <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="white">${this.letters}</text>`;
    }
}

class Square extends Svg {
    constructor(color, letters) {
        super();
        this.color = color;
        this.letters = letters;
    }

    render() {
        return `${super.render()}<rect width='200' height='200' x='10' y='10'  fill="${this.color} " />
        <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="white">${this.letters}</text>`;
    }
}

module.exports = { Svg ,Triangle, Square, Circle };
