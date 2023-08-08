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
const maxProfit = function (prices) {
    let max = 0;
    let price = prices[0];
    for (let i = 1; i < prices.length; i++) {
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

var maxProfitBad = function (prices) {
    let k = 0;
    let res = 0;
    const getMax = (k, arr) => {
        let max = 0;
        for (let i = k + 1; i < arr.length; i++) {
            max = Math.max(arr[i] - arr[k], max);
        }
        return max;
    }

    while (k < prices.length) {
        res = Math.max(res, getMax(k, prices));
        k++;
    }

    return res;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
