'use strict';

var firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

var person = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    sayHello: function sayHello() {
        console.log('Hi, my name is ' + this.firstName + ' ' + this.lastName);
    },

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        this.firstName = value;
    }
};

// ES5
// Object.defineProperty(person, 'fullName', {
//     get: function () {
//         return this.firstName + ' ' + this.lastName;
//     },
//     set: function (value) {
//         this.firstName = value;
//     }
// });

console.log(person);