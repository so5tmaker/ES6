"use strict";

/* We've started Quokka for you automatically on this file.
 *
 * To open a new Quokka file:
 *   - Press `⌘ K, J` to create a new JavaScript File
 *   - Press `⌘ K, T` to create a new TypeScript File
 *   - Press `⌘ K, L` to open an interactive sample from:
 *     https://github.com/wallabyjs/interactive-examples
 *
 * To start/restart Quokka on an existing file:
 *   - Press `⌘ K, Q`
*/
function find_average(array) {
    return array.reduce(function (i, prev) {
        return i + prev;
    }, 0) / (array.length === 0 ? 1 : array.length);
}
console.log(find_average([]));

var team = [{
    name: "Masha",
    specialization: "Progger"
}, {
    name: "Vasya",
    specialization: "Tester"
}, {
    name: "Taras",
    specialization: "Tester"
}];

var salaries = {
    Progger: {
        salary: 1000,
        tax: "15%"
    },
    Tester: {
        salary: 1000,
        tax: "10%"
    }
};

var getTeamQuantity = function getTeamQuantity(team) {
    var result = [];
    team.reduce(function (res, value) {
        if (!res[value.specialization]) {
            res[value.specialization] = {
                specialization: value.specialization,
                name: value.specialization,
                quantity: 0
            };
            result.push(res[value.specialization]);
        }
        res[value.specialization].quantity++;
        return res;
    }, {});
    return result;
};

var getSalaryWithTax = function getSalaryWithTax(salary, tax) {
    var pureTax = tax.slice(0, 2);
    return Math.round(salary + salary * pureTax / (100 - pureTax));
};

var calculateTeamFinanceReport = function calculateTeamFinanceReport(salaries, team) {
    var teamQuantity = getTeamQuantity(team);
    let resultObject = { totalBudgetTeam: 0 };
    teamQuantity.map(function (item) {
        var _salaries$item$special = salaries[item.specialization],
            salary = _salaries$item$special.salary,
            tax = _salaries$item$special.tax;

        var budget = getSalaryWithTax(salary, tax) * item.quantity;
        resultObject["totalBudget" + item.specialization] = budget;
        resultObject.totalBudgetTeam += budget;
    });
    console.log(resultObject);
};

console.log(getTeamQuantity(team));
calculateTeamFinanceReport(salaries, team);