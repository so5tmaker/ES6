/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let majorityElement = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === majorityElement) {
            count++;
        } else {
            count--;
        }

        if (count === 0) {
            majorityElement = nums[i];
            count = 1;
        }
    }

    return majorityElement;
};
const nums = [3, 3, 4, 2, 4, 4, 2, 4, 4];
console.log(majorityElement(nums)); // Output: 4
// @lc code=end

