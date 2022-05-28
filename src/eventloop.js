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


var a1 = "wrong";
function a() { return "1st"; };
function a(val) { this.a1 = "right"; return "2nd"; }
console.log(new a());