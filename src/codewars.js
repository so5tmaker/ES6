// HashSet
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

// Binary Search
var twoSumBinarySearch = function (nums, target) {
    nums.sort((a, b) => a - b);
    found = false;
    for (let i = 0; i < nums.length; i++) {
        let numberToFind = target - nums[i];
        let end = nums.length;
        let start = i;
        while (found === false && start <= end) {
            let middle = Math.floor((start + end) / 2);
            if (nums[middle] === numberToFind) {
                found = true;
                return [i, middle];
            }
            if (nums[middle] > numberToFind) {
                end = --middle;
            }
            if (nums[middle] < numberToFind) {
                start = ++middle;
            }
        }
    }

    return [];
};

// Two Markers Search
var twoSum = function (nums, target) {
    // nums.sort((a, b) => a - b);
    let end = nums.length - 1;
    let start = 0;
    for (let i = 0; i < nums.length; i++) {
        let numberToFind = target - nums[start];
        if (nums[end] === numberToFind) {
            return [start, end];
        }
        if (nums[end] > numberToFind) {
            end = --end;
        }
        if (nums[end] < numberToFind) {
            start = ++start;
        }
    }
    return [];
};

console.log(twoSum([3, 2, 4], 6));