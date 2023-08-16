/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 *
 * https://leetcode.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Medium (38.30%)
 * Likes:    12967
 * Dislikes: 458
 * Total Accepted:    956.9K
 * Total Submissions: 2.4M
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * You are given a 0-indexed array of integers nums of length n. You are
 * initially positioned at nums[0].
 * 
 * Each element nums[i] represents the maximum length of a forward jump from
 * index i. In other words, if you are at nums[i], you can jump to any nums[i +
 * j] where:
 * 
 * 
 * 0 <= j <= nums[i] and
 * i + j < n
 * 
 * 
 * Return the minimum number of jumps to reach nums[n - 1]. The test cases are
 * generated such that you can reach nums[n - 1].
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [2,3,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2. Jump
 * 1 step from index 0 to 1, then 3 steps to the last index.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [2,3,0,1,4]
 * Output: 2
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= nums.length <= 10^4
 * 0 <= nums[i] <= 1000
 * It's guaranteed that you can reach nums[n - 1].
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    const n = nums.length;

    if (n <= 1) return 0;

    let jumps = 1; // Initialize jumps to 1 since you start at the first index
    let current = nums[0]; // The maximum index reachable from the current index
    let next = nums[0]; // The maximum index reachable from the next jump

    for (let i = 1; i < n; i++) {
        if (i > current) {
            // If you've reached the current maximum index, then make a jump
            jumps++;
            current = next;
        }

        next = Math.max(i + nums[i], next);
    }

    return jumps;
};
console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));
console.log(jump([1, 2, 1, 1, 1]));
// @lc code=end

