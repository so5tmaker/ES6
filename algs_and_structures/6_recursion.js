const factorial = (n) => {
    if (n === 1) {
        return 1
    }
    return n * factorial(n - 1)
}

// Числа фибоначчи -  1,1,2,3,5,8,13,21

const fibonacciRecursive = (n) => {
    if (n === 1 || n === 0) {
        return 1
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

console.log(fibonacciRecursive(0));

const fibonacciIterative = (n) => {
    let a = 1, b = 0, temp;

    while (n >= 1) {
        temp = a;
        a = a + b;
        b = temp;
        n--;
    }

    return b;
}

console.log(fibonacciIterative(0))

// При работе с последовательностью Фибоначчи, когда мы говорим о fibonacciIterative(2), 
// цифра 2 здесь обозначает позицию или индекс в последовательности, 
// а не число для сложения или какое-то другое значение.

// Так что fibonacciIterative(2) вернёт число Фибоначчи, которое находится на второй позиции 
// (если начинать с нуля) в последовательности Фибоначчи, и это число действительно равно 1.