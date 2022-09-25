function isValid(s) {
    const brackets = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    const st = [];
    for (let i = 0; i < s.length; i++) {
        if (isClosedBracket(s[i])) {
            console.log(st);
            if (brackets[s[i]] !== st.pop()) return false;
        } else {
            st.push(s[i]);
        }
    }
    return st.length === 0;
}

function isClosedBracket(ch) {
    return [")", "]", "}"].indexOf(ch) > -1;
}

console.log(isValid('{({[()]})}'));
