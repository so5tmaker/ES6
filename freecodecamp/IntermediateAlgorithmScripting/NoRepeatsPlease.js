// No Repeats Please
// Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
// Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
// but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

// Пожалуйста, без повторов
// Возвратить общее количество перестановок предоставленной строки, которые не содержат повторяющихся последовательных букв.
// Предположим, что все символы в предоставленной строке уникальны.

// Например, aab должен возвращать 2, потому что у него всего 6 перестановок (aab, aab, aba, aba, baa, baa), 
// но только в 2 из них (aba и aba) не повторяется одна и та же буква (в данном случае a).

// Заново решить

const permAlone = (str) => {
    // Create a regex to match repeated consecutive characters.
    let regex = /(.)\1+/;

    // Split the string into an array of characters.
    const arr = str.split("");
    const permutations = [];
    let tmp;

    // Return 0 if str contains same character.
    if (str.match(regex) && str.match(regex)[0] === str) return 0;

    // Function to swap variables' content.
    const swap = (index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }


    // Generate arrays of permutations using the algorithm.
    const generate = (int) => {
        if (int === 1) {
            // Make sure to join the characters as we create the permutation arrays
            permutations.push(arr.join(""));
        } else {
            for (let i = 0; i != int; ++i) {
                generate(int - 1);
                swap(int % 2 ? 0 : i, int - 1);
            }
        }
    }

    generate(arr.length);

    // Filter the array of repeated permutations.
    const filtered = permutations.filter(function (string) {
        return !string.match(regex);
    });

    // Return how many have no repetitions.
    return filtered.length;
}

console.log(permAlone('aabb'))