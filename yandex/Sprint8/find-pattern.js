// Найти первое вхождение подстроки pattern в строке text,
// находящееся на позиции не раньше start.
function find(text, pattern, start = 0) {
    if (text.length < pattern.length) {
        return -1; // Длинный шаблон не может содержаться в короткой строке.
    }
    for (let pos = start; pos <= text.length - pattern.length; pos++) {
        // Проверяем, не совпадёт ли шаблон, сдвинутый на позицию pos,
        // с соответствующим участком строки.
        let match = true;
        for (let offset = 0; offset < pattern.length; offset++) {
            if (text[pos + offset] !== pattern[offset]) {
                // Одного несовпадения достаточно, чтобы не проверять
                // дальше текущее расположение шаблона.
                match = false;
                break;
            }
        }
        // Как только нашлось совпадение шаблона, возвращаем его.
        // Это первое вхождение шаблона в строку.
        if (match === true) {
            return pos;
        }
        // Если совпадение не нашлось, цикл перейдёт к проверке следующей позиции.
    }
    // Числом -1 часто маркируют, что подстрока не была найдена,
    // поскольку в строке нет позиции -1.
    // В качестве альтернативы можно возвращать null.
    return -1;
}

function find_all(text, pattern) {
    let occurrences = [];
    let start = 0; // Начнём поиск с начала строки.
    // Найдём первое вхождение, если оно есть.
    while ((pos = find(text, pattern, start)) !== -1) {
        occurrences.push(pos); // Сохраним вхождение в список.
        start = pos + 1;       // И продолжим поиск, начиная с позиции,
        // следующей за только что найденной.
    }
    return occurrences;
}