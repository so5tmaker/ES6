'use strict';

const a = 1;

function name(a) {
    return function () {
        console.log(a++);
    }
}

const func1 = name(a);
func1();
func1();
console.log(a);
// 1
// 2
// 1




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