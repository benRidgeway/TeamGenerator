const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./lib/Employee')
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

function addEmployee() {
    return inquirer.prompt([
        {
        type: "input",
        name: "EmployeeName",
        message: "Enter Employee's name", 
        validate: employeeName => {
           if ( employeeName && employeeName.trim().length > 0 ) {
              return true;
           }
           else {
              console.log( "You must enter employee's name" );
              return false;
           }
           }
        },
        {
            type: "input",
            name: "EmployeeId",
            message: "Enter employee's ID:",
            validate: employeeId => {
               if ( employeeId && employeeId.trim().length > 0 ) {
                  return true;
               }
               else {
                  console.log( "You must enter employee's ID:" );
                  return false;
               };
            }
         },
         {
            type: "input",
            name: "EmployeeEmail",
            message: "Enter employee's email address:",
            validate: employeeEmail => {
               if ( employeeEmail && employeeEmail.trim().length > 0 ) {
                  if ( /^.+@.+\..+$/gi.test( employeeEmail )) {
                     return true;
                  };
               }
               else {
                  console.log( "You must enter employee's email address:" );
                  return false;
               };
            }
         },
    ])

    .then (function(data) {
        const employeeName = '';
        const employeeId = '';
        const employeeEmail = '';
        const teamMember = new Employee (employeeName, employeeId, employeeEmail)
        teamArr.push(teamMember)

        addManager();
    }) 
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

function init() {
inquirer.prompt([
    {
        message: '',
        name: ''
    }
    ])
    addEmployee();
    // addManager();
    // nonManagerMember();  
};

init();