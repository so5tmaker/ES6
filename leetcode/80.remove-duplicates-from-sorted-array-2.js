// 80. Remove Duplicates from Sorted Array II

var removeDuplicates = function (nums) {
    let j = 1;
    let k = 0;
    let l = 0;
    for (i = 0; i < nums.length; i++) {
        if (j <= 2) k++;
        if (j > 2) { l = i; j = 1; }
        if (nums[i] === nums[i + 1]) {
            j++;
        } else {
            nums[l] = i < (nums.length - 1) ? nums[i + 1] : nums[i];
            l = i;
        }
    }
    return [nums, k];
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));