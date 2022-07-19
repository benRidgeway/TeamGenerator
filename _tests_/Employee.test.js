const Employee = require ('../lib/Employee');

test('employee object', () => {
    const employee = new Employee ('Charlie', 1738, "randomname@example.com")

    expect(typeof(employee)).toBe('object');
    expect(employee.name).toEqual(expect.any(String));
    expect( employee.id ).toEqual( expect.any( Number ));
    expect( employee.email ).toEqual( expect.any( String ));
});

