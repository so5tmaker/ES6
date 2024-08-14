for (var i = 0; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 600);
} // five times 6
for (let i = 0; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 600);
} // 0 1 2 3 4 5

var a = 5;
var writeA = function () {
    console.log(a);
    var a = 10;
};

writeA(); // undefined - because variable a was hoisted to the beginning of the function