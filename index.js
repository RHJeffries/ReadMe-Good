// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([{
    type: 'input',
    message: 'What is title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Describe  your project?',
    name: 'description',
  },
  {
    type: 'confirm',
    message: 'Table of Contents',
    name: 'contents',
  },
  {
    type: 'input',
    message: 'What needs to be done to install your project?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'How to use your project?',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'What licence do you want to use?',
    name: 'licence',
    choices: ['None',
    'Apache',
    'Academic',
    'GNU',
    'ISC',
    'MIT',
    'Mozilla',
    'Open'],
  },
  {
    type: 'input',
    message: 'Who contributed to your project?',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'How can your project be tested?',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'What can you do if there is an issue?',
    name: 'questions',
  },
  {
    type: 'input',
    message: 'Enter your Github username',
    name: 'username',
  },
  {
    type: 'input',
    message: 'Enter your email address',
    name: 'email',
  }

]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {


}

// TODO: Create a function to initialize app
function init() {questions()
    // Use writeFileSync method to use promises instead of a callback function
     .then((answers) => fs.writeToFile('README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
};

// Function call to initialize app
init();
