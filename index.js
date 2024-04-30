const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes.js');
//console.log(Circle);
const questions = [
    {
        name: 'text',
        message: 'Enter three characters for your logo.'
    },
    {
       type: 'input',
       name: 'textColor',
       message: 'What would you like the text color to be?',
      
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like the logo to be?',
        choices: ['Circle','Triangle','Square']
    },
    {
        type: 'input',
        name : 'shapeColor',
        message: 'What would you like the shapes color to be ?',
        
    },
]
const shapes = {
    Circle: Circle,
    Triangle: Triangle,
    Square: Square
}

function init(listOfQuestions) {
    inquirer
        .prompt(listOfQuestions)
        .then(answers => {
            const SelectedShape = shapes[answers.shape];
             const logoClass = new SelectedShape(answers.text, answers.textColor, answers.shapeColor);
            fs.writeFile('logo.svg', logoClass.render(), (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Logo successfully created!');
                }
            });
});
}

init(questions);
