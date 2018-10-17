'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

// ES5
var person = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    sayHello: function sayHello() {
        console.log('Hi, my name is ' + this.firstName + ' ' + this.lastName);
    }
};
console.log('ES5', person);

// ES6
var personES6 = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    sayHello: function sayHello() {
        console.log('Hi, my name is ' + this.firstName + ' ' + this.lastName);
    }
};
console.log('ES6', personES6);

person.sayHello();

person.firstName;
person['firstName'];

var property = 'email';
person[property]; // = person['email'];

person = _defineProperty({}, property, 'billgates@microsoft.com');

// ES5
function createCar(property, value) {
    var car = {};

    car[property] = value;

    return car;
}
console.log('ES5', createCar('vin', 1));

// ES6
function createCarES6(property, value) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, property, value), _defineProperty(_ref, '_' + property, value), _defineProperty(_ref, property.toUpperCase(), value), _defineProperty(_ref, 'get' + property, function () {
        return this[property];
    }), _ref;
}

console.log('ES6', createCarES6('vin', 1));