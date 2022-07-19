module.exports = [{
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
           };
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

    {
        type: 'list',
        name:'Options',
        message: 'Choose and option below to continue',
        choices: [ 'Add Engineer profile', "Add Intern profile", 'Add Manager profile', 'Done generating profiles'],
        validate: Optionchoice => {
            if(Optionchoice === 'Add Engineer profile' || Optionchoice === 'Add Intern profile' || Optionchoice === 'Add Manager profile') {
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
