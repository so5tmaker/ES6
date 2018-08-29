'use strict';

function Cat(catName) {
    var name = catName;

    this.getName = function () {
        return name;
    };
}

function BobCat(catName) {
    this.weigth = 30;
    this.color = 'orange';
}

var cat = new Cat('David');

BobCat.prototype = cat;

var david = new BobCat();

console.log(david.getName());