'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var employee1 = {
    name: 'Hanna',
    position: 'Project manager',
    salary: 1000
};

var employee2 = {
    name: 'Bill',
    position: 'Junior developer',
    salary: 800
};

function promote(newPosition, salaryRise) {
    this.position = newPosition;
    this.salary += salaryRise;

    return this.name + ' is ' + this.position + ' and earns $' + this.salary;
}
HannaValues = ['Department head', 500];
console.log(promote.call.apply(promote, [employee1].concat(_toConsumableArray(HannaValues)))); // Hanna is Department head and earns $1500
console.log(promote.call(employee2, 'Middle developer', 300)); // Bill is Middle developer and earns $1100