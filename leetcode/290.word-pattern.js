/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 *
 * https://leetcode.com/problems/word-pattern/description/
 *
 * algorithms
 * Easy (40.34%)
 * Likes:    6804
 * Dislikes: 866
 * Total Accepted:    594.1K
 * Total Submissions: 1.4M
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * Given a pattern and a string s, find if s follows the same pattern.
 * 
 * Here follow means a full match, such that there is a bijection between a
 * letter in pattern and a non-empty word in s.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: pattern = "abba", s = "dog cat cat dog"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: pattern = "abba", s = "dog cat cat fish"
 * Output: false
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: pattern = "aaaa", s = "dog cat cat dog"
 * Output: false
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= pattern.length <= 300
 * pattern contains only lower-case English letters.
 * 1 <= s.length <= 3000
 * s contains only lowercase English letters and spaces ' '.
 * s does not contain any leading or trailing spaces.
 * All the words in s are separated by a single space.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const sArray = s.split(' ');

    if (pattern.length !== sArray.length) {
        return false;
    }

    const sMap = {};
    const pMap = {};

    for (let i = 0; i < sArray.length; i++) {
        const sWord = sArray[i];
        const pChar = pattern[i];

        if (!sMap[sWord]) {
            sMap[sWord] = pChar;
        } else if (sMap[sWord] !== pChar) {
            return false;
        }

        if (!pMap[pChar]) {
            pMap[pChar] = sWord;
        } else if (pMap[pChar] !== sWord) {
            return false;
        }
    }

    return true;
};

// Test cases
console.log(wordPattern("abba", "dog cat cat dog"));     // Output: true
console.log(wordPattern("abba", "dog cat cat fish"));     // Output: false
console.log(wordPattern("aaaa", "dog cat cat dog")); // Output: true
// @lc code=end

