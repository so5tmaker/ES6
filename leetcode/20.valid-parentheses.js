/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (40.77%)
 * Likes:    22536
 * Dislikes: 1536
 * Total Accepted:    3.9M
 * Total Submissions: 9.8M
 * Testcase Example:  '"()"'
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "()"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "()[]{}"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: s = "(]"
 * Output: false
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= s.length <= 10^4
 * s consists of parentheses only '()[]{}'.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValidMy = function (s) {
    if (s.length === 0) return false;

    const stack = [];
    const parentheses = { '(': ')', '[': ']', '{': '}' };

    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if (parentheses[element]) { // if such element exists in parentheses it means that is an open parenthesis 
            stack.push(element); // add an open parenthesis
        } else {
            const topElement = stack.pop(); // remove the last element from an array and return it, if the array is empty, undefined is returned and the array is not modified.
            if (parentheses[topElement] !== element) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
console.log(isValidMy("([{([{}])}])"));
console.log(isValidMy("()"));
console.log(isValidMy("()[]{}"));
console.log(isValidMy("(]"));
console.log(isValidMy("{[]}"));
console.log(isValidMy("(){}}{"));
console.log('*******************');

function isValid(s) {
    const stack = []; // Create an empty array to serve as a stack for opening brackets
    const parenthesesMap = { // Map each opening bracket to its corresponding closing bracket
        '(': ')',
        '{': '}',
        '[': ']',
    };

    for (let i = 0; i < s.length; i++) { // Loop through each character in the input string
        const char = s[i]; // Get the current character

        if (parenthesesMap[char]) { // If the character is an opening bracket
            stack.push(char); // Push it onto the stack
        } else { // If the character is not an opening bracket, assume it is a closing bracket
            if (stack.length === 0) {
                return false; // Unmatched closing bracket
            }

            const lastOpen = stack.pop(); // Pop the last opening bracket from the stack
            if (parenthesesMap[lastOpen] !== char) {
                return false; // Mismatched brackets
            }
        }
    }

    return stack.length === 0; // All brackets must be closed at the end
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("{[]}"));
console.log(isValid("(){}}{"));
// @lc code=end

