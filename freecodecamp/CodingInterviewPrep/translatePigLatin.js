

const translatePigLatin = (str) => {
    const way = 'way';
    const ay = 'ay';

    // Use a regular expression that matches a sequence of consonants at the beginning of a string:
    const startingConsonants = (string) => {
        let m = string.match(/^[^aeiou]+/);
        return m && m[0];
    }

    const cons = startingConsonants(str) ?? '';
    const l = cons.length;
    return str.substring(l) + cons + (l > 0 ? ay : way);
}

console.log(translatePigLatin("algorithm"));