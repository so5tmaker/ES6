"use strict";

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// Array.prototype.reduce()
// Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.

var array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
var initialValue = 0;
var sumWithInitial = array1.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
}, initialValue);

console.log(sumWithInitial);
// expected output: 10