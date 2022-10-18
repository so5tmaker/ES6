let count = nums => nums.length === 0 ? 0 : nums.length === 1 ? 1 : 1 + count(nums.slice(1));
console.log(count([2, 4, 6, 345, 2, 4, 6, 345]))