function prefixFunction(s) {
    // Функция возвращает массив длины |s|
    const n = s.length;
    const pi = new Array(n).fill(0);
    for (let i = 1; i < n; ++i) {
        let k = pi[i - 1];
        while (k > 0 && s[k] !== s[i]) {
            k = pi[k - 1];
        }
        if (s[k] === s[i]) {
            ++k;
        }
        pi[i] = k;
    }

    return pi;
}

/*
Получается так:
Мы начинаем считать префикс-функцию с первого элемента по порядку, то есть перебираем i = 1 … ( N − 1 ) i=1…(N−1). 
В π [ 0 ] π[0] всегда кладём ноль. Чтобы узнать π [ i ] π[i], мы сравниваем элементы s [ i ] s[i] и s [ k ] s[k]. 
Для каждого i i на первом шаге положим k = π [ i − 1 ] . k=π[i−1]. 
Если s [ i ] = s [ k ] s[i]=s[k], то π [ i ] = k + 1 π[i]=k+1. 
Иначе обновляем k = π [ k − 1 ] k=π[k−1] и возвращаемся к предыдущему шагу алгоритма. 
Если в какой-то момент k = 0 k=0, а ответ мы так и не нашли, то сравниваем первый символ с i i-ым, и переходим к следующему i i.
*/