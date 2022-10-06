var removeDuplicatesMy = function (nums) {
    let l = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[l] !== nums[i]) {
            nums[l] = nums[i];
            l++;
        }
    }
    return l;
};

var removeDuplicates = function (nums) {
    let insertIndex = 1;
    for (let i = 1; i < nums.length; i++) {
        // We skip to next index if we see a duplicate element
        if (nums[i - 1] != nums[i]) {
            /* Storing the unique element at insertIndex index and incrementing
               the insertIndex by 1 */
            nums[insertIndex] = nums[i];
            insertIndex++;
        }
    }
    return nums;
};

console.log(removeDuplicatesMy([1, 1, 2]));

class Program {
    constructor(a) {
        console.log("JavaScript");
        this.a = a;
    }
}
const c = new Program();
const d = new Program(123);
console.log(c, d);