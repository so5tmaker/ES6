countSheep = (arrayOfSheep) => arrayOfSheep.filter(i => i === true).length;
countSheepShort = (arrayOfSheep) => arrayOfSheep.filter(Boolean).length;

console.log(countSheep([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]));
console.log(countSheepShort([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]));