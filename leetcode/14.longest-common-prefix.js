/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (40.47%)
 * Likes:    15931
 * Dislikes: 4225
 * Total Accepted:    2.7M
 * Total Submissions: 6.5M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lowercase English letters.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = '', newPref = '';

    if (strs.length === 1) {
        return strs[0];
    }

    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];

        if (!str.length) {
            return '';
        }

        for (let j = 0; j < str.length; j++) {
            newPref = str.substring(0, j + 1);
            for (let k = i + 1; k < strs.length; k++) {
                const kPref = strs[k].substring(0, j + 1);

                if (newPref === kPref) {
                    prefix = newPref;
                } else {
                    return prefix.substring(0, j);
                }
            }
        }
    }

    return prefix;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["reflower", "flow", "flight"]));
console.log(longestCommonPrefix(["a"]));

var longestCommonPrefixSort = function (strs) {
    if (strs.length === 0) {
        return "";
    }

    // Sort the array to ensure that the shortest string is first.
    strs.sort((a, b) => a.length - b.length);

    // Take the shortest string as the reference.
    const reference = strs[0];

    for (let i = 0; i < reference.length; i++) {
        const char = reference[i];

        // Check if the current character matches all other strings.
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                // If not, return the prefix found so far.
                return reference.slice(0, i);
            }
        }
    }

    // If we've reached this point, the entire reference string is the prefix.
    return reference;
};

console.log(longestCommonPrefixSort(["flower", "flow", "flight"]));
console.log(longestCommonPrefixSort(["dog", "racecar", "car"]));
console.log(longestCommonPrefixSort(["reflower", "flow", "flight"]));
console.log(longestCommonPrefixSort(["a"]));
// @lc code=end

