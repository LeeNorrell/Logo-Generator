class Shape {
    constructor(text,textColor, shapeColor) {
        this.text= text;
        this.textColor= textColor;
        this.shapeColor= shapeColor;
    }

    render () {
        this.createTemplate(this.text, this.textColor, this.shapeColor);
        return this.wrapSvg(this.template);
    }

    wrapSvg(content) {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200" >${content}
                 <text x="50%" y="50%" dominant-baseline="middle" fontsize="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
                </svg>`
    }
}

class Circle extends Shape {
    template;
    constructor (text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    createTemplate () {
        this.template = `
        <circle fill="${this.shapeColor}" cx="150" cy="100" r="100"/> 
        `
    }
}

class Triangle extends Shape {
    template;
    constructor (text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    createTemplate () {
        this.template = `
        <polygon fill="${this.shapeColor}" points="100,10 150,190 50,190" />
        `
    }
}

class Square extends Shape {
    template;
    constructor (text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    createTemplate () {
        this.template = `
        <rect fill="${this.shapeColor}" x="10" y="10" width="30" height="30" /> 
        `
    }
}

module.exports = {
    Circle, Triangle, Square
};