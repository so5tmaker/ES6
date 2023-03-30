// Make a Person
// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. 
// The methods that take an argument must accept only one argument and it has to be a string.
// These methods must be the only available means of interacting with the object.

const Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    var firstName = firstAndLast.split(' ')[0];
    var lastName = firstAndLast.split(' ')[1];

    this.getFirstName = function () {
        return firstName;
    };

    this.getLastName = function () {
        return lastName;
    };

    this.getFullName = function () {
        return firstName + ' ' + lastName;
    };

    this.setFirstName = function (first) {
        firstName = first;
    };

    this.setLastName = function (last) {
        lastName = last;
    };

    this.setFullName = function (firstAndLast) {
        firstName = firstAndLast.split(' ')[0];
        lastName = firstAndLast.split(' ')[1];
    };
};

const bob = new Person('Bob Ross');

console.log(Object.keys(bob).length); // should always return 6.
console.log(bob instanceof Person); // should return true.
console.log(bob.firstName); // should return undefined.
console.log(bob.lastName); // should return undefined.
console.log(bob.getFirstName()); // should return the string Bob.
console.log(bob.getLastName()); // should return the string Ross.
console.log(bob.getFullName()); // should return the string Bob Ross.
bob.setFirstName("Haskell");
console.log(bob.getFullName()); // should return the string Haskell Ross after bob.setFirstName("Haskell").
bob.setLastName("Curry");
console.log(bob.getFullName()); // should return the string Haskell Curry after bob.setLastName("Curry").
bob.setFullName("Haskell Curry");
console.log(bob.getFullName()); // should return the string Haskell Curry after bob.setFullName("Haskell Curry").
console.log(bob.getFirstName()); // should return the string Haskell after bob.setFullName("Haskell Curry").
console.log(bob.getLastName()); // should return the string Curry after bob.setFullName("Haskell Curry").