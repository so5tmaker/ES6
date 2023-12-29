function Person(firstName, lastName, born) {
    // this = {}
    // this.__proto__ = Person.prototype
    this.firstName = firstName;
    this.lastName = lastName;
    this.born = born;
    // return this;
}

Person.prototype.age = function () {
    var now = new Date();
    return now.getFullYear() - this.born;
}

var lam = new Person('Vasya', 'Pupkin', 1990);
iam.age(); // 31 (assuming the current year is 2021)

class Person {
    constructor(firstName, lastName, born) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.born = born;
    }
}

// Usage
const personInstance = new Person('John', 'Doe', 1990);
// Classes in JavaScript provide a much clearer and concise syntax for creating constructors and handling inheritance.
// They're mostly syntactical sugar over the existing prototype-based inheritance and don't introduce 
// a new object - oriented inheritance model.Behind the scenes, the class keyword works similarly to constructor functions,
// but with an improved syntax and additional features like getters, setters, static methods,
// and inheritance through the extends keyword.