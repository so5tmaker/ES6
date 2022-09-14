isIsogram = (str) => {
    letters = [];
    for (let i = 0; i < str.length; i++) {
        const s = str[i];
        if (letters.includes(s.toLowerCase())) {
            return false;
        }
        letters.push(s.toLowerCase());
    }
    return true;
}

function isIsogramShort(str) {
    return new Set(str.toUpperCase()).size == str.length;
}

console.log(isIsogram("moOse"));
console.log(isIsogramShort("moOse"));