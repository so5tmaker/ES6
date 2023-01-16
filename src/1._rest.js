// A function definition's last parameter can be prefixed with ... (three U+002E FULL STOP characters),
// which will cause all remaining(user supplied) parameters to be placed within an Array object.

function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");