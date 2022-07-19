module.exports = [{
type: 'input',
name: 'School',
message: 'Enter Interns school',
validate: internSchool => {
    if ( internSchool && internSchool.trim().length > 0 ) {
       return true;
    }
    else {
       console.log( "You must enter interns school" );
       return false;
    };
  }
},

{
type: 'list',
name:'Options',
message: 'Choose and option below to continue',
choices: [ 'Add Engineer profile', 'Add Manager profile', 'Done generating profiles'],
validate: Optionchoice => {
    if (Optionchoice === 'Add Engineer profile' || Optionchoice === 'Add Manager profile') {
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