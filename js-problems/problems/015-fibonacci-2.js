/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(n) {
    let array = [0, 1];
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    for (let i = 2; i <= n + 1; i += 1) {
        array.push(array[i - 1] + array[i - 2]);
    }
    let result = array.find((element) => element === n);
    if (result === n) {
        return array.indexOf(n);
    } else {
        return undefined;
    }
}

module.exports = isFibonacci;
