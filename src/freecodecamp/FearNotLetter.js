
// Problem Explanation
// You will create a program that will find the missing letter from a string and return it.If there is no missing letter, the program should return undefined.There is currently no test case for the string missing more than one letter, but if there was one, recursion would be used.Also, the letters are always provided in order so there is no need to sort them.

// Relevant Links

// String global object 2.8k
// JS String Prototype CharCodeAt 5.6k
// String.fromCharCode

// Hints
// Hint 1
// You will need to convert from character to ASCII code using the two methods provided in the description.

//     Hint 2
// You will have to check for the difference in ASCII code as they are in order.Using a chart would be very helpful.

//     Hint 3
// You will need to figure out where the missing letter is, along with handling the case that there is not missing letter as it needs an specific return value.



const fearNotLetter = (str) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const newStr = alphabet.substring(alphabet.indexOf(str[0]));
    const letter = newStr.split('').filter((item) => (str.indexOf(item) === -1))
    return letter[0];
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

function fearNotLetter1(str) {
    for (let i = 0; i < str.length; i++) {
        /* code of current character */
        const charCode = str.charCodeAt(i);
        /* if code of current character is not equal to first character + no of iteration
            then a letter was skipped */
        if (charCode !== str.charCodeAt(0) + i) {
            /* if current character skipped past a character find previous character and return */
            return String.fromCharCode(charCode - 1);
        }
    }
    return undefined;
}

// test here
console.log(fearNotLetter1("abce"));
console.log(fearNotLetter1("abcdefghjklmno"));
console.log(fearNotLetter1("stvwx"));
console.log(fearNotLetter1("bcdf"));
console.log(fearNotLetter1("abcdefghijklmnopqrstuvwxyz"));

// Code Explanation

// This solutions makes use of a for loop.
// Code of encountered character is stored in code.
// It is checked if code of current character is the expected one(no characters are skipped) 
// by using the logic - code of current character = code of first character + number of iterations.
// If a character is missing, the missing character is found and the final string is returned.
// undefined is returned if there is no missing character in the string.

// Relevant Links
// JS For Loops Explained 140
// String.length

function fearNotLetter2(str) {
    let currCharCode = str.charCodeAt(0);
    let missing = undefined;

    str
        .split("")
        .forEach(letter => {
            if (letter.charCodeAt(0) === currCharCode) {
                currCharCode++;
            } else {
                missing = String.fromCharCode(currCharCode);
            }
        });

    return missing;
}

// Code Explanation

// First we define variables to store the character code for the first letter in the string, and to store whatever missing letter we may find.
// We turn the string to an array in order to forEach through it instead of using for and while loops.
// As we forEach through our letters’ character codes, we go comparing with the one that should be in that position.
// If the current letter matches, we move the comparison variable to its next position so we can compare on the next cycle.
// If not, the missing letter will be assigned to the missing variable, which will be returned after the map is finished.
// If there are no missing characters, return undefined.

// Relevant Links
// JS String Prototype Split 

function fearNotLetter3(str) {
    for (let i = 1; i < str.length; ++i) {
        if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
}
// Code Explanation

// Loop over the string
// Check if the difference in char codes between adjacent characters in the string is more than 1(check ASCII table)
// Return the missing character(+1 from where the gap was detected)

function fearNotLetter4(str) {
    var allChars = "";
    var notChars = new RegExp("[^" + str + "]", "g");

    for (var i = 0; allChars[allChars.length - 1] !== str[str.length - 1]; i++)
        allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

    return allChars.match(notChars)
        ? allChars.match(notChars).join("")
        : undefined;
}

// test here
console.log(fearNotLetter4("abce"));

// Code Explanation

// A new string allChars is created.
// Create a regular expression notChars which selects everything except str.
// The for loop is used to add all the letters in the range to allChars.
//     match() is used to strip off the str letters from the newly created string and it is returned.
// If there are no missing characters, return undefined.

// Relevant Links
// JS Regex Resources
// JS Ternary 41
// JS String Prototype Match 32
// JS Array Prototype Join 