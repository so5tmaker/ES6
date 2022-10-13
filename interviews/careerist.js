const seldom = (nums) => {
    let count = 1;
    let oldNum = nums[0];
    let oldCount = 1;
    let current = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (current === nums[i]) {
            count++;
        }
        if (current !== nums[i]) {
            oldNum = oldCount > count ? current : oldNum;
            oldCount = oldCount > count ? count : oldCount;
            count = 1;
            current = nums[i];
        }
    }
    return oldNum;
}
console.log(seldom([20, 49, 45, 45, 45, 89, 89, 90]));

