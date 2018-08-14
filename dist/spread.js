'use strict';

var staticLanguages = ['C', 'C++', 'Java'];
var dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];
var Languages = [].concat(staticLanguages, ['C#'], dynamicLanguages, ['Python']);

console.log(Languages);

function add(x, y, z) {
    console.log(x + y + z);
}

var numbers = [1, 2, 3];
add.apply(undefined, numbers);