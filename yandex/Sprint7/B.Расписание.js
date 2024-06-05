const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const END = 'close';
const LINE = 'line';

const _inputLines = [];
let _curLine = 0;

_reader.on(LINE, line => _inputLines.push(line));

_reader.on(END, solve);

const readNumber = () => Number(_inputLines[_curLine++]);

function parseTime(timeStr) {
    const [h, m] = timeStr.split('.').map(Number);
    return h + (m ? m / 60 : 0);
}

function getClasses(n) {
    const classes = [];
    for (let i = 1; i <= n; i++) {
        const [startStr, endStr] = _inputLines[i].split(' ');
        const start = parseTime(startStr);
        const end = parseTime(endStr);
        classes.push({ start, end });
    }
    classes.sort((a, b) => a.end - b.end || a.start - b.start);
    return classes;
}

function formatTime(time) {
    const h = Math.floor(time);
    const m = Math.round((time - h) * 60);
    return m === 0 ? h.toString() : `${h}.${m}`;
}

function solve() {
    const quantity = readNumber();
    const classes = getClasses(quantity);

    const result = [];
    let lastEndTime = 0;

    for (const cls of classes) {
        if (cls.start >= lastEndTime) {
            result.push(cls);
            lastEndTime = cls.end;
        }
    }

    console.log(result.length);
    result.forEach(cls => {
        const start = formatTime(cls.start);
        const end = formatTime(cls.end);
        console.log(`${start} ${end}`);
    });
}