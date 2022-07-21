const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employeeQuestions = require('./lib/Employee-questions');
const managerQuestions = require('./lib/Manager-questions');
const engineerQuestions = require('./lib/Engineer-questions');
const internQuestions = require('./lib/Intern-questions');
const generatePage = require("./src/HTMLTemplate");

let teamArr = [];

const writeToFile = (generateArr) => {
    return new Promise((resolve, reject) => {
    fs.writeFile('./dist/newfile.HTML', generateArr.join(""), function(err) {
        if (err) {
            reject(err);
            return;
        };
        resolve({
            ok:true,
            message: 'File created. New File in dist folder'
            });
        });   
    });
};

//Generates HTML
function generateHtml() {
    const HtmlArr = generatePage.generateHtml( teamArr );
    writeToFile( HtmlArr );
};

function addEngineer() {
    inquirer.prompt(engineerQuestions) 
    .then (function(data) {
        const engineerName = this.name;
        const engineerId = this.id;
        const engineerEmail = this.email;
        const engineergithubUser = data.engineergithubUser;
        const teamMember = new Engineer(engineerName, engineerId, engineerEmail, engineergithubUser)

        teamArr.push( teamMember );

        nonManagerMember();
    })
}

function addIntern() {
    inquirer.prompt(internQuestions) 
    .then ( function(data) {
        const internName = this.name;
        const internId = this.id;
        const internEmail = this.email;
        const internSchool = data.internSchool;
        const teamMember = new Intern(internName, internId, internEmail, internSchool)

        teamArr.push(teamMember);

        nonManagerMember();
    })
}

function nonManagerMember() {
    inquirer.prompt( employeeQuestions )
    .then( function( data ) {
       switch ( data.menuChoices ) {
          case "Add an Engineer Profile":
             addEngineer();
             break;
          case "Add an Intern Profile":
             addIntern();
             break;
          case "Done Generating Profiles":
             generateHtml();
          break;
       };
    });
};

function addManager() {
    inquirer.prompt( managerQuestions )
    .then( function(data) {
        const managerName = this.name;
        const managerId = this.id;
        const managerEmail = this.email;
        const managerOffice = data.managerOffice;
        const teamMember = new Manager(managerName, managerId, managerEmail, managerOffice);

        teamArr.push( teamMember );

        nonManagerMember();
    })
};

function init() {
inquirer.prompt([
    {
        message: ''
    }
    ])
}

init();