'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// distructuring array assignment

//let languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];

// let js = languages[0];
// let php = languages[1];
// let py = languages[2];
// let rb = languages[3];

//let js, php, py, rb;

var js = 'JavaScript',
    php = 'PHP',
    py = 'Python',
    rb = 'Ruby';


console.log(js, php, py, rb);

// let scores = [3, 5, [7, 9]];

// let [low, mid, [high, higher]] = scores;

// console.log(low, mid, high, higher);

// function computeScore([low, mid]) {
//     console.log(low, mid);    
// }

// computeScore([3, 5]);

function getScores() {
    return [3, 5, 7];
}

var scores = getScores();
console.log(scores);

var _getScores = getScores(),
    _getScores2 = _slicedToArray(_getScores, 3),
    low = _getScores2[0],
    mid = _getScores2[1],
    high = _getScores2[2];

console.log(low, mid, high);

var yes = 'Yes';
var no = 'No';

var _ref = [no, yes];
yes = _ref[0];
no = _ref[1];

console.log('Yes is', yes);
console.log('No is', no);
console.log('o_O');