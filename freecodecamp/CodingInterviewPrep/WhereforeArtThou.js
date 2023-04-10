const whatIsInAName = (collection, source) => {
    const fields = Object.keys(source);
    const checkValues = (item) => {
        for (let j = 0; j < fields.length; j++) {
            const field = fields[j];
            if (!item[field] || item[field] !== source[field]) {
                return false;
            }
        }
        return true;
    }
    return collection.filter(x =>
        checkValues(x));
}

console.log(whatIsInAName([
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
], { last: "Capulet" }));
console.log(whatIsInAName([
    { "apple": 1 },
    { "apple": 1 },
    { "apple": 1, "bat": 2 }],
    { "apple": 1 }));
console.log(whatIsInAName([
    { "apple": 1, "bat": 2 },
    { "bat": 2 },
    { "apple": 1, "bat": 2, "cookie": 2 }
], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 },
{ "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }],
    { "apple": 1, "cookie": 2 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 },
{ "apple": 1 },
{ "apple": 1, "bat": 2, "cookie": 2 },
{ "bat": 2 }],
    { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{ "a": 1, "b": 2, "c": 3 }],
    { "a": 1, "b": 9999, "c": 3 }));
console.log(whatIsInAName([{ "a": 1, "b": 2, "c": 3, "d": 9999 }],
    { "a": 1, "b": 9999, "c": 3 }));