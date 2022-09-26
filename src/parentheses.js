let c = '(())()';
let count = 0;
for (let i = 0; i < c.length; i++) { // console.log(c[i]); 
    if (c[i] == '(') {
        count++;
    }
    if (c[i] == ')') {
        count--;
    }
    if (count < 0) { //console.log(false); 
        break;
    }
}
if (count != 0) {
    console.log(false);
} else {
    console.log(true);
}

