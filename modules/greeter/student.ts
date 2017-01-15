'use strict';

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
};

export { Student };