class Task{
    constructor(){
        console.log('Tasks creation');
    }
}

class SubTask extends Task{

} 

let task = new Task();
let subtask = new SubTask();

console.log(task);
console.log(subtask);

console.log(subtask instanceof SubTask);
console.log(subtask instanceof Task);