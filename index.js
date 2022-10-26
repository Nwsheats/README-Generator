// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer 
    .prompt([
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
        message: 'Please enter usage information',
        name: 'usage',
    },
    {
        type: 'checkbox',
        message: 'What license are you using?',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL'],
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
        message: 'Please enter your GitHub Username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
])
.then((answers) => {
    const md = `
    # ${answers.title}

    ## Description

    ${answers.description}

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation

    ${answers.installation}

    ## Usage

    ${answers.installation}

    ## License

    ${answers.license}

    ## Contributing

    ${answers.contributing}

    ## Tests

    ${answers.tests}

    ## Questions

    ${answers.github}:
    https://github.com/${answers.github}/
    
    If you have additional questions, please reach out to me at ${answers.email}
    
    `

// TODO: Create a function to write README file
fs.writeFile('README.md', md, (err) =>
  err ? console.error(err) : console.log('Success!')
);
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
