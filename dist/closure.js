// глобальная область видимости
function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();


let name = "John";
function sayHi() {
    console.log("Hi, " + name);
}
name = "Pete";
sayHi(); // что будет показано: "John" или "Pete"?

let name1 = "Pete";
function makeWorker() {
    name1 = "Pete";
    return function () {
        console.log(name1);
    };
}
// create a function
let work = makeWorker();
name1 = "John";
// call it
work(); // что будет показано? "Pete" (из места создания) или "John" (из места выполнения)


// 'abc'
// цепочка областей видимости
// область видимости функции a -> глобальная область видимости

// in parameter
let globalLet = 'global'
let outerVar = 'outer'

function outerFunc(outerParam) {
    function innerFunc(innerParam) {
        console.log(globalLet, outerParam, innerParam)
    }
    return innerFunc
}

const x = outerFunc(outerVar)
outerVar = 'outer-2'
globalLet = 'guess'
x('inner')