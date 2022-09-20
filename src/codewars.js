const binaryGap = (n) => {
    const binary = n.toString(2);
    console.log(binary);
    let end = binary.length - 1;
    for (end; end >= 0; end--) {
        if (binary[end] !== "0") {
            break;
        }
    }
    let quantity = 0;
    let distance = 0;
    for (let i = end - 1; i >= 0; i--) {
        const num = binary[i];
        if (num === "0") {
            quantity++;
        }
        if (num === "1") {
            distance = Math.max(++quantity, distance);
            quantity = 0;
        }
    }
    return distance;
};

console.log(binaryGap(647));