class Cat {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

class BobCat extends Cat {
    constructor(name){
        super(name);

        this.weigth = 30;
        this.color = 'orange';
    }
}

var david = new BobCat('David');

console.log(david.getName());