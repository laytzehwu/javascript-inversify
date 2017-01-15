'use strict';

import { Person } from './person';
export const greeter = (person:string) => 'Hello, ' + person;
export const greetPerson = (person: Person) => 'Hello, ' +
		person.firstName + ' ' +
		person.lastName;

export * from './person';
export * from './student';