
const validParentheses = (s) => {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        if (s[i] in map) {
            stack.push(s[i]);
        } else {
            const last = stack.pop();
            if (s[i] !== map[last]) {
                return false; // Unmatched closing parenthesis
            }
        }
    }

    return stack.length === 0; // Return false if there are unmatched opening parentheses
}
console.log(validParentheses('(())()'));
console.log(validParentheses('()'));
console.log(validParentheses('()[]{}'));
console.log(validParentheses('(]'));
console.log(validParentheses('{[]}'));
console.log(validParentheses('(){}}{'));


