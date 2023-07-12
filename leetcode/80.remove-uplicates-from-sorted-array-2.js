// 80. Remove Duplicates from Sorted Array I

var removeDuplicates = function (nums) {
    let j = 1;
    let k = 0;
    for (i = 0; i < nums.length; i++) {
        if (j <= 2) k++;
        if (nums[i] === nums[i + 1]) {
            j++;
        } else {
            nums[i] = i < (nums.length - 1) && (j > 2) ? nums[i + 1] : nums[i];
            j = 1;
        }
    }
    return [nums, k];
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));