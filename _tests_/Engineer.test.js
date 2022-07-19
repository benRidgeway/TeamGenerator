const Engineer = require('../lib/Engineer');

test('github account is linked using githubGrab', () => {
    const fakeGitHub = 'cmon-theres-gotta-be-a-name-available';
    const engineer = new Engineer ('Charlie', 1738, 'randomname@example.com', fakeGitHub)

    expect(engineer.githubGrab()).toBe(fakeGitHub);

});