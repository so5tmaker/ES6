/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 *
 * https://leetcode.com/problems/happy-number/description/
 *
 * algorithms
 * Easy (54.13%)
 * Likes:    9644
 * Dislikes: 1281
 * Total Accepted:    1.3M
 * Total Submissions: 2.3M
 * Testcase Example:  '19'
 *
 * Write an algorithm to determine if a number n is happy.
 * 
 * A happy number is a number defined by the following process:
 * 
 * 
 * Starting with any positive integer, replace the number by the sum of the
 * squares of its digits.
 * Repeat the process until the number equals 1 (where it will stay), or it
 * loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy.
 * 
 * 
 * Return true if n is a happy number, and false if not.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: n = 19
 * Output: true
 * Explanation:
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: n = 2
 * Output: false
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= n <= 2^31 - 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const nums = [];
    let result = 0;
    let s = String(n);
    while (result !== 1) {
        for (let i = 0; i < s.length; i++) {
            result += Math.pow(s[i], 2);
        }
        if (result === 1) return true;
        if (nums.includes(result)) return false;
        nums.push(result);
        s = String(result);
        result = 0;
    }

    return true;
};
console.log(isHappy(19));
console.log(isHappy(2));
// @lc code=end

