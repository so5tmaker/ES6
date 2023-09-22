/*
 * @lc app=leetcode id=135 lang=javascript
 *
 * [135] Candy
 *
 * https://leetcode.com/problems/candy/description/
 *
 * algorithms
 * Hard (40.50%)
 * Likes:    7110
 * Dislikes: 526
 * Total Accepted:    414.5K
 * Total Submissions: 957.2K
 * Testcase Example:  '[1,0,2]'
 *
 * There are n children standing in a line. Each child is assigned a rating
 * value given in the integer array ratings.
 * 
 * You are giving candies to these children subjected to the following
 * requirements:
 * 
 * 
 * Each child must have at least one candy.
 * Children with a higher rating get more candies than their neighbors.
 * 
 * 
 * Return the minimum number of candies you need to have to distribute the
 * candies to the children.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: ratings = [1,0,2]
 * Output: 5
 * Explanation: You can allocate to the first, second and third child with 2,
 * 1, 2 candies respectively.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ratings = [1,2,2]
 * Output: 4
 * Explanation: You can allocate to the first, second and third child with 1,
 * 2, 1 candies respectively.
 * The third child gets 1 candy because it satisfies the above two
 * conditions.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * n == ratings.length
 * 1 <= n <= 2 * 10^4
 * 0 <= ratings[i] <= 2 * 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    const n = ratings.length;
    const candies = new Array(n).fill(1);

    // Traversing the ratings array twice is necessary to ensure that 
    // the minimum number of candies is distributed correctly according to 
    // the given requirements.Let me explain why both traversals are needed:

    // Left-to-Right Traversal: In the first traversal from left to right, 
    // we ensure that a child with a higher rating than their left neighbor 
    // gets at least one more candy than their left neighbor.
    // This ensures that the left neighbor receives the correct 
    // minimum number of candies based on the child to their left.

    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Right-to-Left Traversal: The left-to-right traversal alone 
    // does not account for cases where a child should receive more candies than their right neighbor.
    // The right-to-left traversal is necessary to address this.
    // In this traversal, we check if a child has a higher rating than 
    // their right neighbor and if they currently have fewer candies.
    // If both conditions are met, we update their candy count to be 
    // one more than their right neighbor.
    // This step ensures that children with higher ratings than their 
    // right neighbors receive the correct minimum number of candies.
    // By performing both left-to-right and right-to-left traversals, 
    // we guarantee that the candies are distributed optimally according to 
    // the given requirements, where children with higher ratings get 
    // more candies than their neighbors, and each child has at least one candy.
    // This two-pass approach ensures that we consider both the left and 
    // right neighbors of each child when determining the minimum number of candies to distribute.
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
            candies[i] = candies[i + 1] + 1;
        }
    }

    return candies.reduce((sum, val) => sum + val, 0);
};

console.log(candy([1, 0, 2]));
console.log(candy([1, 2, 2]));
// @lc code=end