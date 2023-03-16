// Binary Agents
// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

// Problem Explanation
// This problem is very straight forward - you start with a string that represents a sentence in binary code, 
// and you need to translate that into words.There is not a direct way to do this so you will have to translate twice.

// Relevant Links

// String.prototype.charCodeAt 4.5k
// String.fromCharCode 

// Hints
// Hint 1
// You should first convert from binary to decimal before translating those values into characters.

// Hint 2
// Things are easier when focusing on smaller parts, divide the input to focus on one letter at a time.

// Hint 3
// Make sure that each time you transcode a character from binary to decimal, you reset whatever variable 
// you used to keep track of the ones.Also do not forget to turn everything back into one string.

const binaryAgent = (str) => {
    let newStr = '';
    const strArray = str.split(' ');
    for (let i = 0; i < strArray.length; i++) {
        newStr += String.fromCharCode(parseInt(strArray[i], 2));
    }
    return newStr;
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")); // should return the string Aren't bonfires fun!?
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")); // should return the string I love FreeCodeCamp!