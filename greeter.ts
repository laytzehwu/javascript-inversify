'use strict';

function greeter(person: string) {
    return "Hello, " + person;
}

console.log(
	'Call greeter with simple string. Result =>',
	greeter('Lay')
);
// Compile fail!
// console.log(greeter([1,2,3]));

interface Person {
	firstName: string;
	lastName: string;
}

function greetPerson(person: Person) {
	return 'Hello, ' +
		person.firstName + ' ' +
		person.lastName;
}
// Compile fail, the parameter has to match with interface Person
// console.log(greetPerson('Lay'));
console.log(
	'Call the function which requires its parameter match to interface. \
	Result => ',
	greetPerson({
		firstName: 'Tzeh Wu', lastName: 'Lay'
	})
);

class Student {
	fullName: string;
	constructor(
		// Those parameters declared as public will immediate become object properties
		public firstName,
		public middleInitital,
		public lastName
	)
	{
		this.fullName = firstName + ' ' +
			middleInitital + ' ' +
			lastName;
	}
}

const studentA = new Student('Tzeh Wu', '', 'Lay');
console.log(
	'Call function with a object:',
	studentA,
	"\nCall greetPerson with the output => ",
	greetPerson(studentA)
);