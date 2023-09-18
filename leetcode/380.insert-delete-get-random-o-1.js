/*
 * @lc app=leetcode id=380 lang=javascript
 *
 * [380] Insert Delete GetRandom O(1)
 *
 * https://leetcode.com/problems/insert-delete-getrandom-o1/description/
 *
 * algorithms
 * Medium (51.87%)
 * Likes:    7895
 * Dislikes: 421
 * Total Accepted:    661.5K
 * Total Submissions: 1.3M
 * Testcase Example:  '["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"]\n' +
  '[[],[1],[2],[2],[],[1],[2],[]]'
 *
 * Implement the RandomizedSet class:
 * 
 * 
 * RandomizedSet() Initializes the RandomizedSet object.
 * bool insert(int val) Inserts an item val into the set if not present.
 * Returns true if the item was not present, false otherwise.
 * bool remove(int val) Removes an item val from the set if present. Returns
 * true if the item was present, false otherwise.
 * int getRandom() Returns a random element from the current set of elements
 * (it's guaranteed that at least one element exists when this method is
 * called). Each element must have the same probability of being returned.
 * 
 * 
 * You must implement the functions of the class such that each function works
 * in average O(1) time complexity.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input
 * ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove",
 * "insert", "getRandom"]
 * [[], [1], [2], [2], [], [1], [2], []]
 * Output
 * [null, true, false, true, 2, true, false, 2]
 * 
 * Explanation
 * RandomizedSet randomizedSet = new RandomizedSet();
 * randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was
 * inserted successfully.
 * randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
 * randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now
 * contains [1,2].
 * randomizedSet.getRandom(); // getRandom() should return either 1 or 2
 * randomly.
 * randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now
 * contains [2].
 * randomizedSet.insert(2); // 2 was already in the set, so return false.
 * randomizedSet.getRandom(); // Since 2 is the only number in the set,
 * getRandom() will always return 2.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * -2^31 <= val <= 2^31 - 1
 * At most 2 * 10^5 calls will be made to insert, remove, and getRandom.
 * There will be at least one element in the data structure when getRandom is
 * called.
 * 
 * 
 */

// @lc code=start

var RandomizedSet = function () {
    this.set = new Set();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (!this.set.has(val)) {
        this.set.add(val);

        return true;
    }

    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.set.has(val)) {
        this.set.delete(val);

        return true;
    }

    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    if (this.set.size === 0) {
        return 0;
    }

    var i = Math.floor(Math.random() * this.set.size);

    return Array.from(this.set)[i];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet()
var param_1 = obj.insert(5);
var param_2 = obj.insert(8);
var param_3 = obj.remove(8);
var param_4 = obj.insert(9);
obj.insert(7);
obj.insert(78);
obj.insert(13);
var param_5 = obj.getRandom();
console.log(param_5);
console.dir(obj.set);
// @lc code=end
