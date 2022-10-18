let large = (nums) => {
    if (nums.length === 2) {
        return nums[0] > nums[1] ? nums[0] : nums[1];
    };
    const subMax = large(nums.slice(1));
    return nums[0] > subMax ? nums[0] : subMax;
};
console.log(large([2, 4, 6, 34, 29, 44, 655, 345]))