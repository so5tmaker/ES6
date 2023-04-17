// Find the Symmetric Difference
// The mathematical term symmetric difference(△ or ⊕) of two sets is the set of elements which are
// in either of the two sets but not in both.For example, for sets A = { 1, 2, 3} and B = { 2, 3, 4}, A △ B = { 1, 4 }.

// The set which contains the elements which are either in set A or in set B 
// but not in both is called the symmetric difference between two given sets.
// It is represented by A ⊝ B and is read as a symmetric difference of set A and B. 

// A = {1, 2, 3, 4, 5, 6} B = {3, 4, 5, 6, 7, 8} => {1,2,7,8}

// Symmetric difference is a binary operation, which means it operates on only two elements. 
// So to evaluate an expression involving symmetric differences among three elements(A △ B △ C),
// you must complete one operation at a time.Thus, for sets A and B above,
// and C = { 2, 3 }, A △ B △ C = (A △ B) △ C = { 1, 4 } △ { 2, 3 } = { 1, 2, 3, 4 }.

// Create a function that takes two or more arrays and returns an array of their symmetric difference. 
// The returned array must contain only unique values(no duplicates).

const diff = (arr1, arr2) => [
    ...arr1.filter(e => !arr2.includes(e)),
    ...arr2.filter(e => !arr1.includes(e))
];

const sym = (...args) => [...new Set(args.reduce(diff))];

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));

