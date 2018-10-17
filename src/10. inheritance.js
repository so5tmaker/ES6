class Task{
    constructor(title){
        this.title = title;
        this.done = false;
        console.log('The task creation');
    }
}

class SubTask extends Task{
    constructor(title){
        super(title);
        console.log('The subtask creation');
    }

} 

let task = new Task('Learn Java Script');
let subtask = new SubTask('Learn ES6');

console.log(task);
console.log(subtask);
