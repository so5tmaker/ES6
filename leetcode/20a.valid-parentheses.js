let c = '(())()';
let count = 0;
for (let i = 0; i < c.length; i++) {
    if (c[i] == '(') {
        count++;
    }
    if (c[i] == ')') {
        count--;
    }
    if (count < 0) {
        break;
    }
}
if (count != 0) {
    console.log(false);
} else {
    console.log(true);
}

