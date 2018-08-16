'use strict';

function greet(greeting, name) {
    console.log(greeting + ' ' + name);
}

function greet() {
    var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'friend';

    console.log(greeting + ' ' + name);
}

greet('Hi,', 'Bill');
greet('Hi,');

function sum() {
    console.log(arguments instanceof Array);

    var sum = 0;

    Array.prototype.forEach.call(arguments, function (value) {
        sum += value;
    });
    console.log(sum);
}

function sum() {
    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    console.log(values instanceof Array);

    var sum = 0;

    values.forEach(function (value) {
        sum += value;
    });
    console.log(sum);
}

sum(5, 7, 2, 10);