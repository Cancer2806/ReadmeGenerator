// Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let badgeURL = '';
  switch (license) {
    case 'Apache 2.0':
      badgeURL = `https://img.shields.io/badge/License-Apache_2.0-blue.svg`;
      break;
    case 'Boost 1.0':
      badgeURL = `https://img.shields.io/badge/License-Boost_1.0-lightblue.svg`;
      break;
    case 'BSD 2 Clause':
      badgeURL = `https://img.shields.io/badge/License-BSD_2--Clause-orange.svg`;
      break;
    case 'BSD 3 Clause':
      badgeURL = `https://img.shields.io/badge/License-BSD_3--Clause-blue.svg`;
      break;
    case 'Creatvie Commons 1.0':
      badgeURL = `https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg`;
      break;
    case 'CC Attribution 4.0':
      badgeURL = `https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg`;
      break;
    case 'Eclipse Public License 1.0':
      badgeURL = `https://img.shields.io/badge/License-EPL_1.0-red.svg`;
      break;
    case 'GNU v3':
      badgeURL = `https://img.shields.io/badge/License-GPLv3-blue.svg`;
      break;
    case 'GNU v2':
      badgeURL = `https://img.shields.io/badge/License-GPL_v2-blue.svg`;
      break;
    case 'MIT':
      badgeURL = `https://img.shields.io/badge/License-MIT-yellow.svg`;
      break;
    case 'Mozilla Public License 2.0':
      badgeURL = `https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg`;
      break;
    default:
      badgeURL='No License'
  }
  return badgeURL;
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  let licenseURL = '';
  switch (license) {
    case 'Apache 2.0':
      licenseURL = `https://opensource.org/licenses/Apache-2.0`;
      break;
    case 'Boost 1.0':
      licenseURL = `ttps://www.boost.org/LICENSE_1_0.txt`;
      break;
    case 'BSD 2 Clause':
      licenseURL = `https://opensource.org/licenses/BSD-2-Clause`;
      break;
    case 'BSD 3 Clause':
      licenseURL = `https://opensource.org/licenses/BSD-3-Clause`;
      break;
    case 'Creatvie Commons 1.0':
      licenseURL = `http://creativecommons.org/publicdomain/zero/1.0/`;
      break;
    case 'CC Attribution 4.0':
      licenseURL = `https://creativecommons.org/licenses/by/4.0/`;
      break;
    case 'Eclipse Public License 1.0':
      licenseURL = `https://opensource.org/licenses/EPL-1.0`;
      break;
    case 'GNU v3':
      licenseURL = `https://www.gnu.org/licenses/gpl-3.0`;
      break;
    case 'GNU v2':
      licenseURL = `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`;
      break;
    case 'MIT':
      licenseURL = `https://opensource.org/licenses/MIT`;
      break;
    case 'Mozilla Public License 2.0':
      licenseURL = `https://opensource.org/licenses/MPL-2.0`;
      break;
    default:
      licenseURL = 'No License'
  }
  return licenseURL;
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

{Delete those that don't apply for any particular application - don't forget to remove this part either :)}

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
