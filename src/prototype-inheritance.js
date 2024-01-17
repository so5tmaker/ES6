function Cat(catName) {
    var name = catName;

    this.getName = () => {
        return name;
    };
}

function Dog(nickName) {
    var name = nickName;

    this.getNickName = () => {
        return name;
    };
}

function BobCat(catName) {
    this.weight = 30;
    this.color = 'orange';
}

var cat = new Cat('David');
var dog = new Dog('Bob');

// BobCat.prototype = cat;
BobCat.prototype = dog;

var david = new BobCat();

// console.log(david.getName());
console.log(david.getNickName());