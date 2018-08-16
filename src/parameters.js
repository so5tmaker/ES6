function greet(greeting, name) {
    console.log(`${greeting} ${name}`);
}

function greet(greeting = 'Hello', name = 'friend') {
    console.log(`${greeting} ${name}`);
}

greet('Hi,', 'Bill');
greet('Hi,');