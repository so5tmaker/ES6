class Task {
    constructor(title = '') {
        this.title = title;
        this.done = false;
        console.log('The task is creating...');
    }
    complete() {
        this.done = true;
        console.log(`The task "${this.title}" was completed.`);
    }
};

let task = new Task('To clean a room');
let task2 = new Task('To buy food');

console.log(task.title);
console.log(task2.title);

task2.complete();
// console.log(typeof task);
// console.log(task instanceof Task);

