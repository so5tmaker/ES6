/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
*/ https://www.youtube.com/watch?v=RlmR7CGyOk4&feature=share&utm_source=EJGixIgBCJiu2KjB4oSJEQ
// https://leetcode.com/problems/longest-consecutive-sequence/solution/
// Approach 1: Brute Force
var longestConsecutive = function (nums) {

    const arrayContains = (arr, num) => {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] == num) {
                return true;
            }
        }

        return false;
    }

    let longestStreak = 0;

    for (const num of nums) {

        let currentNum = num;
        let currentStreak = 1;

        while (arrayContains(nums, currentNum + 1)) {
            currentNum += 1;
            currentStreak += 1;
        }

        longestStreak = Math.max(longestStreak, currentStreak);
    }

    return longestStreak;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
// Approach 2: Sorting
const longestConsecutive1 = (nums) => {
    if (nums.length == 0) {
        return 0;
    }

    nums.sort((a, b) => a - b);

    let longestStreak = 1;
    let currentStreak = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            if (nums[i] == nums[i - 1] + 1) {
                currentStreak += 1;
            }
            else {
                longestStreak = Math.max(longestStreak, currentStreak);
                currentStreak = 1;
            }
        }
    }

    return Math.max(longestStreak, currentStreak);
}
console.log(longestConsecutive1([100, 4, 200, 1, 3, 2]))
// Approach 3: HashSet and Intelligent Sequence Building
const longestConsecutive2 = (nums) => {
    const num_set = new Set(nums);

    let longestStreak = 0;

    for (let num of num_set) {
        if (!num_set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (num_set.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}
console.log(longestConsecutive2([100, 4, 200, 1, 3, 2]))
// @lc code=end
// https://www.youtube.com/watch?v=RlmR7CGyOk4&feature=share&utm_source=EJGixIgBCJiu2KjB4oSJEQ
// var longestConsecutive = function (nums) {if (nums-- null nums.length-- 0) {return // [5,4,3,2,1] const set - new Set(nums); let max - 0; for(let num of set){ if(set.has(num-1)){ continue let currNum - num; let currMax = 1; while (set.has(currNum + 1)){ currNu currMax+ max = Math.max(max, currMax) return max
// https://www.youtube.com/watch?v=G1qPZA4DoaU&feature=share&utm_source=EJGixIgBCJiu2KjB4oSJEQ
// var longestConsecutive = function (nums) { if (!nums | | nums.length < 1) } return 0; 
// nums.sort(function (a, b) { return a - b; }); var res = 1, i = 0; 
// while (i < nums.length - 1) { var pre = i, cur = i + 1, repeat = 0; 
// while (nums[cur] == nums[pre] || nums[cur] == nums[pre] + 1) { if (nums[cur] == nums[pre]) 
// { repeat; } pre cur; cur++; } 
// res = Math.max(res, (pre - i + 1 - repeat)); 
// if (pre > i) { i=pre; } else { i++; return res; }