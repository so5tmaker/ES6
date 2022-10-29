/*
 * @lc app=leetcode id=1968 lang=javascript
 *
 * [1968] Array With Elements Not Equal to Average of Neighbors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let rearrangeArray = function (nums) {
    nums.sort((a, b) => a - b); // sorts array in ascending order  
    let result = [];
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        result.push(nums[left++]);
        result.push(nums[right--]);
    }
    if (left == right) result.push(nums[left]);
    // In case array length is odd we only need to insert the middle element once.
    return result;
}
// @lc code=end

