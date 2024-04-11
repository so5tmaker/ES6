const fs = require('fs');
const path = require('path');

function find_file(folder, file_to_find) {
    const queue = [folder];
    while (queue.length > 0) {
        const item = queue.shift();
        if (fs.statSync(item).isDirectory()) {
            const files = fs.readdirSync(item);
            for (const file of files) {
                queue.push(path.join(item, file));
            }
        } else {
            if (path.basename(item) === file_to_find) {
                return item;
            }
        }
    }
    return null;
}

const folder = '/Users/softmaker/Documents/WebDeveloping/CodeDojo/ES6/yandex';
const file_to_find = 'find-file.js';
const result = find_file(folder, file_to_find);
if (result === null) {
    console.log('File not found');
} else {
    console.log(`File found at ${result}`);
}