let firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

let person = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    sayHello() {
        console.log(`Hi, my name is ${this.firstName} ${this.lastName}`);
    }
};

person.sayHello();

person.firstName;
person['firstName'];

let property = 'email';
person[property]; // = person['email'];

person = {
    [property]: 'billgates@microsoft.com'
};

// ES5
// function createCar(property, value) {
//     var car;

//     car[property] = value;

//     return car;
// }

// ES6
function createCar(property, value) {
    return {
        [property]: value,
        ['_' + property]: value,
        [property.toUpperCase()]: value,
        ['get' + property]() {
            return this[property]
        }
    }

}

console.log(createCar('vin', 1));