let firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

// ES5
let person = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    sayHello: function sayHello() {
        console.log('ES5', `Hi, my name is ${this.firstName} ${this.lastName}`);
    },
};

Object.defineProperty(person, 'fullName', {
    get: function () {
        return this.firstName + ' ' + this.lastName;
    },
    set: function (value) {
        this.firstName = value;
    }
});
console.log('\nES5', person);
console.log('\nES5 getter fullName:', person.fullName + '\n');
person.fullName = 'Steve';
console.log('ES5 after setter fullName:', person.fullName + '\n');

// ES6
let personES6 = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    sayHello() {
        console.log('ES6', `Hi, my name is ${this.firstName} ${this.lastName}`);
    },
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        this.firstName = value;
    }
};

console.log('\nES6', personES6);