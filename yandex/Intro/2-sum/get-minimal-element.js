const getMinimalElement = (input) => {
    min = -1;

    for (let i = 0; i < input.length; i++) {
        if (min === -1 || input[i] < min) min = input[i];
    }

    console.log(min);
}

getMinimalElement([10, 3, 89, 35, 11]);