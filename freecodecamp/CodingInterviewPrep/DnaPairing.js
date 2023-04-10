// DNA Pairing
// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, 
// which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element.Write a function to match the missing base pairs for the provided DNA strand.
// For each character in the provided string, find the base pair character.Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C", "G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

const pairElement = (str) => {
    const arrayAT = ["A", "T"];
    const arrayCG = ["C", "G"];
    const result = [];
    for (let i = 0; i < str.length; i++) {
        let intermidArr = arrayAT.includes(str[i]) ? arrayAT : arrayCG;
        const pair = intermidArr[0] === str[i] ? intermidArr[1] : intermidArr[0];
        result.push([str[i], pair]);
    }
    return result;
}

console.log(pairElement("GCG"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));

// Hints
// Hint 1
// There are two pairs of values, A - T and C - G.
//     Hint 2
// A switch would be a natural option here, because each character in the string has 4 possible values.
//     Hint 3
// The result must be an array of arrays.

function pairElement1(str) {
    // Function to match each character with the base pair
    const matchWithBasePair = function (char) {
        switch (char) {
            case "A":
                return ["A", "T"];
            case "T":
                return ["T", "A"];
            case "C":
                return ["C", "G"];
            case "G":
                return ["G", "C"];
        }
    };

    // Find pair for every character in the string
    const pairs = [];
    for (let i = 0; i < str.length; i++) {
        pairs.push(matchWithBasePair(str[i]));
    }

    return pairs;
}

// Code Explanation

// Inside of the matchWithBasePair function, a switch is used to cover all four possible characters.
// Using if statements is another option.
// Create an empty array and use the matchWithBasePair function to push the right values to the array and return them.

// test here
console.log(pairElement1("GCG"));
console.log(pairElement1("TTGAG"));
console.log(pairElement1("CTCTA"));

function pairElement2(str) {
    // create object for pair lookup
    const pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };

    // map character to array of character and matching pair
    return str
        .split("")
        .map(x => [x, pairs[x]]);
}

// test here
console.log(pairElement1("GCG"));
console.log(pairElement2("TTGAG"));
console.log(pairElement3("CTCTA"));
// Code Explanation

// First define an object with all pair possibilities, this allows us to easily find by key or value.
// Split str into a characters array so we can use each letter to find its pair.
// Use the map function to map each character in the array of individual characters to an array
// with the character and its matching pair, creating a 2D array.