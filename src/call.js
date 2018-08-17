let employee1 = {
    name: 'Hanna',
    position: 'Project manager',
    salary: 1000
}

let employee2 = {
    name: 'Bill',
    position: 'Junior developer',
    salary: 800
}

function promote (newPosition, salaryRise){
    this.position=newPosition;
    this.salary+=salaryRise;

    return `${this.name} is ${this.position} and earns $${this.salary}`;
}

console.log(promote.call(employee1, 'Department head', 500)); // Hanna is Department head and earns $1500
console.log(promote.call(employee2, 'Middle developer', 300)); // Bill is Middle developer and earns $1100