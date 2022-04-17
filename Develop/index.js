// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { dirname } = require('path');

// TODO: Create an array of questions for user input
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
    name: "credits",
    type: "input",
    message: "If you would like to include Credits, such as Collaborators, Third party assets and the like?",
  },
  {
    name: "features",
    type: "input",
    message: "Enter details of any particular features you'd like to include here",
  },
  {
    name: "license",
    type: "list",
    message: "Select the license that applies to the Project",
    choices: [
      "No License",
      "MIT",
      "GPL 3.0",
      "BSD 2 Clause",
      "BSD 3 Clause",
      "BSD 4 Clause",


    ],
  }
];

// Function to write README file
function writeToFile(fileName, data) {
  console.log(`${fileName} and ${data.title}`);
  const fileContent = generateMarkdown.generateMarkdown(data);
  // fs.writeFileSync(__dirname + fileName, fileContent, 'utf8');
  if (fs.existsSync(`../${fileName}`)) {
    fs.unlinkSync(`../${fileName}`)
    }
  
  fs.writeFileSync(`../${fileName}`, fileContent, 'utf8');
  // return;
}

// Function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function (responses) {
      console.log(responses);
      writeToFile('readme.md', responses);
    })
    .catch((error) => {
      console.log(error.isTtyError);
    })
}

// Function call to initialize app
init();
