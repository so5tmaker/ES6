// 80. Remove Duplicates from Sorted Array II

var removeDuplicates = function (nums) {
    let l = 0;
    let r = 0;

    while (r < nums.length) {
        let count = 1;
        while (r + 1 < nums.length && nums[r] === nums[r + 1]) {
            r++;
            count++;
        }
        for (i = 0; i < Math.min(2, count); i++) {
            nums[l] = nums[r];
            l++;
        }
        r++;
    }
    return l;
};

var removeDuplicates2 = function (nums) {
    let j = 1, count = 1;

    for (i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            count++;
        } else {
            count = 1;
        }
        if (count <= 2) {
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
}
console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));