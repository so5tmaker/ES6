'use strict';

var callPoints = function callPoints(ops) {
    var result = 0;
    indx = 0;
    var records = [];
    for (var i = 0; i < ops.length; i++) {
        var num = ops[i];
        // const previous = records.size - 1;
        switch (num) {
            case 'C':
                // result = 0;
                // records[i] = 0;
                break;
            case '+':
                result += records[indx - 1] + records[indx - 2];
                records[indx] = records[indx - 1] + records[indx - 2];
                indx++;
                break;
            case 'D':
                result += records[indx - 1] * 2;
                records[indx] = records[indx - 1] * 2;
                indx++;
                break;
            default:
                result += Number(num);
                records[indx] = Number(num);
                indx++;
        }
    }
    console.log(records);
    return result;
};

console.log(callPoints(['5', '2', 'C', '+', 'D']));