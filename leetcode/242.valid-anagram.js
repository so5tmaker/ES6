/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (strA, strB) {
    const aCharObj = buildCharObject(strA);
    const bCharObj = buildCharObject(strB);

    if (Object.keys(aCharObj).length !== Object.keys(bCharObj).length) {
        return false;
    }

    for (let char in aCharObj) {
        if (aCharObj[char] !== bCharObj[char]) {
            return false;
        }
    }
    return true;
};

function buildCharObject(str) {
    const charObj = {};
    str = str.toLowerCase().replace(/[^\w]/g);
    for (let char of str) {
        charObj[char] = charObj[char] + 1 || 1;
    }

    return charObj;
}


// Oneliner
const anagram = (a, b) => [...a.toLowerCase()].sort().toString() === [...b.toLowerCase()].sort().toString();

// console.log(isAnagram('hello', 'bye'));
console.log(isAnagram('friend', 'Finder'));
console.log(anagram('friend', 'Finder'));
// @lc code=end

// На собеседованиях ещё гуляет такая задача: определить, являются ли строки 
// анаграммами(когда две строки содержат одинаковый набор символов(учитываются только буквы!)).

// Вот моё решение:

// Сначала обе строки разбиваем на массивы, сортируем их, а затем отсортированные последовательности 
// снова собираем в строки.Если обе строки оказались одинаковыми 
// (а они окажутся одинаковыми, если набор символов был один и тот же в обеих строках), 
// то можно сделать вывод, что строки являются анаграммами.

// Вот мой код:

function sortString(str) {

    //переводим все буквы в нижний регистр
    str = str.toLowerCase();

    //превращаем строку в массив
    let arr = str.split('');

    //создаём регулярное выражение, которое пропускает только символы
    let rgxp = new RegExp(/^[a-zа-яё]/);

    //удаляем из массива все элеметны, которые не являются символами (буквами)
    for (let i = 0; i < arr.length; i++) {
        if (!rgxp.test(arr[i])) {
            delete arr[i];
        }
    }

    //создаём массив, в котором будет храниться его отсортированная копия
    let res = [];

    //сортируем массив
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let v = arr[i];
                arr[i] = arr[j];
                arr[j] = v;
            }
        }
    }

    //возвращаем результат уже в виде строки 
    return arr.join('');
}

//создаём две строки, наполненные одинаковыми символами
let str1 = 'Hello wrldo!';
let str2 = 'Ole!hl drlow';

//
let strA = sortString(str1);
let strB = sortString(str2);

//выводим строки в консоль
console.log(strA);
console.log(strB);

//сравниваем полученные строки
console.log(strA == strB);