'use strict';

function Cat(catName) {
    var name = catName;

    this.getName = function () {
        return name;
    };
}

function BobCat(catName) {
    Cat.call(this, catName);

    this.weigth = 30;
    this.color = 'orange';
}

var david = new BobCat('David');

console.log(david.getName());