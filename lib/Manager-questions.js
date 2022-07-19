module.exports = [
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
