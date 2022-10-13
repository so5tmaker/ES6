

// Calculate total salary MIR SOLUTIONS GROUP
// for active teamLeads and members

const workers = [
    {
        team: "team A",
        teamLead: {
            name: "Kirill",
            salary: 100,
            isActive: true
        },
        teamMembers: [
            {
                member: "Eugenia",
                salary: 20,
                isActive: true
            },
            {
                member: "Andrey",
                salary: 20,
                isActive: true
            },
            {
                member: "Victor",
                salary: 20,
                isActive: true
            },
            {
                member: "Alex",
                salary: 20,
                isActive: true
            },
            {
                member: "Anton",
                salary: 20,
                isActive: true
            },
            {
                member: "Alla",
                salary: 20,
                isActive: false
            }
        ]
    },
    {
        team: "team B",
        teamLead: {
            name: "Kirill",
            salary: 100,
            isActive: true
        },
        teamMembers: [
            {
                member: "Artemia",
                salary: 20,
                isActive: true
            },
            {
                member: "Semen",
                salary: 20,
                isActive: true
            },
            {
                member: "Illy",
                salary: 20,
                isActive: true
            },
            {
                member: "Natalia",
                salary: 20,
                isActive: true
            },
            {
                member: "Elena",
                salary: 20,
                isActive: true
            },
            {
                member: "Egor",
                salary: 20,
                isActive: false
            }
        ]
    }
];

const calculateMonthSalary = (data) => {
    let newArray = [];
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].teamLead.isActive) {
            sum += data[i].teamLead.salary;
        }
        newArray = [...newArray, ...data[i].teamMembers];
    }
    for (let j = 0; j < newArray.length; j++) {
        if (newArray[j].isActive) {
            sum += newArray[j].salary;
        }
    }
    return sum;
};

const totalSalary = calculateMonthSalary(workers);

console.log(totalSalary);