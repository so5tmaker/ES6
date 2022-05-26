'use strict';

console.log(1);
setTimeout(function () {
    console.log(2);
});
var promise1 = new Promise(function (resolve) {
    console.log(3);
    resolve(4);
});
var promise2 = new Promise(function (resolve) {
    console.log(5);
    resolve(6);
});
promise1.then(console.log);
promise2.then(console.log);
console.log(7);

var bar = function bar() {
    return console.log('bar', undefined);
};
var baz = function baz() {
    return console.log('baz');
};
var foo = function foo() {
    console.log('foo');
    setTimeout(bar, 0);
    baz();
};
foo();