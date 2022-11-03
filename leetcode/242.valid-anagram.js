/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (strA, strB) {
    const aCharObj = buildCharObject(strA);
    const bCharObj = buildCharObject(strB);

    if (Object.keys(aCharObj).length !== Object.keys(bCharObj).length) {
        return false;
    }

    for (let char in aCharObj) {
        if (aCharObj[char] !== bCharObj[char]) {
            return false;
        }
    }
    return true;
};

function buildCharObject(str) {
    const charObj = {};
    str = str.toLowerCase().replace(/[^\w]/g);
    for (let char of str) {
        charObj[char] = charObj[char] + 1 || 1;
    }

    return charObj;
}


// Oneliner
const anagram = (a, b) => [...a.toLowerCase()].sort().toString() === [...b.toLowerCase()].sort().toString();

// console.log(isAnagram('hello', 'bye'));
console.log(isAnagram('friend', 'Finder'));
console.log(anagram('friend', 'Finder'));
// @lc code=end

