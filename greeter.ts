'use strict';

import { greeter, greetPerson, Student } from './modules/greeter';

console.log(
	'Call greeter with simple string. Result =>',
	greeter('Lay')
);
// Compile fail!
// console.log(greeter([1,2,3]));

// Compile fail, the parameter has to match with interface Person
// console.log(greetPerson('Lay'));
console.log(
	'Call the function which requires its parameter match to interface. \
	Result => ',
	greetPerson({
		firstName: 'Tzeh Wu', lastName: 'Lay'
	})
);

const studentA = new Student('Tzeh Wu', '', 'Lay');
console.log(
	'Call function with a object:',
	studentA,
	"\nCall greetPerson with the output => ",
	greetPerson(studentA)
);