// HashSet
var twoSum = (nums, target) => {
    const Nums = new Map();
    for (let i = 0; i < nums.length; i++) {
        let numberToFind = target - nums[i];
        if (Nums.has(numberToFind)) {
            return [Nums.get(numberToFind), i];
        }
        Nums.set(nums[i], i);
    }
    return [];
};
console.log('twoSum HashSet');
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 5, 8, 13, 7, 12, 3], 6));


// To solve this problem using binary search, you would first create an array of objects that hold each number and its original index. 
// Then, you sort this array by the numbers, not their original indices. After sorting, for each element, you perform a binary search 
// to find if there is another number that when added to it equals the target. 
var twoSumBinarySearch = (nums, target) => {
    const items = nums.map((num, index) => ({ num, index }));
    items.sort((a, b) => a.num - b.num);
    console.log('items', items);
    for (let i = 0; i < items.length; i++) {
        const complement = target - items[i].num;
        let left = i + 1;
        let right = items.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (items[mid].num === complement) {
                return [items[i].index, items[mid].index];
            }
            if (items[mid].num < complement) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return [0, 0];
};
console.log('twoSum Binary Search');
console.log(twoSumBinarySearch([3, 2, 4], 6));
console.log(twoSumBinarySearch([3, 5, 8, 13, 7, 12, 3], 6));

// The Two Markers (or Two Pointers) approach involves having two indices (typically starting at the beginning and end of the sorted array) 
// that move towards each other until a condition is met. In this case, since we need to sort the array first, we will lose the original indices of the numbers. 
// To overcome this issue, one common solution is to store the original indices in the array as well.
var twoSumMarkersSearch = (nums, target) => {
    // Create an array of objects with value and original index
    const items = nums.map((value, index) => ({ value, index }));

    // Sort the array based on the values
    items.sort((a, b) => a.value - b.value);

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = items[left].value + items[right].value;
        if (sum === target) {
            // Return an array containing the original indices
            return [items[left].index, items[right].index];
        } else if (sum < target) {
            left++;
        } else { // sum > target
            right--;
        }
    }

    return [0, 0];
};
console.log('twoSum Markers Search',);
console.log(twoSumMarkersSearch([3, 2, 4], 6));
console.log(twoSumMarkersSearch([3, 5, 8, 13, 7, 12, 3], 6));