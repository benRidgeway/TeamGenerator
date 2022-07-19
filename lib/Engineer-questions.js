module.exports = [{
    type: 'input',
    name: 'Github Username',
    message: 'Enter Engineers github Username',
    validate: githubUser => {
        if (githubUser && githubUser.trim().length > 0) {
            return true;
        }

        else {
           console.log('You must enter Engineers github Username') 
           return false;
        };
    }
},  

{
    type: 'list',
    name:'Options',
    message: 'Choose and option below to continue',
    choices: [ "Add Intern profile", 'Add Manager profile', 'Done generating profiles'],
    validate: Optionchoice => {
        if(Optionchoice === 'Add Intern profile' || Optionchoice === 'Add Manager profile') {
            return true;
        }
        else if (Optionchoice === 'Done generating profiles') {
            return true;
        }
        else {
            console.log('You must choose an option')
            return false;
        };
    }
}];
















