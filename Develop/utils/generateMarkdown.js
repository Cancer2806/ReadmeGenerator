// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license && license !== 'No License') {
    return `Done That`
  }
  else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license && license !== 'No License') {
    return `Been Here`
  }
  else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license && license !== 'No License') {
    return `And That`
  }
  else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(`I'm here with ${data.title}`);
  
  return `# ${data.title}

![License](${renderLicenseBadge(data.license)})


## Description

${data.description}


## Table of Contents

- [Installation](#installation-notes)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation Notes

${data.installation}


## Credits

${data.credits}

## Features

${data.features}


## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## License

This project is licensed under ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}.
`;
}

module.exports = generateMarkdown;
