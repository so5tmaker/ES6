var a = 1;
function first() {
    var a = 2;
    function second() {
        a++;
        var a = 3;
        console.log(a); // сразу увидит определение а здесь и не будет идти по цепочке видимости
    }
    second();
}
first(); // 3