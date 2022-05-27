// 'for of' iterates over values, 'for in' iterates over keys

let browsers = ['Chrome', 'Firefox', 'Edge', 'Safari', 'Opera'];

for (let browser in browsers) {
    console.log(browser);
}

for (let index in browsers) {
    console.log(browsers[index]);
}

for (let browser of browsers) {
    console.log(browser);
}

console.log(browsers);