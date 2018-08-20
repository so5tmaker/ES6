'use strict';

function first(callback) {
    console.log(1);
    callback();
}

function second(a, b) {
    console.log(a * b);
}

first(function () {
    second(5, 7);
});

first(function () {
    second(5, 7);
});

//el.addEventListener('click', () => { runAction() });

function showMsg(name, status, callback) {
    if (callback && typeof callback === 'function') {
        callback();
    } else {
        console.log('Hello ' + name + ', your status is ' + status + '.');
    }
}

showMsg('John', 'Admin', function () {
    console.log('Hello this message is not supported!');
});

showMsg('John', 'Admin');

var required = function required(val) {
    return val && val.length;
};
var maxLength = function maxLength(len) {
    return function (val) {
        return !val || val.length <= len;
    };
};