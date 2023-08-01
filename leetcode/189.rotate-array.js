/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 *
 * https://leetcode.com/problems/rotate-array/description/
 *
 * algorithms
 * Medium (39.05%)
 * Likes:    15244
 * Dislikes: 1695
 * Total Accepted:    1.6M
 * Total Submissions: 4M
 * Testcase Example:  '[1,2,3,4,5,6,7]\n3'
 *
 * Given an integer array nums, rotate the array to the right by k steps, where
 * k is non-negative.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [-1,-100,3,99], k = 2
 * Output: [3,99,-1,-100]
 * Explanation: 
 * rotate 1 steps to the right: [99,-1,-100,3]
 * rotate 2 steps to the right: [3,99,-1,-100]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= nums.length <= 10^5
 * -2^31 <= nums[i] <= 2^31 - 1
 * 0 <= k <= 10^5
 * 
 * 
 * 
 * Follow up:
 * 
 * 
 * Try to come up with as many solutions as you can. There are at least three
 * different ways to solve this problem.
 * Could you do it in-place with O(1) extra space?
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    nums = [...nums.splice(k + 1), ...nums.splice(0, k + 1)]
    console.log(nums)
};

rotate([1, 2, 3, 4, 5, 6, 7], 3)

const nums = [1, 2, 3, 4, 5, 6, 7];
console.log([...nums.splice(4), ...nums.splice(0, 4)])

function rotateArray1(nums, k) {
    k = k % nums.length; // Handle k greater than the array length
    if (k === 0) return nums; // No rotation needed

    const cutIndex = nums.length - k;
    const cutElements = nums.splice(cutIndex); // Cut elements from cutIndex to the end
    nums.unshift(...cutElements); // Move cut elements to the beginning of the array
    return nums;
}

console.log(rotateArray1([1, 2, 3, 4, 5, 6, 7], 3)); // Output: [5, 6, 7, 1, 2, 3, 4]

function rotateArray2(nums, k) {
    k = k % nums.length; // Handle k greater than the array length
    if (k === 0) return nums; // No rotation needed

    const cutIndex = nums.length - k;
    const cutElements = nums.slice(cutIndex); // Get elements from cutIndex to the end
    const rotatedArray = cutElements.concat(nums.slice(0, cutIndex)); // Concatenate the sliced arrays
    return rotatedArray;
}

console.log(rotateArray2([1, 2, 3, 4, 5, 6, 7], 3)); // Output: [5, 6, 7, 1, 2, 3, 4]


// @lc code=end

