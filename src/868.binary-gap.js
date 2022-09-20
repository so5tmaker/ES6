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
var binaryGap = function (n) {
    const binary = n.toString(2);
    console.log(binary);
    let end = binary.length - 1;
    for (end; end >= 0; end--) {
        if (binary[end] !== "0") {
            break;
        }
    }
    let quantity = 0;
    let gap = 0;
    for (let i = end - 1; i >= 0; i--) {
        const num = binary[i];
        if (num === "0") {
            quantity++;
        }
        if (num === "1") {
            gap = Math.max(quantity, gap);
            quantity = 0;
        }
    }
    return gap;
};

console.log(binaryGap(22))
// @lc code=end

