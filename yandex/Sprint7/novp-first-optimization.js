// Заполняем массив нулями, так как длина НОВП в худшем случае равна нулю.
// Большую оценку без просмотра последовательностей мы не можем получить.
let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
        // Сначала обновляем состояние согласно второму варианту, когда A[i-1] не входит в НОВП.
        dp[i][j] = dp[i - 1][j];
        // Если A[i-1] == B[j-1], то можно сделать обновление dp[i][j] по первому варианту, когда A[i-1] включается в НОВП.
        if (A[i - 1] == B[j - 1]) {
            let max_val = 0;
            for (let j_prev = 1; j_prev < j; j_prev++) {
                if (B[j_prev - 1] < B[j - 1]) {
                    max_val = Math.max(max_val, dp[i - 1][j_prev]);
                }
            }
            dp[i][j] = Math.max(dp[i][j], 1 + max_val);
        }
    }
}
// Ответ находится в последней строке таблицы, но необязательно в клетке dp[n][m].
let ans = 0;
for (let j = 0; j <= m; j++) {
    ans = Math.max(ans, dp[n][j]);
}