// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your Project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What does your application do?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please enter usage information:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What license are you using?',
        name: 'license',
        choices: ['MIT', 'APACHE', 'GPL', 'None'],
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are your testing instructions?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Please enter your GitHub Username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
]

function start() {
    inquirer.prompt(questions)
    .then((answers) => {
        fs.writeFile('README.md', generateMarkdown({...answers}), (err) =>
        err ? console.error(err) : console.log('Success!')
      );
    });
}

start();




