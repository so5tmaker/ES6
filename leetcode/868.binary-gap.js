"use strict";

/*
 * @lc app=leetcode id=868 lang=javascript
 *
 * [868] Binary Gap
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function binaryGap(n) {
    var binary = n.toString(2);
    console.log(binary);
    var end = binary.length - 1;
    for (end; end >= 0; end--) {
        if (binary[end] !== "0") {
            break;
        }
    }
    var quantity = 0;
    var gap = 0;
    for (var i = end - 1; i >= 0; i--) {
        var num = binary[i];
        if (num === "0") {
            quantity++;
        }
        if (num === "1") {
            gap = Math.max(quantity, gap);
            quantity = 0;
        }
    }
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

    }
    return gap;
};

console.log(binaryGap(22));
// @lc code=end