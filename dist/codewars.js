"use strict";

// function countBy(x, n) {
//     const nIndexes = Array.from(Array(n).keys());
//     let z = nIndexes.map(i => (i + 1) * x);
//     return z;
// }
var countBy = function countBy(x, n) {
  return Array.from({ length: n }, function (v, k) {
    return (k + 1) * x;
  });
};
console.log(countBy(1, 10));