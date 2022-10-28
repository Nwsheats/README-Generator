// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


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
        message: 'Please enter usage information',
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
        message: 'Please enter your GitHub Username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
]


inquirer.prompt(questions)
.then((answers) => {
    const md = `
# ${answers.title}


![Badge](https://img.shields.io/badge/LICENSE-${answers.license}-pink?style=for-the-badge&logo=github)


## Description

${answers.description}


--


## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


--


## Installation

${answers.installation}


--


## Usage

${answers.installation}


--


## License

This application is utilizing the following License: ${answers.license}



--


## Contributing

${answers.contributing}


--


## Tests

${answers.tests}


--


## Questions


GitHub Repository Link: https://github.com/${answers.github}/

If you have additional questions, please reach out to me at ${answers.email}

--


`

// TODO: Create a function to write README file
fs.writeFile('README.md', md, (err) =>
  err ? console.error(err) : console.log('Success!')
);
});


