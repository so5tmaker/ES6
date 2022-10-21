const seldom = (arr) => {
    let oldCount = 0;
    let newCount = 0;
    let currentNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (currentNum === arr[i]) {
            oldCount += 1;
        }
        if (currentNum !== arr[i]) {
            newCount += 1;
            currentNum = oldCount <= newCount ? currentNum : arr[i];
            oldCount = oldCount <= newCount ? oldCount : newCount;
        }
    }
    return currentNum;
}

console.log(seldom([20, 20, 45, 45, 45, 49, 50, 89, 89, 90]));

var removeDuplicates = function (nums) {
    let l = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] !== nums[i]) {
            nums[l] = nums[i];
            l++;
        }
    }
    return l;
};

console.log(removeDuplicates([0, 1, 6, 9, 9, 11, 19, 33, 33, 41]));