function effectiveSolution(A, x) {
    let history = new Set();
    let n = x.length;
    let sortedX = [...x];
    sortedX.sort((a, b) => a - b);
    let triples = new Set();

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let target = A - sortedX[i] - sortedX[j];
            if (history.has(target)) {
                // Заметим, что тут тройка уже отсортирована за счёт предварительной
                // сортировки всего массива.
                let triple = [target, sortedX[i], sortedX[j]];
                triples.add(triple);
            }
        }
        history.add(sortedX[i]);
    }

    console.log(triples);
}

effectiveSolution(10, [5, 2, 8, 1, 1, 3, 4, 4]);
effectiveSolution(16, [6, 6, 4, 4, 0, 8, 10]);