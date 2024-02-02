// To convert an integer to a Roman numeral in JavaScript, you can follow a similar approach as before but in reverse. 
// You will define the Roman numeral representations for specific values and then iteratively 
// reduce the number, appending the appropriate numerals.


function intToRoman(num) {
    // Define a list of Roman numerals and their corresponding integer values.
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let roman = "";
    for (let i = 0; i < values.length; i++) {
        // Loop over each value-numeral pair.
        while (num >= values[i]) {
            // If the current value can be subtracted from num, do it and append the corresponding numeral.
            roman += numerals[i];
            num -= values[i];
        }
    }
    return roman;
}

// Examples
console.log(intToRoman(3));     // Output: "III"
console.log(intToRoman(58));    // Output: "LVIII"
console.log(intToRoman(1994));  // Output: "MCMXCIV"

// This function works by looping over the pairs of Roman numerals and their equivalent integer values. 
// For each pair, the function adds the Roman numeral to the string as many times as possible without 
// the remainder falling below zero, thereby reducing the integer until all of its value has been converted into Roman numeral form.