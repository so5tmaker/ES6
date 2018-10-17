
// 1 -- ReferenceError: version is not defined, so 'let' declares variable 
// 'version' only whithin the if clause scope
// if (true){
//     let version = "ES6";
// }

// console.log(version);

// 2 -- ReferenceError: version is not defined, if we use 'let' then hoisting won't work
// console.log(version);

// let version = "ES6";

// 3 -- ReferenceError: version is not defined, if we use 'var' then hoisting works
////var version; // undefined

// console.log(version);

// var version = "ES6";

// //: undefined

// //5
// var buttons = document.querySelectorAll('button');
// var index;
// for (index = 0; index < buttons.length; index++) {
// //for (var index = 0; index < buttons.length; index++) {
//     var button = buttons[index];
//     button.innerText = index;
//     button.onclick = function(e){
//         console.log(index); // always prints 5 because the variable 'index' is global 
//         // all functions see the same variable 'index'
//         // this is a closure in js
//     }
// }

//6 -- 'let' declares a local variable 'index'
// var buttons = document.querySelectorAll('button');
// var index;
// for (let index = 0; index < buttons.length; index++) {
//     var button = buttons[index];
//     button.innerText = index;
//     button.onclick = function(e){
//         console.log(index); 
//     }
// }

// function f1() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(10);
//         }, 1000);
//     });
// }

// function f2() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(20);
//         }, 2000);
//     });
// }
// (async () => {

//     let x = await f1();
//     let y = await f2();
//     console.log(x, y);

// })();

