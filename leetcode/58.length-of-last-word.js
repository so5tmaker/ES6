/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 *
 * https://leetcode.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (39.69%)
 * Likes:    4097
 * Dislikes: 202
 * Total Accepted:    1.4M
 * Total Submissions: 3M
 * Testcase Example:  '"Hello World"'
 *
 * Given a string s consisting of words and spaces, return the length of the
 * last word in the string.
 * 
 * A word is a maximal substring consisting of non-space characters only.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "Hello World"
 * Output: 5
 * Explanation: The last word is "World" with length 5.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "   fly me   to   the moon  "
 * Output: 4
 * Explanation: The last word is "moon" with length 4.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: s = "luffy is still joyboy"
 * Output: 6
 * Explanation: The last word is "joyboy" with length 6.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= s.length <= 10^4
 * s consists of only English letters and spaces ' '.
 * There will be at least one word in s.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const splits = s.split(' ').filter(s => s !== "");
    return splits[splits.length - 1].length;
};

function lengthOfLastWord1(s) {
    // Trim any leading or trailing spaces
    s = s.trim();

    // Split the string into words using spaces as the delimiter
    const words = s.split(' ');

    // Check if there are any words in the array
    if (words.length === 0) {
        return 0; // No words found
    }

    // Get the last word from the array and return its length
    const lastWord = words[words.length - 1];
    return lastWord.length;
}
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord1("   fly me   to   the moon  "));
// @lc code=end

