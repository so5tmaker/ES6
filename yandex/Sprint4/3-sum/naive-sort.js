function naiveSolution(A, x) {
    const n = x.length;
    const triples = new Set();

    for (let i1 = 0; i1 < n; i1++) {
        for (let i2 = i1 + 1; i2 < n; i2++) {
            for (let i3 = i2 + 1; i3 < n; i3++) {
                if (x[i1] + x[i2] + x[i3] === A) {
                    const sortedTriple = [x[i1], x[i2], x[i3]].sort((a, b) => a - b);
                    triples.add(sortedTriple);
                }
            }
        }
    }
    console.log(triples);
}

naiveSolution(10, [5, 2, 8, 1, 1, 3, 4, 4]);
naiveSolution(16, [6, 6, 4, 4, 0, 8, 10]);