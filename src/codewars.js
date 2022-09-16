var findNumbers = function (nums) {
    const digits = [];
    for (let i = 0; i < nums.length; i++) {
        const digit = nums[i];
        const strDigit = nums[i] + '';
        const length = strDigit.length;
        const type = length % 2 === 1 ? 'odd' : 'even';
        if (type === 'even') {
            digits.push(digit);
        }
        console.log(`${digit} contains ${length} digits (${type} number of digits).`);
    }
    let text = '';
    switch (digits.length) {
        case 2:
            text = `Therefore only ${digits[0]} and ${digits[1]} contain`;
            break;

        default:
            text = `Only ${digits[0]} contains`;
            break;
    }
    if (digits.length > 0) {
        console.log(`${text} an even number of digits.`);
    }
    return digits.length;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));