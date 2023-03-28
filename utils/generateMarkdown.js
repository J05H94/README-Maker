// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge, link;
  
  switch (license) {
    case "MIT":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      link = "(https://opensource.org/licenses/MIT)";
      break;
    case "Apache-2.0":
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
      link = "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPL-3.0":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      link = "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
    default:
      badge = "";
      link = "";
  }
  
  return badge + link;
}

function renderLicenseBadge(license) {
  if (license == '') {
    return '';
  }
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license == '') {
    return '';
  }
  return `"(https://www.gnu.org/licenses/${license})"`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
// merged into generateMarkdown function
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let content = `
    # ${data.title}
    ## Description
    ${data.description}
    ## Table of Contents
    <ul>
    <li>Installation</li>
    <li>Usage</li>
    <li>Contributions</li>
    <li>Tests</li>
    <li>Licenses</li>
    </ul>
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## Contributions
    ${data.contribution}
    ## Tests
    ${data.test}
    ## Licenses
    ${renderLicenseBadge(data.license)}
    ${renderLicenseLink(data.license)}
    ## Questions
    ${data.gitHub}
    ${data.email}
    `;
  return content;
}

module.exports = generateMarkdown;