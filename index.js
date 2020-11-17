const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Enter a project description.",
      name: "description",
    },
    {
      type: "input",
      message: "Enter installation instructions.",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter usage information.",
      name: "usage",
    },
    {
      type: "input",
      message: "Enter credits.",
      name: "credits",
    },
    {
      type: "list",
      message: "Choose a license type.",
      name: "license",
      choices: ["MIT", "Apache 2.0", "GNU GPLv3"],
    },
    {
      type: "input",
      message: "Enter contribution guidelines.",
      name: "contributions",
    },
    {
      type: "input",
      message: "Enter test instructions.",
      name: "tests",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ])

  .then((data) => {
    switch (data.license) {
      case "MIT": {
        licenseImage =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        console.log(licenseImage);
        break;
      }
      case "Apache 2.0": {
        licenseImage =
          "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        console.log(licenseImage);
        break;
      }
      case "GNU GPLv3": {
        licenseImage =
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        console.log(licenseImage);
        break;
      }
      default:
        break;
    }

    fs.writeFile(
      "README.md",
      "# " +
        `${data.title}\n\n` +
        licenseImage +
        "\n\n" +
        "## Description\n\n" +
        `${data.description}\n\n` +
        "## Table of Contents\n\n" +
        "* [Installation](#installation)\n" +
        "* [Usage](#usage)\n" +
        "* [Credits](#credits)\n" +
        "* [License](#license)\n" +
        "* [Contributing](#contributing)\n" +
        "* [Tests](#tests)\n" +
        "* [Questions](#questions)\n\n" +
        "## Installation\n\n" +
        `${data.installation}\n\n` +
        "## Usage\n\n" +
        `${data.usage}\n\n` +
        "## Credits\n\n" +
        `${data.credits}\n\n` +
        "## License\n\n" +
        "This project is " +
        `${data.license}` +
        " licensed.\n\n" +
        "## Contributing\n\n" +
        `${data.contributions}\n\n` +
        "## Tests\n\n" +
        `${data.tests}\n\n` +
        "## Questions\n\n" +
        "For more information about this application, please feel free to contact me via the links below.\n\n" +
        "- [Github](https://www.github.com/" +
        `${data.github})\n` +
        "- [Email](mailto:" +
        `${data.email}` +
        ")\n",
      (success) =>
        success
          ? console.log(success)
          : console.log("README successfully created!")
    );
  });
