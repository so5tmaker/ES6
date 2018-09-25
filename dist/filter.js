"use strict";

var tasks = [1, 6, 9, 10];
console.log(tasks.filter(function (task) {
  return tasks.indexOf(task) <= 1;
}));