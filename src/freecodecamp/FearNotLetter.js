
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
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    const newStr = alphabet.substring(alphabet.indexOf(str[0]), str.length + 1);
    console.log(newStr);
    const letter = newStr.split('').filter((item) => (str.indexOf(item) === -1))
    return letter[0];
}

// console.log(fearNotLetter("abce"));
// console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
// console.log(fearNotLetter("bcdf"));
// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

