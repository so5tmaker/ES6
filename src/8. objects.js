let firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

// ES5
let person = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    sayHello: function sayHello() {
        console.log('Hi, my name is ' + this.firstName + ' ' + this.lastName);
    }
};
console.log('ES5', person);

// ES6
let personES6 = {
    firstName,
    lastName,
    email,
    sayHello() {
        console.log(`Hi, my name is ${this.firstName} ${this.lastName}`);
    }
};
console.log('ES6', personES6);

person.sayHello();

person.firstName;
person['firstName'];

let property = 'email';
person[property]; // = person['email'];

person = {
    [property]: 'billgates@microsoft.com'
};

// ES5
function createCar(property, value) {
    var car = {};

    car[property] = value;

    return car;
}
console.log('ES5', createCar('vin', 1));

// ES6
function createCarES6(property, value) {
    return {
        [property]: value,
        ['_' + property]: value,
        [property.toUpperCase()]: value,
        ['get' + property]() {
            return this[property]
        }
    }

}

console.log('ES6', createCarES6('vin', 1));