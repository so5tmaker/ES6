/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 *
 * https://leetcode.com/problems/isomorphic-strings/description/
 *
 * algorithms
 * Easy (42.47%)
 * Likes:    7721
 * Dislikes: 1670
 * Total Accepted:    1M
 * Total Submissions: 2.3M
 * Testcase Example:  '"egg"\n"add"'
 *
 * Given two strings s and t, determine if they are isomorphic.
 * 
 * Two strings s and t are isomorphic if the characters in s can be replaced to
 * get t.
 * 
 * All occurrences of a character must be replaced with another character while
 * preserving the order of characters. No two characters may map to the same
 * character, but a character may map to itself.
 * 
 * 
 * Example 1:
 * Input: s = "egg", t = "add"
 * Output: true
 * Example 2:
 * Input: s = "foo", t = "bar"
 * Output: false
 * Example 3:
 * Input: s = "paper", t = "title"
 * Output: true
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= s.length <= 5 * 10^4
 * t.length == s.length
 * s and t consist of any valid ascii character.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;

    const sMap = {};
    const tMap = {};

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];

        if (!sMap[sChar]) {
            sMap[sChar] = tChar;
        } else if (sMap[sChar] !== tChar) {
            return false;
        }

        if (!tMap[tChar]) {
            tMap[tChar] = sChar;
        } else if (tMap[tChar] !== sChar) {
            return false;
        }
    }

    console.log('sMap', sMap);
    console.log('tMap', tMap);

    return true;
};
function isIsomorphicComments(s, t) {
    // Step 1: Check if the lengths of s and t are equal
    if (s.length !== t.length) {
        return false; // If not equal, they cannot be isomorphic
    }

    // Step 2: Create maps to store character mappings
    const sMap = {}; // Mapping for characters in s
    const tMap = {}; // Mapping for characters in t

    // Step 3: Iterate through the characters of both strings
    for (let i = 0; i < s.length; i++) {
        const sChar = s[i]; // Current character in s
        const tChar = t[i]; // Current character in t

        // Step 4: Check and set mappings for s
        if (!sMap[sChar]) { // If the character is not in the map
            sMap[sChar] = tChar; // Add it with the corresponding character in t
        } else if (sMap[sChar] !== tChar) { // If it's in the map but doesn't match t
            return false; // They are not isomorphic, return false
        }

        // Step 4: Check and set mappings for t
        if (!tMap[tChar]) { // If the character is not in the map
            tMap[tChar] = sChar; // Add it with the corresponding character in s
        } else if (tMap[tChar] !== sChar) { // If it's in the map but doesn't match s
            return false; // They are not isomorphic, return false
        }
    }

    // Step 5: If no mismatches found, return true (they are isomorphic)
    return true;
}

// Test cases
console.log(isIsomorphic("egg", "add"));     // Output: true
console.log(isIsomorphic("foo", "bar"));     // Output: false
console.log(isIsomorphic("paper", "title")); // Output: true
// @lc code=end

