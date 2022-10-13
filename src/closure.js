let v = 1;

let f1 = function () {
    console.log(v);
}

let f2 = function () {
    var v = 1;
    f1();
}

f2();