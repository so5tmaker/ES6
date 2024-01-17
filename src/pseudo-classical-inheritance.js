class Cat {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

class BobCat extends Cat {
    constructor(name) {
        super(name);

        this.weight = 30;
        this.color = 'orange';
    }
}

class TomCat extends Cat {
    constructor(name) {
        super(name);

        this.weight = 40;
        this.color = 'blue';
    }
}

var bob = new BobCat('Bob');
var tom = new TomCat('Tom');

console.log(bob.getName(), bob.weight, bob.color);
console.log(tom.getName(), tom.weight, tom.color);