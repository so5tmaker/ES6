// distructuring array assignment

//let languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];

// let js = languages[0];
// let php = languages[1];
// let py = languages[2];
// let rb = languages[3];

//let js, php, py, rb;

let [js, php, py, rb] = ['JavaScript', 'PHP', 'Python', 'Ruby'];

console.log(js, php, py, rb);

// let scores = [3, 5, [7, 9]];

// let [low, mid, [high, higher]] = scores;

// console.log(low, mid, high, higher);

// function computeScore([low, mid]) {
//     console.log(low, mid);    
// }

// computeScore([3, 5]);

function getScores(){
    return [3, 5, 7];
}

let scores = getScores();
console.log(scores);   
let [low, mid, high] = getScores();
console.log(low, mid, high);

let yes = 'Yes';
let no = 'No';

[yes, no] = [no, yes];
console.log('Yes is', yes);
console.log('No is', no);
console.log('o_O');
