// Function that returns the license badge for the selected license
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
      badgeURL=' No License Selected'
  }
  return badgeURL;
}

// Function that returns the license link
function renderLicenseLink(license) {
  let licenseURL = '';
  switch (license) {
    case 'Apache 2.0':
      licenseURL = `[${license}](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'Boost 1.0':
      licenseURL = `[${ license }](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    case 'BSD 2 Clause':
      licenseURL = `[${license}](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case 'BSD 3 Clause':
      licenseURL = `[${license}](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'Creatvie Commons 1.0':
      licenseURL = `[${license}](http://creativecommons.org/publicdomain/zero/1.0/)`;
      break;
    case 'CC Attribution 4.0':
      licenseURL = `[${license}](https://creativecommons.org/licenses/by/4.0/)`;
      break;
    case 'Eclipse Public License 1.0':
      licenseURL = `[${license}](https://opensource.org/licenses/EPL-1.0)`;
      break;
    case 'GNU v3':
      licenseURL = `[${license}](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'GNU v2':
      licenseURL = `[${license}](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      break;
    case 'MIT':
      licenseURL = `[${license}](https://opensource.org/licenses/MIT)`;
      break;
    case 'Mozilla Public License 2.0':
      licenseURL = `[${license}](https://opensource.org/licenses/MPL-2.0)`;
      break;
    default:
      licenseURL = ' No License selected'
  }
  return licenseURL;
}

// function to generate the Table of Contents
function renderTableContents(data) {
  let tableContents = '';
  if (data.installation) { tableContents = `- [Installation](#installation-notes)\n` };
  if (data.usage) { tableContents = tableContents + `- [Usage](#usage)\n` };
  if (data.features) { tableContents = tableContents + `- [Features](#features)\n` };
  if (data.credits) { tableContents = tableContents + `- [Credits](#credits)\n` };
  if (data.contributing) { tableContents = tableContents + `- [Contributing](#contributing)\n` };
  if (data.tests) { tableContents = tableContents + `- [Tests](#tests)\n` };
  tableContents = tableContents + `- [Questions](#questions)\n`;
  tableContents = tableContents + `- [License](#license)\n`;
  
  return tableContents;
}

// function to generate body of the Readme
function renderBodyContents(data) {
  let bodyContents = '';
  if (data.installation) { bodyContents = `## Installation Notes  \n\n  ${data.installation}   \n\n\n` };
  if (data.usage) { bodyContents = bodyContents + `## Usage \n\n  ${data.usage}   \n\n\n` };
  if (data.features) { bodyContents = bodyContents + `## Features  \n\n  ${data.features}   \n\n\n` };
  if (data.credits) { bodyContents = bodyContents + `## Credit  \n\n  ${data.credits}   \n\n\n` };
   if (data.contributing) { bodyContents = bodyContents + `## Contributing  \n\n  ${data.contributing}   \n\n\n` };
  if (data.tests) { bodyContents = bodyContents + `## Testing  \n\n  ${data.tests}   \n\n` };
 
  return bodyContents;
}

// Function to generate the markdown for the README
function generateMarkdown(data) {
  
  return `# ${data.title}  

![License](${renderLicenseBadge(data.license)})
  

## Description

${data.description}

  
## Table of Contents

${renderTableContents(data)}


${renderBodyContents(data)}

## Questions
${data.questions}

Github:  ${data.github}

Email:  ${data.email}


## License
This project is licensed under ${renderLicenseLink(data.license)}.
`;
}

module.exports =
{
  generateMarkdown
};
