var merge = function (intervals) {
    let out = [];
    if (intervals.length < 2) {
        return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < intervals.length; i++) {
        if (i === 0) {
            out.push(intervals[i]);
            continue;
        }
        const currentFirst = out.length === 0 ? intervals[i - 1][0] : out[out.length - 1][0];
        const currentSecond = out.length === 0 ? intervals[i - 1][1] : out[out.length - 1][1];
        if (currentSecond >= intervals[i][0]) {
            out.pop();
            const first = currentFirst > intervals[i][0] ? intervals[i][0] : currentFirst;
            const second = currentSecond > intervals[i][1] ? currentSecond : intervals[i][1];
            if (currentFirst > intervals[i][0] && currentFirst > intervals[i][1]) {
                out.push(intervals[i], intervals[i - 1]);
                continue;
            }
            out.push([first, second]);
            continue;
        }
        out.push(intervals[i]);
    }
    return out;
};

console.log(merge([[1, 4], [0, 2], [3, 5]]));
