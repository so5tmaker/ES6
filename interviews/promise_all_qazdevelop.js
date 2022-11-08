const promise1 = new Promise(resolve => setTimeout(() => resolve(1), 5000))
const promise2 = new Promise(resolve => setTimeout(() => resolve(2), 2000))
const promise3 = new Promise(resolve => setTimeout(() => resolve(3), 1000))

const promises = [promise1, promise2, promise3];

// На вход к нам приходит массив промисов
const promiseAll = (all) => {
    // Здесь будем хранить результаты успешно завершенных промисов
    const results = [];
    // Количество промисов, которые осталось выполнить
    // На данный момент не выполнился еще ни один промис!
    let rest = promises.length;
    return new Promise((resolve) => {
        all.forEach((promise, index) => {
            promise.then(data => {
                results[index] = data;
                // На один невыполненный промис стало меньше!
                rest -= 1;
                // Если активных промисов больше нет, то резолвим результат
                if (rest === 0) resolve(results);
            })
        })
    })
}
console.log(promiseAll(promises).then(console.log));