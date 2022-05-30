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

let obj = { '1': 0, 1: 1, 0: 2 };

console.log("пупкин".replace("п", "д"))
