/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 *
 * https://leetcode.com/problems/summary-ranges/description/
 *
 * algorithms
 * Easy (46.69%)
 * Likes:    3700
 * Dislikes: 1987
 * Total Accepted:    473.1K
 * Total Submissions: 951.8K
 * Testcase Example:  '[0,1,2,4,5,7]'
 *
 * You are given a sorted unique integer array nums.
 * 
 * A range [a,b] is the set of all integers from a to b (inclusive).
 * 
 * Return the smallest sorted list of ranges that cover all the numbers in the
 * array exactly. That is, each element of nums is covered by exactly one of
 * the ranges, and there is no integer x such that x is in one of the ranges
 * but not in nums.
 * 
 * Each range [a,b] in the list should be output as:
 * 
 * 
 * "a->b" if a != b
 * "a" if a == b
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [0,1,2,4,5,7]
 * Output: ["0->2","4->5","7"]
 * Explanation: The ranges are:
 * [0,2] --> "0->2"
 * [4,5] --> "4->5"
 * [7,7] --> "7"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [0,2,3,4,6,8,9]
 * Output: ["0","2->4","6","8->9"]
 * Explanation: The ranges are:
 * [0,0] --> "0"
 * [2,4] --> "2->4"
 * [6,6] --> "6"
 * [8,9] --> "8->9"
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 0 <= nums.length <= 20
 * -2^31 <= nums[i] <= 2^31 - 1
 * All the values of nums are unique.
 * nums is sorted in ascending order.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    const n = nums.length;
    nums.sort();
    const newNums = [];
    j = 0;

    if (n === 1) newNums.push(String(nums[0]));

    const pushNums = (num1, num2) => {
        return (num1 < 0) ? [num2, num1] : [num1, num2];
    }

    for (let i = 1; i < n; i++) {
        const current = nums[i - 1];

        if (current + 1 < nums[i]) {
            const newPushNums = pushNums(nums[j], current);
            newNums.push(String(newPushNums[0]) + (j === i - 1 ? '' : '->' + String(newPushNums[1])));
            j = i === n - 1 ? j : i;
        }

        if (i === n - 1 && j !== i) {
            const newPushNums = pushNums(nums[j], nums[i]);
            newNums.push(((current + 1 === nums[i]) ? newPushNums[0] + '->' + String(newPushNums[1]) : '' + nums[i]));
        }
    }

    return newNums;
};

// console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
// console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
// console.log(summaryRanges([0, 1, 2]));
// console.log(summaryRanges([-2147483648, -2147483647, 2147483647]));
// console.log(summaryRanges([0, 1, 2, 4, 5, 7, 9, 10, 12, 14, 15, 16, 27, 28]));

function findRanges(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        let start = nums[i];
        let end = nums[i];

        while (i + 1 < nums.length && nums[i + 1] - nums[i] === 1) {
            i++;
            end = nums[i];
        }

        if (start === end) {
            result.push(`${start}`);
        } else {
            result.push(`${start}->${end}`);
        }
    }

    return result;
}

console.log(findRanges([0, 1, 2, 4, 5, 7])); // Output: ["0->2", "4->5", "7"]
console.log(findRanges([0, 2, 3, 4, 6, 8, 9])); // Output: ["0", "2->4", "6", "8->9"]
console.log(summaryRanges([0, 1, 2]));
console.log(findRanges([-2147483648, -2147483647, 2147483647]));
console.log(findRanges([0, 1, 2, 4, 5, 7, 9, 10, 12, 14, 15, 16, 27, 28]));
// @lc code=end

