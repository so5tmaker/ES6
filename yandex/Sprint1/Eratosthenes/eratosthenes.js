function eratosthenesEffective(n) {
    const numbers = new Array(n + 1).fill(true);

    numbers[0] = numbers[1] = false;

    for (let num = 2; num * num <= n; num++) {
        if (numbers[num]) {
            for (let j = num * num; j <= n; j += num) {
                numbers[j] = false;
            }
        }
    }

    return numbers;
}

console.log(eratosthenesEffective(11));