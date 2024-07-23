function get_least_primes_linear(n) {
    let lp = new Array(n + 1).fill(0); // массив для хранения наименьших простых делителей
    let primes = []; // массив для хранения простых чисел

    for (let i = 2; i <= n; i++) {
        if (lp[i] == 0) { // если lp[i] равно 0, то i - простое число
            lp[i] = i; // записываем i как наименьший простой делитель для i
            primes.push(i); // добавляем i в массив простых чисел
        }
        console.log(primes);
        for (let j = 0; j < primes.length; j++) { // пробегаем по всем найденным простым числам
            let x = primes[j] * i;
            if (primes[j] > lp[i] || x > n) {
                break; // если простое число больше наименьшего простого делителя для i или произведение больше n, прекращаем
            }
            lp[x] = primes[j]; // записываем наименьший простой делитель для x
        }
    }

    console.log([primes, lp]);
}

get_least_primes_linear(15);