/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 *
 * https://leetcode.com/problems/is-subsequence/description/
 *
 * algorithms
 * Easy (49.77%)
 * Likes:    8876
 * Dislikes: 474
 * Total Accepted:    1.1M
 * Total Submissions: 2.3M
 * Testcase Example:  '"abc"\n"ahbgdc"'
 *
 * Given two strings s and t, return true if s is a subsequence of t, or false
 * otherwise.
 * 
 * A subsequence of a string is a new string that is formed from the original
 * string by deleting some (can be none) of the characters without disturbing
 * the relative positions of the remaining characters. (i.e., "ace" is a
 * subsequence of "abcde" while "aec" is not).
 * 
 * 
 * Example 1:
 * Input: s = "abc", t = "ahbgdc"
 * Output: true
 * Example 2:
 * Input: s = "axc", t = "ahbgdc"
 * Output: false
 * 
 * 
 * Constraints:
 * 
 * 
 * 0 <= s.length <= 100
 * 0 <= t.length <= 10^4
 * s and t consist only of lowercase English letters.
 * 
 * 
 * 
 * Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k
 * >= 10^9, and you want to check one by one to see if t has its subsequence.
 * In this scenario, how would you change your code?
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let k = 0;

    if (s.length === 1 && t.length === 1 && s !== t) {
        return true;
    }

    if (!t.length && s.length) {
        return false;
    }

    if (!s.length && t.length) {
        return true;
    }

    if (!s.length && !t.length) {
        return true;
    }

    for (let i = 0; i < t.length; i++) {
        if (s[k] === t[i]) {
            k++;
        }

        if (k === s.length) {
            return true;
        }
    }

    return false;
};

console.log(isSubsequence("acb", "ahbgdc"));

function isSubsequence1(s, t) {
    let sPointer = 0;
    let tPointer = 0;

    while (sPointer < s.length && tPointer < t.length) {
        if (s[sPointer] === t[tPointer]) {
            sPointer++;
        }
        tPointer++;
    }

    return sPointer === s.length;
}

// Example usage:
const s1 = "abc";
const t1 = "ahbgdc";
console.log(isSubsequence1(s1, t1)); // Output: true

const s2 = "axc";
const t2 = "ahbgdc";
console.log(isSubsequence1(s2, t2)); // Output: false

// @lc code=end

