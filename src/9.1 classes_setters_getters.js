class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.title = title;
        this._done = false;
        Task.count += 1;
        console.log('The task is creating...');
    }

    get done() {
        return this._done === true ? 'Done' : 'Have\'t done';
    }

    set done(value){
        if (value !==undefined && typeof value === 'boolean') {
            this._done = true;    
        } else {
            console.error('Error! Define true or false!');
        }
    }

    complete() {
        this.done = true;
        console.log(`The task "${this.title}" was completed.`);
    }
    static getDefaultTitle() {
        return 'Task';
    }
};

Task.count = 0;

let task = new Task('To clean a room');
console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done); // TypeError: Cannot SET property done of #<Task> which has only a GETTER
