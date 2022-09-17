const sortedSquares = (nums) => nums.map(i =>
    Math.pow(i, 2)
).sort((a, b) => a - b > 0 ? 1 : -1);


console.log(sortedSquares([-7, -3, 2, 3, 11]));