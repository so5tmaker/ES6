class Pair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class Map {
    constructor() {
        this.pairs = [];
    }

    get(key) {
        for (const pair of this.pairs) {
            if (pair.key === key) {
                return pair.value;
            }
        }
        return null; // Если пара не найдена, вернем null
    }

    set(key, value) {
        for (const pair of this.pairs) {
            if (pair.key === key) {
                pair.value = value;
                return;
            }
        }
        // Если пара с заданным ключом не найдена, добавим новую пару
        const newPair = new Pair(key, value);
        this.pairs.push(newPair);
    }
}