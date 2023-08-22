function Person(firstName, lastName, born) {
    // this = {}
    // this.__proto__ = Person.prototype
    this.firstName = firstName;
    this.lastName = lastName;
    this.born = born;
    // return this;
}

Person.prototype.age = function () {
    var now = new Date();
    return now.getFullYear() - this.born;
}

var lam = new Person('Vasya', 'Pupkin', 1990);
iam.age(); // 31 (assuming the current year is 2021)
