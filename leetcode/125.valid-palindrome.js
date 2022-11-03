/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (str) {
    if (str.replace(/\s/g, '') === '') {
        return true;
    }
    str = str.toLowerCase().match(/[a-zа-яё]+/gui).join('');
    return str === str.split('').reverse().join('');
};

function palindrome(str) {
    str = str.toLowerCase().match(/[a-zа-яё\s]+/gui).join('');
    const len = Math.floor(str.length / 2);
    for (let i = 0; i < len; i++)
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    return true;
}

console.log(isPalindrome('   ')); // true
console.log(isPalindrome('table')); // false
console.log(isPalindrome('Анна')); // true
console.log(isPalindrome('А роза упала, на лапу Азора')); // true
console.log(palindrome('А роза упала на лапу Азора')); // true
// @lc code=end



























