function narcissistic(value) {
    return [...String(value)].reduce((p, c) => (p + Math.pow(c, String(value).length)), 0) === value;
}

console.log(narcissistic(153));
