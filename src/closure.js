'use strict';

const a = 1;

function getName(a) {
    return function () {
        console.log(a++);
    }
}

const func1 = getName(a);
func1(); // 1
func1(); // 2
console.log(a); // 1


const User = function () {
    this.name = 'Alex';
    console.log(this);
    return {
        name: 'Sasha',
        getName() {
            console.log(this, this.name);
            return this.name;
        },
        getArrowName: () => {
            console.log(this, this.name);
            return this.name;
        }
    };
}

const u = new User();

console.log(u);
u.getName();
u.getArrowName();