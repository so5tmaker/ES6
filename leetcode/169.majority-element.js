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
function majorityElement(nums) {
    let majority = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === majority) {
            count++;
        } else {
            count--;
        }

        if (count === 0) {
            majority = nums[i];
            count = 1;
        }
    }

    // Verify if the majority is a majority element
    count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === majority) {
            count++;
        }
    }

    if (count > nums.length / 2) {
        return majority;
    } else {
        return null; // No majority element found
    }
}

console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
console.log(majorityElement([1, 1, 1, 2, 2, 2])); // Output: 2
// @lc code=end

