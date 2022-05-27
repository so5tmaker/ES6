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


const obj0 = { id: "1" };
const obj1 = {
    prop1: obj0,
};
const obj2 = Object.assign({}, obj1);
console.log(obj1.prop1);
console.log(obj2.prop1);



