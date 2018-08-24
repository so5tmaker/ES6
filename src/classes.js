// Static methods are declared using static keyword, and are mostly used to create utility functions. 
// They are called without creating the instance of the class. See an example below.

class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.title = title;
        this.done = false;
        Task.count += 1;
        console.log('The task is creating...');
    }
    complete() {
        this.done = true;
        console.log(`The task "${this.title}" was completed.`);
    }
    static getDefaultTitle(){
        return 'Task';
    }
};

Task.count = 0;

let task = new Task('To clean a room');
let task2 = new Task('To buy food');
let task3 = new Task();

console.log(task.title);
console.log(task2.title);
console.log(task3.title);

console.log(Task.count);

task2.complete();

//task.getDefaultTitle(); // TypeError: task.getDefaultTitle is not a function

