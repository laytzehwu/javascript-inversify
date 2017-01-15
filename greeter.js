'use strict';
function greeter(person) {
    return "Hello, " + person;
}
console.log('Call greeter with simple string. Result =>', greeter('Lay'));
function greetPerson(person) {
    return 'Hello, ' +
        person.firstName + ' ' +
        person.lastName;
}
// Compile fail, the parameter has to match with interface Person
// console.log(greetPerson('Lay'));
console.log('Call the function which requires its parameter match to interface. \
	Result => ', greetPerson({
    firstName: 'Tzeh Wu', lastName: 'Lay'
}));
var Student = (function () {
    function Student(
        // Those parameters declared as public will immediate become object properties
        firstName, middleInitital, lastName) {
        this.firstName = firstName;
        this.middleInitital = middleInitital;
        this.lastName = lastName;
        this.fullName = firstName + ' ' +
            middleInitital + ' ' +
            lastName;
    }
    return Student;
}());
var studentA = new Student('Tzeh Wu', '', 'Lay');
console.log('Call function with a object:', studentA, "\nCall greetPerson with the output => ", greetPerson(studentA));
