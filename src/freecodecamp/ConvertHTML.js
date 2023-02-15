// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// Hints
// Hint 1
// You can use regular Expressions however I didn’t in this case.
// Hint 2
// You will benefit from a chart with all the html entities so you know which ones are the right ones to put.
//     Hint 3
// You should separate the string and work with each character to convert the right ones and then join everything back up.

const convertHTML = (str) => {
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };

    return str.split("").map(x => htmlEntities[x] || x).join('');
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos")); // should return the string Hamburgers &lt; Pizza &lt; Tacos.
console.log(convertHTML("Sixty > twelve")); // should return the string Sixty &gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"')); // should return the string Stuff in &quot;quotation marks &quot;.
console.log(convertHTML("Schindler's List")); // should return the string Schindler &apos;s List.
console.log(convertHTML("<>")); // should return the string &lt;&gt;.
console.log(convertHTML("abc")); // should return the string abc.


// Solution 1
function convertHTML1(str) {
    // Split by character to avoid problems.

    var temp = str.split("");

    // Since we are only checking for a few HTML elements, use a switch

    for (var i = 0; i < temp.length; i++) {
        switch (temp[i]) {
            case "<":
                temp[i] = "&lt;";
                break;
            case "&":
                temp[i] = "&amp;";
                break;
            case ">":
                temp[i] = "&gt;";
                break;
            case '"':
                temp[i] = "&quot;";
                break;
            case "'":
                temp[i] = "&apos;";
                break;
        }
    }

    temp = temp.join("");
    return temp;
}

console.log(convertHTML1("Dolce & Gabbana"));
console.log(convertHTML1("Hamburgers < Pizza < Tacos")); // should return the string Hamburgers &lt; Pizza &lt; Tacos.
console.log(convertHTML1("Sixty > twelve")); // should return the string Sixty &gt; twelve.
console.log(convertHTML1('Stuff in "quotation marks"')); // should return the string Stuff in &quot;quotation marks &quot;.
console.log(convertHTML1("Schindler's List")); // should return the string Schindler &apos;s List.
console.log(convertHTML1("<>")); // should return the string &lt;&gt;.
console.log(convertHTML1("abc")); // should return the string abc.

// Code Explanation

// Assign temp to str.split(''), which creates an array containing each individual character in the passed in string.
// Pass each character in the newly created array into a switch () statement.
// Replace the HTML entities with their corresponding HTML entity string(i.e. '&' becomes '&amp;' in line 51)
// temp.join('') converts the array of characters into a string to be returned.

// Solution 2

function convertHTML2(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

console.log(convertHTML2("Dolce & Gabbana"));
console.log(convertHTML2("Hamburgers < Pizza < Tacos")); // should return the string Hamburgers &lt; Pizza &lt; Tacos.
console.log(convertHTML2("Sixty > twelve")); // should return the string Sixty &gt; twelve.
console.log(convertHTML2('Stuff in "quotation marks"')); // should return the string Stuff in &quot;quotation marks &quot;.
console.log(convertHTML2("Schindler's List")); // should return the string Schindler &apos;s List.
console.log(convertHTML2("<>")); // should return the string &lt;&gt;.
console.log(convertHTML2("abc")); // should return the string abc.

// Solution 3

function convertHTML3(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    //Use map function to return a filtered str with all entities changed automatically.
    return str
        .split("")
        .map(entity => htmlEntities[entity] || entity)
        .join("");
}


console.log(convertHTML3("Dolce & Gabbana"));
console.log(convertHTML3("Hamburgers < Pizza < Tacos")); // should return the string Hamburgers &lt; Pizza &lt; Tacos.
console.log(convertHTML3("Sixty > twelve")); // should return the string Sixty &gt; twelve.
console.log(convertHTML3('Stuff in "quotation marks"')); // should return the string Stuff in &quot;quotation marks &quot;.
console.log(convertHTML3("Schindler's List")); // should return the string Schindler &apos;s List.
console.log(convertHTML3("<>")); // should return the string &lt;&gt;.
console.log(convertHTML3("abc")); // should return the string abc.