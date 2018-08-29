class Cat {
    constuctor(catName) {
        this.name = catName;
    }

    getName() {
        return this.name;
    }
}

class BobCat extends Cat {

    constructor(catName){
        super(catName);

        this.weigth = 30;
        this.color = 'orange';
    }

}

var david = new BobCat('David');

console.log(david.getName());