var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        if (max < sum) {
            max = sum;
        }
        if (nums[i] === 0) {
            sum = 0;
        }

    }
    return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));