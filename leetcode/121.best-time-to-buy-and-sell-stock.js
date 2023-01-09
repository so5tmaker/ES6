/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max = 0;
    let price = prices[0];
    for (var i = 1; i < prices.length; i++) {
        const current = prices[i];

        if (current < price) {
            price = current;
        }
        if (current - price > max) {
            max = current - price;
        };
    }
    return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
