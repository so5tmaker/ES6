function stairsBuilder(n) {
    if (n === 0) {
        return;
    }
    // build 1 step
    console.log(`Осталось построить ${n} ступеней.`);
    stairsBuilder(n - 1);
}

stairsBuilder(5); 