const something = {
    object: "Javascript",
    hello() {
        return `Hello, ${this.object}!`
    },
    goodbye: () => {
        return `Hello, ${this.object}!`
    }
}

console.log(something.hello());
console.log(something.goodbye());
// "Hello, Javascript!"
// "Hello, undefined!"