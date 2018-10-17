'use strict';

var add = function add(x, y) {
    return x + y;
};
console.log(add(6, 7));

var square = function square(x) {
    return x * x;
};
console.log(square(6));

var giveMeAnswer = function giveMeAnswer() {
    return 42;
};
console.log(giveMeAnswer());

var log = function log() {
    return console.log('Logging');
};
log();

var multiply = function multiply(x, y) {
    var result = x * y;return result;
};
console.log(multiply(3, 7));

var getPerson = function getPerson() {
    return { name: 'John' };
};
console.log(getPerson());

(function () {
    return console.log('IIFE  — pronounced \'iffy\' — Immediately Invoked Function Expression');
})();

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
numbers.forEach(function (num) {
    return sum += num;
});
console.log(sum);

var squared = numbers.map(function (n) {
    return n * n;
});
console.log(squared);

var person = {
    name: 'Bob',
    greet: function greet() {
        console.log('Hello, my name is ' + this.name);
        console.log(this);
    }
};
person.greet();

var person_ = {
    name: 'Bob',
    greet: function greet() {
        console.log('Hello, my name is ' + undefined.name);
        console.log(undefined);
    }
};
person_.greet();

var _person = {
    name: 'Bob',
    greet: function greet() {
        var that = this;
        // window.setTimeout(function () { 
        setTimeout(function () {
            console.log('Hello, my name is ' + that.name);
            console.log('\'this\' is', this);
            console.log('\'that\' is ', that);
        }, 2000);
    }
};
_person.greet();

var person_arr = {
    name: 'Bob',
    greet: function greet() {
        var _this = this;

        // window.setTimeout(function () { 
        setTimeout(function () {
            console.log('Hello, my name is ' + _this.name);
            console.log('\'this\' is', _this);
        }, 2000);
    }
};
person_arr.greet();

var bind_person = {
    name: 'Bob',
    greet: function greet() {
        // window.setTimeout(function () { 
        setTimeout(function () {
            console.log('Hello, my name is ' + this.name);
            console.log('\'this\' is', this);
        }.bind(this), 2000);
    }
};
bind_person.greet();