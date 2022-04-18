// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// Array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the title of the Project?",
  },
  {
    name: "description",
    type: "input",
    message: "Describe the Project",
  },
  {
    name: "installation",
    type: "input",
    message: "Enter any Installation Notes here",
  },
  {
    name: "usage",
    type: "input",
    message: "Enter any notes on Usage of the Project",
  },
  {
    name: "features",
    type: "input",
    message: "Enter details of any particular features you'd like to mention",
  },
  {
    name: "credits",
    type: "input",
    message: "Enter any Credits you'd like to acknowledge, such as Collaborators, Third party assets, etc.",
  },
  {
    name: "contributing",
    type: "input",
    message: "Enter any guidelines for contributing to the Project",
  },
  {
    name: "tests",
    type: "input",
    message: "Enter any instructions for testing",
  },
  {
    name: "github",
    type: "input",
    message: "What is your Github address",
  },
  {
    name: "email",
    type: "input",
    message: "What is your email address",
  },
  {
    name: "questions",
    type: "input",
    message: "Enter any instructions for asking questions",
  },
  {
    name: "license",
    type: "list",
    message: "Select the license that applies to the Project",
    choices: [
      "No License",
      "Apache 2.0",
      "Boost 1.0",
      "BSD 2 Clause",
      "BSD 3 Clause",
      "Creatvie Commons 1.0",
      "CC Attribution 4.0",
      "Eclipse Public License 1.0",
      "GNU v3",
      "GNU v2",
      "MIT",
      "Mozilla Public License 2.0"
    ],
  }
];

// Function to write README file
function writeToFile(fileName, data) {
  const fileContent = generateMarkdown.generateMarkdown(data);
  if (fs.existsSync(`../${fileName}`)) {
    fs.unlinkSync(`../${fileName}`)
  }
  fs.writeFileSync(`../${fileName}`, fileContent, 'utf8');
}

// Function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function (responses) {
      writeToFile('readme.md', responses);
      console.log("Successfully written to disk")
    })
    .catch((error) => {
      console.log(`Something went wrong.  This is the error message: ${error}`);
    })
}

// Function call to initialize app
init();
