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