let sum = nums => nums.length = 0 ? 0 : nums.length === 1 ? nums[0] : nums[0] + sum(nums.slice(1));
console.log(sum([2, 4, 6, 345]))