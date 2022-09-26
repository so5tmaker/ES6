var merge = function (intervals) {
    let out = [];
    if (intervals.length < 2) {
        return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervals);
    for (let i = 0; i < intervals.length; i++) {
        if (i === 0) {
            out.push(intervals[i]);
            continue;
        }
        if (intervals[i - 1][1] >= intervals[i][0]) {
            out.pop();
            const first = intervals[i - 1][0] > intervals[i][0] ? intervals[i][0] : intervals[i - 1][0];
            const second = intervals[i - 1][1] > intervals[i][1] ? intervals[i - 1][1] : intervals[i][1];
            if (intervals[i - 1][0] > intervals[i][0] && intervals[i - 1][0] > intervals[i][1]) {
                out.push(intervals[i], intervals[i - 1]);
                console.log(out);
                continue;
            }
            out.push([first, second]);
            console.log(out);
            continue;
        }
        out.push(intervals[i]);
    }
    return out;
};

console.log(merge([[1, 4], [0, 2], [3, 5]]));
