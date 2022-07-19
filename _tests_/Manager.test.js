const Manager = require ('../lib/Manager');
// const Employee = require('../lib/Employee');

// const managerMock = require ('../_mocks_/Manager.mock.js')



test('returns a name', () => {
    const fakeName = 'Charlie';
    const fakeManager = new Manager(fakeName, 1738, "randomname@example.com", 1739);
    expect(fakeManager.name).toBe(fakeName);

});

test('returns an id', () => {
    const fakeId = 'Charlie';
    const fakeManager = new Manager('Charlie', fakeId, "randomname@example.com", 1739);
    expect(fakeManager.id).toBe(fakeId);

});

test('returns a email', () => {
    const fakeEmail = 'randomname@example.com';
    const fakeManager = new Manager('Charlie', 1738, fakeEmail, 1739);
    expect(fakeManager.email).toBe(fakeEmail);

});

test('returns office number', () => {
    const fakeOffice = 1739;
    const fakeManager = new Manager('Charlie', 1738, "randomname@example.com", fakeOffice);
    expect (fakeManager.officeNumber).toBe(fakeOffice);
});


























