const inquirer = require("inquirer");
const fs = require("fs");




const { generatePage } = require("./Develop/utils/generateHTML.js");


function questions() {

};

function init() {
    questions().then((data) => {
        generatePage(data);
    });
}

init();