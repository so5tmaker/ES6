var twoSum = function (nums, target) {
    const Nums = new Map();
    for (let i = 0; i < nums.length; i++) {
        let numberToFind = target - nums[i];
        if (Nums.has(numberToFind)) {
            return [Nums.get(numberToFind), i];
        }
        Nums.set(nums[i], i);
    }
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9));