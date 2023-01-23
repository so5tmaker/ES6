const spinalCase = (str) => {
    const changeUpper = (str) => {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            let character = str[i];

            if (i !== 0 && str[i - 1] !== '-' && character !== '-' && character === character.toUpperCase()) {
                character = '-' + character.toLowerCase();
            }
            result += character.toLowerCase();
        }
        return result;
    }
    return changeUpper(str.replaceAll(' ', '-').replaceAll('_', ''));
};

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));