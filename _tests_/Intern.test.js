const Intern = require('../lib/Intern');

test('get school with schoolGrab', () => {
    const fakeSchool = 'UNCC';
    const intern = new Intern('Charlie', 1738, 'randomname@example.com', fakeSchool);

    expect(intern.school).toBe(fakeSchool);
})