// Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license && license !== 'No License') {
    return `https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue`;
  }
  else {
    return 'No License'
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license && license !== 'No License') {
    return `Been Here`
  }
  else {
    return 'No License'
  }
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license && license !== 'No License') {
    return `And Done That`
  }
  else {
    return ''
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}

![License](${renderLicenseBadge(data.license)})


## Description

${data.description}


## Table of Contents

- [Installation](#installation-notes)
- [Usage](#usage)
- [Credits](#credits)
- [Features](#Features)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
- [License](#license)

{Delete those that don't apply - don't forget to remove this part either :)}

## Installation Notes

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}


## Features

${data.features}


## Contributing

If you would like to contribute, please follow these guidelines: ${data.contributing}


## Tests

${data.tests}

## Questions
Github:  ${data.github}
Email:  ${data.email}

## License

This project is licensed under ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}.
`;
}

module.exports =
{
  generateMarkdown
};
