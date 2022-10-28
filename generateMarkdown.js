
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
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
  
  
`;
}

module.exports = generateMarkdown;
