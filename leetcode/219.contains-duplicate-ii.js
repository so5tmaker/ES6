/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 *
 * https://leetcode.com/problems/contains-duplicate-ii/description/
 *
 * algorithms
 * Easy (40.89%)
 * Likes:    5604
 * Dislikes: 2889
 * Total Accepted:    781.2K
 * Total Submissions: 1.8M
 * Testcase Example:  '[1,2,3,1]\n3'
 *
 * Given an integer array nums and an integer k, return true if there are two
 * distinct indices i and j in the array such that nums[i] == nums[j] and abs(i
 * - j) <= k.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [1,2,3,1], k = 3
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [1,0,1,1], k = 1
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: nums = [1,2,3,1,2,3], k = 2
 * Output: false
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * 0 <= k <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const n = nums.length;

    if (n === 1) return false;

    let i = 0, j = 1;

    while (i < n && j < n) {
        if (nums[i] === nums[j] && -(i - j) <= k) return true;

        if (j === n - 1) { i++; j = i; }

        j++;
    }

    return false;
};
console.log(containsNearbyDuplicate([1, 2, 3, 1], k = 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], k = 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], k = 2));

var containsNearbyDuplicateAi = function (nums, k) {
    const numIndices = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        // Check if the number is a duplicate within the window
        if (numIndices.has(num) && i - numIndices.get(num) <= k) {
            return true;
        }

        // Store the index of the number
        numIndices.set(num, i);

        // Remove the index of the number that is outside the window
        if (i >= k) {
            numIndices.delete(nums[i - k]);
        }
    }

    return false;
};

console.log(containsNearbyDuplicateAi([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicateAi([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicateAi([1, 2, 3, 1, 2, 3], 2));

// @lc code=end

