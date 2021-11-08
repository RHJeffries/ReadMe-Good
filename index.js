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
    validate: titleInput => {
      if (titleInput) {
          return true;
      } else {
          console.log('Every good project needs a title');
          return false;
      }
  }
  },
  {
    type: 'input',
    message: 'Describe  your project?',
    name: 'description',
    validate: descriptionInput => {
      if (descriptionInput) {
          return true;
      } else {
          console.log('Let everyone know what the project is about');
          return false;
      }
  }
  },
  {
    type: 'input',
    message: 'What needs to be done to install your project?',
    name: 'installation',
    validate: installationInput => {
      if (installationInput) {
          return true;
      } else {
          console.log('Need to explain how to install the project');
          return false;
      }
  }
  },
  {
    type: 'input',
    message: 'How to use your project?',
    name: 'usage',
    validate: usageInput => {
      if (usageInput) {
          return true;
      } else {
          console.log('Need to explain how to use the project');
          return false;
      }
  }
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
    validate: contributionInput => {
      if (contributionInput) {
          return true;
      } else {
          console.log('You need to enter who contributed to the project');
          return false;
      }
  }
  },
  {
    type: 'input',
    message: 'How can your project be tested?',
    name: 'tests',
    validate: testInput => {
      if (testInput) {
          return true;
      } else {
          console.log('Info is needed if there are tests or not');
          return false;
      }
  }
  },
  {
    type: 'input',
    message: 'What can you do if there is an issue?',
    name: 'questions',
    validate: questionsInput => {
      if (questionsInput) {
          return true;
      } else {
          console.log('Need to let everyone know how to reach you');
          return false;
      }
  }
  },
  {
    type: 'input',
    message: 'Enter your Github username',
    name: 'username',
    validate: usernameInput => {
      if (usernameInput) {
          return true;
      } else {
          console.log('No need to be shy, let the reader know where to find you');
          return false;
      }
  }
  },
  {
    type: 'input',
    message: 'Enter your email address',
    name: 'email',
    validate: emailInput => {
      if (emailInput) {
          return true;
      } else {
          console.log('Let the reader know how to contact you');
          return false;
      }
  }
  }

]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err)
        throw err;
    console.log('Success! Information transferred to the README!')
});
}
 
// TODO: Create a function to initialize app
function init() {
  questions()
    .then((answers) => fs.writeToFile('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
