/**
 * Напишите функцию sum(n) возвращающую положительное целое число – сумму чисел,
 * расположенных между 1 и N включительно.
 *
 * Пример:
 *
 * sum(0) === 1
 * sum(5) === 15
 *
 * Больше примеров в тестах
 *
 * @param {number} n целое число
 * @returns {number}
 */
function sum(n) {
    const massive = [];
    let sumMassive = 0;
    for (let i = n; i != 1; i >= 1 ? i -= 1 : i += 1) {
        massive.push(i);
        if (i > 0) {
            sumMassive += i;
        }
    }
    massive.push(1);
    sumMassive += 1;
    return sumMassive;
}

module.exports = sum;
