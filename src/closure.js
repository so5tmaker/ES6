const a = 1;

function name(a) {
    return function () {
        console.log(a++);
    }
}

const func1 = name(a);
func1();
func1();
console.log(a);
// 1
// 2
// 1