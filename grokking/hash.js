book = {};

book['apple'] = 0.67;
book['milk'] = 1.49;
book['avocado'] = 1.49;

console.log(book);


const checkVoter = (name, voted) => {
    if (name in voted) {
        console.log("kick them out!");
    } else {
        voted[name] = true;
        console.log("let them vote!");
    }
}

let voted = {};

checkVoter("Mike", voted);
console.log(voted);
checkVoter("John", voted);
console.log(voted);
checkVoter("Mike", voted);
console.log(voted);