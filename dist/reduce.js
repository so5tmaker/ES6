"use strict";

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function (a, b) {
    return a.concat(b);
    console.log(a);
});

console.log(flattened);