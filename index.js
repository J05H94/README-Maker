// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of this project: ",
  },
  {
    type: "input",
    name: "description",
    message:
      "Provide a short description explaining the what, why, and how of your project: ",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project: ",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use: ",
  },
  {
    type: "input",
    name: "contribution",
    message: "How should others contribute: ",
  },
  {
    type: "input",
    name: "test",
    message: "How can this code be tested: ",
  },
  {
    type: "input",
    name: "license",
    message: "What license, if any, would you like: ",
  },
  {
    type: "input",
    name: "gitHub",
    message: "What is your gitHub username: ",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email: ",
  },
];

// TODO: Create a function to write README file // fileName got cut from paramaters
function writeToFile(data) {
  fs.appendFile("NewREADME.md", content, (err) =>
    // if theres an error, log the error. otherwise, log 'Commit logged!'
    err ? console.error(err) : console.log("NewREADME made!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile(data);
  });
}

// Function call to initialize app
init();
