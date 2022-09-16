const findNextSquare = (sq) => !Number.isInteger(Math.sqrt(sq)) ? - 1 : Math.pow(Math.sqrt(sq) + 1, 2);


console.log(findNextSquare(625));