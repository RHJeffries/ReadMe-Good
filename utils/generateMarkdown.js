// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licence) {
  if (licence === 'None'){
    return '';
  } 
  
   else if (licence === 'Apache') {
    return `![Licence](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } 
   
   else if (licence === 'Eclipse'){
    return `![Licence](https://img.shields.io/badge/License-EPL%201.0-red.svg)`;
  }
  
   else if (licence === 'GNU') {
    return `![licence: GNU](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-green)`;
  } 
  
  else if (licence === 'ISC') {
    return `![licence: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
  }

   else if (licence === 'MIT') {
    return `![licence: MIT](https://img.shields.io/badge/license-MIT-pink)`;

  } 
  
  else if (licence === 'Mozilla') {
    return `![licence: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;

  } 
}

renderLicenseBadge()

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licence) {
if (licence === 'None'){
  return '';
}
else if (licence === 'Apache') {
  return `[Apache licence](https://opensource.org/licenses/Apache-2.0)`;
} 
 
 else if (licence === 'Eclipse'){
  return `[Eclipse licence](https://opensource.org/licenses/EPL-1.0)`;
}

 else if (licence === 'GNU') {
  return `[GNU licence](http://www.gnu.org/licenses/gpl-3.0)`;
} 

else if (licence === "ISC License (ISC)") {
  return `[ISC licence](https://img.shields.io/badge/License-ISC-blue.svg)`
}

 else if (licence === 'MIT') {
  return `[MIT licence](https://opensource.org/licenses/MIT)`;

} 

else if (licence === 'Mozilla') {
  return `[MPL 2.0 licence](https://opensource.org/licenses/MPL-2.0)`;

} 

}
renderLicenseLink()
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.licence)}

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)
  
  ## Description:
  ${data.description}
  
  ## Installation:
  ${data.installation}
  
  ## Usage:
  ${data.usage}
  
  ## License:
  Further details about the licence can be found here ${renderLicenseLink(data.licence)}
  
  ## Contribution:
  ${data.contribution}
  
  ## Testing:
  ${data.tests}
  
  ## Questions:
  - Github: [${data.username}](https://github.com/${data.username})
  - Email: [${data.email}](mailto:${data.email}) `;
 
}

module.exports = generateMarkdown;
