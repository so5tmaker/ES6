const fs = require('fs');
const path = require('path');

function findFile(folder, fileToFind) {
    const files = fs.readdirSync(folder);
    for (const file of files) {
        const filePath = path.join(folder, file);
        if (fs.statSync(filePath).isDirectory()) {
            const found = findFile(filePath, fileToFind);

            if (found) return found;
        }

        if (file === fileToFind) return filePath;
    }

    return null;
}

const folder = '/Users/softmaker/Documents/WebDeveloping/CodeDojo/ES6/yandex';
const fileToFind = 'find-file.js';
const result = findFile(folder, fileToFind);
if (result === null) {
    console.log('File not found');
} else {
    console.log(`File found at ${result}`);
}