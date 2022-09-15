var v = 1;

var f1 = function () {
    console.log(v);
}

var f2 = function () {
    var v = 1;
    f1();
}

f2();