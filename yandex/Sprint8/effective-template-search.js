function search(p, text) {
    // Функция возвращает все позиции вхождения шаблона в тексте.
    let result = [];
    let s = p + '#' + text;
    const pi = new Array(s.length - 1).fill(null);
    let π = [0, ...pi]; // Массив длины |p|.

    let π_prev = 0;
    for (let i = 1; i < s.length; i++) {
        let k = π_prev;
        while (k > 0 && s[k] !== s[i]) {
            k = π[k - 1];
        }
        if (s[k] === s[i]) {
            k++;
        }
        // Запоминаем только первые |p| значений π-функции.
        if (i < p.length) {
            π[i] = k;
        }
        // Запоминаем последнее значение π-функции.
        π_prev = k;
        // Если значение π-функции равно длине шаблона, то вхождение найдено.
        if (k === p.length) {
            // i - это позиция конца вхождения шаблона.
            // Дважды отнимаем от него длину шаблона, чтобы получить позицию начала:
            //  - чтобы «переместиться» на начало найденного шаблона,
            //  - чтобы не учитывать добавленное "pattern#".
            result.push(i - 2 * p.length);
        }
    }
    return result;
}