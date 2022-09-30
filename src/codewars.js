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
    let end = nums.length;
    let start = 0;
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
                console.log('nums[middle] > numberToFind', [i, middle]);
            }
            if (nums[middle] < numberToFind) {
                start = ++middle;
                console.log('nums[middle] < numberToFind', [i, middle]);
            }
        }
    }

    return [];
};

console.log(twoSumBinarySearch([-7, 0, 2, 7, 3, 11, 15, 18, 20], 10));