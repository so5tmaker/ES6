let add = (x, y) => x + y;
console.log(add(6, 7));

let square = x => x * x;
console.log(square(6));

let giveMeAnswer = () => 42;
console.log(giveMeAnswer());

let log = () => console.log('Logging');
log();

let multiply = (x, y) => { let result = x * y; return result; }
console.log(multiply(3, 7));

let getPerson = () => ({ name: 'John' });
console.log(getPerson());

(() => console.log('IIFE  — pronounced \'iffy\' — Immediately Invoked Function Expression'))();

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
numbers.forEach(num => sum += num);
console.log(sum);

let squared = numbers.map(n => n * n);
console.log(squared);

let person = {
    name: 'Bob',
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
        console.log(this);
    }
};
person.greet();

let person_ = {
    name: 'Bob',
    greet: () => {
        console.log(`Hello, my name is ${this.name}`);
        console.log(this);
    }
};
person_.greet();

let _person = {
    name: 'Bob',
    greet: function () {
        var that = this;
        // window.setTimeout(function () { 
        setTimeout(function () {
            console.log(`Hello, my name is ${that.name}`);
            console.log('\'this\' is', this);
            console.log('\'that\' is ', that);
        }, 2000);

    }
};
_person.greet();

let person_arr = {
    name: 'Bob',
    greet: function () {
        // window.setTimeout(function () { 
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`);
            console.log('\'this\' is', this);
        }, 2000);

    }
};
person_arr.greet();

let bind_person = {
    name: 'Bob',
    greet: function () {
        // window.setTimeout(function () { 
        setTimeout(function () {
            console.log(`Hello, my name is ${this.name}`);
            console.log('\'this\' is', this);
        }.bind(this), 2000);

    }
};
bind_person.greet();