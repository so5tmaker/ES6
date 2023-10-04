/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 *
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
 *
 * algorithms
 * Medium (37.19%)
 * Likes:    4850
 * Dislikes: 273
 * Total Accepted:    2M
 * Total Submissions: 4.9M
 * Testcase Example:  '"sadbutsad"\n"sad"'
 *
 * Given two strings needle and haystack, return the index of the first
 * occurrence of needle in haystack, or -1 if needle is not part of
 * haystack.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: haystack = "sadbutsad", needle = "sad"
 * Output: 0
 * Explanation: "sad" occurs at index 0 and 6.
 * The first occurrence is at index 0, so we return 0.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: haystack = "leetcode", needle = "leeto"
 * Output: -1
 * Explanation: "leeto" did not occur in "leetcode", so we return -1.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= haystack.length, needle.length <= 10^4
 * haystack and needle consist of only lowercase English characters.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

    if (haystack === needle) {
        return 0;
    }

    for (let len = 0; len < haystack.length; len++) {
        for (let start = 0; start <= haystack.length - len; start++) {
            let substring = haystack.substring(start, start + len);
            if (substring.includes(needle)) {
                return start;
            }
        }
    }

    return -1;
};

function strStr1(haystack, needle) {
    if (needle === "") {
        return 0; // If the needle is an empty string, it's always found at index 0.
    }

    const index = haystack.indexOf(needle);

    return index;
}


console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("a", "a"));
// @lc code=end

