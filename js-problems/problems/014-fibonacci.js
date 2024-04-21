/**
 * Последовательностью Фибоначчи называется последовательность чисел
 * a0, a1, ..., an, ..., где
 * a0 = 0,
 * a1 = 1,
 * ak = ak-1 + ak-2 (k > 1).
 *
 * Напишите функцию fibonacci(n) вычисляющую n-ное число последовательности
 *
 * Пример:
 *
 * fibonacci(2) === 1
 * fibonacci(3) === 2
 * fibonacci(7) === 13
 *
 * @param {number} n >= 0
 * @returns {number}
 */
function fibonacci(n) {
    let array = [0, 1];
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    for (let i = 2; i <= n; i += 1) {
        array.push(array[i - 1] + array[i - 2]);
    }
    return array[array.length - 1];
}

module.exports = fibonacci;
