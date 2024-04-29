function getStringHash(s, a, m) {
    let hash = BigInt(0);
    const n = s.length;
    for (let i = 0; i < n; i++) {
        hash = (hash * BigInt(a) + BigInt(s.charCodeAt(i))) % BigInt(m);
    }
    return hash;
}

function generateRandomString() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const minLength = 5; // Минимальная длина строки
    const maxLength = 10;
    const length = minLength + Math.floor(Math.random() * (maxLength - minLength + 1));
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function findStringsByHash(a, m) {
    const hashTable = {};
    let firstString, secondString;

    while (true) {
        firstString = generateRandomString();
        const firstHash = getStringHash(firstString, a, m);

        if (firstHash in hashTable) {
            secondString = firstString;
            firstString = hashTable[firstHash];
            return [firstString, secondString];
        } else {
            hashTable[firstHash] = firstString;
        }

        secondString = generateRandomString();
        const secondHash = getStringHash(secondString, a, m);

        if (secondHash in hashTable) {
            firstString = secondString;
            secondString = hashTable[secondHash];
            return [firstString, secondString];
        } else {
            hashTable[secondHash] = secondString;
        }
    }
}

const a = 1000;
const m = 123987123;

const [firstString, secondString] = findStringsByHash(a, m);
console.log("Первая строка:", firstString);
console.log("Вторая строка:", secondString);
console.log("Первый хэш:", getStringHash(firstString, a, m).toString());
console.log("Второй хэш:", getStringHash(secondString, a, m).toString());