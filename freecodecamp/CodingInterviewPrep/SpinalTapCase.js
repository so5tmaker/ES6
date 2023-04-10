const spinalCase = (str) => {
    const changeUpper = (str) => {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            let character = str[i];

            if (i !== 0 && str[i - 1] !== '-' && character !== '-' && character === character.toUpperCase()) {
                character = '-' + character.toLowerCase();
            }
            result += character.toLowerCase();
        }
        return result;
    }
    return changeUpper(str.replaceAll(' ', '-').replaceAll('_', ''));
};

function spinalCase1(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;

    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();
}
// Code Explanation
// regex contains the regular expression /\s +| _ + /g, which will select all white spaces and underscores.
// The first replace() puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.
// While returning the string, another replace() replaces spaces and underscores with dashes using regex.

function spinalCase2(str) {
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    // Split on whitespace and underscores and join with dash
    return str
        .toLowerCase()
        .split(/(?:_| )+/)
        .join("-");
}
// Code Explanation
// Similar to the first solution, the first replace() puts a space before any encountered uppercase characters in the string str 
// so that the spaces can be replaced by dashes later on.
// Instead of using replace() here to replace whitespace and underscores with dashes, the string is split() 
// on the regular expression / (?: _ | ) + / and join()-ed on -.

function spinalCase3(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins

    return str
        .split(/\s|_|(?=[A-Z])/)
        .join("-")
        .toLowerCase();
}
// Code Explanation
// Split the string at one of the following conditions(converted to an array)
// a whitespace character[\s] is encountered
// underscore character[_] is encountered
// or is followed by an uppercase letter[(?= [A - Z])]
// Join the array using a hyphen(-)
// Lowercase the whole resulting string

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));