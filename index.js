const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the project title?",
      name: "title",
    },
    {
      type: "input",
      message: "Enter a general description of the project.",
      name: "description",
    },
    {
      type: "input",
      message: "Enter installation instructions.",
      name: "installation instructions",
    },
    {
      type: "input",
      message: "Enter usage information.",
      name: "usage information",
    },
    {
      type: "input",
      message: "Enter contribution guidelines.",
      name: "contribution guidelines",
    },
    {
      type: "input",
      message: "Enter test instructions.",
      name: "test instructions",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "githuh username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email address",
    },
  ])

  .then((data) => {
    fs.writeFile("README.md", `# ${data.title}`, (err) =>
      err ? console.log(err) : console.log("README successfully created!")
    );
  });

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
