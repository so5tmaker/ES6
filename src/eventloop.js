// console.log(1);
// setTimeout(() => {
//     console.log(2);
// })
// const promise1 = new Promise(resolve => {
//     console.log(3);
//     resolve(4);
// });
// const promise2 = new Promise(resolve => {
//     console.log(5);
//     resolve(6);
// });
// promise1.then(console.log);
// promise2.then(console.log);
// console.log(7);

// const bar = () => console.log('bar', this);
// const baz = () => console.log('baz');
// const foo = () => {
//     console.log('foo');
//     setTimeout(bar, 0);
//     baz();
// }
// foo();

// 5. Асинхронный код промисы. 
// console.log('A');
// const myPromise = new Promise((resolve, reject) => {
//     console.log('B');
//     setTimeout(() => { resolve('E') }, 0);
//     console.log("C");
// }).then((value) => {
//     console.log(value)
// });
// console.log('D');

// function Repeat(arr) {
//     const arrNew = [...new Set(arr)];
//     const arrRes = [];
//     for (let i = 0; i < arrNew.length; i++) {
//         if (arr.filter(item => item === arrNew[i]).length > 1) {
//             arrRes.unshift(arr[i]);
//         }
//     }
//     console.log(arrRes);
// }
// array = [1, 3, 2, 2, 3, 0]
// Repeat(array)

// function repeted(arr) {
//     let newArr = [];
//     arr = arr.sort(function (a, b) { return a - b; });
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i + 1] === arr[i]) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(repeted([1, 3, 2, 2, 3, 0]));

// const elem = document.getElementById("circle");
// elem.addEventListener("click", function (e) {
//     console.log('handler1')
// }, false);
// elem.addEventListener("click", function (e) {
//     console.log('handler2')
// }, true);



// console.log(document.forms.myform)
// console.log(document.getElementById("myform"))
// console.log(document.body.children[0])
// console.log(document.body.firstChild)
// console.log(document.forms[0])

setTimeout(() => console.log('setTimeout'), 0)
setImmediate(() => console.log('setImmediate'));

console.log('To dream or not to Dream'.replace(/dream/gi, 'be'));
const doubleQuotes = "string";
const singleQuotes = 'string';
const contains = (string, symbol) => string.includes(symbol);
console.log(contains(doubleQuotes, '"'));
console.log(contains(singleQuotes, "'"));

function mult(a) {
    return function name(b) {
        return a * b;
    }
}
console.log(mult(5)(5))

let value = 20;
const showValue = () => {
    console.log("Value from showValue: " + value);
}
const wrapper = () => {
    let value = 30;
    console.log("Value from wrapper: " + value);
    showValue();
}
wrapper();

function isEmpty1(object) {
    return Object.keys(object).length === 0;
}
function isEmpty2(object) {
    for (let key in object) { return false; }
    return true;
};
function isEmpty3(object) { return Object.isEmpty(object); }
function isEmpty4(object) { return object.hasOwnProperties() };
console.log(isEmpty1({}));
console.log(isEmpty2({}));
// console.log(isEmpty3({}));
// console.log(isEmpty4({}));



const convert = (a) => { return a.slice(0, 4) }
console.log(convert('javascript'));

