let employee1 = {
    name: 'Hanna',
    position: 'Project manager',
    salary: 1000
}

function promote (newPosition, salaryRise){
    this.position=newPosition;
    this.salary+=salaryRise;

    return `${this.name} is ${this.position} and earns $${this.salary}`;
}

let promoteHanna = promote.bind(employee1);
console.log(promoteHanna('Department head', 500)); // Hanna is Department head and earns $1500

let promoteHannaToDepartmentHead = promote.bind(employee1, 'Department head');
console.log(promoteHannaToDepartmentHead(500)); // Hanna is Department head and earns $1500