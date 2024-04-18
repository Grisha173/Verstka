/**
 * Напишите функцию getPower(n) возвращающую целочисленное значение степени >= 0,
 * в которую нужно возвести двойку, чтобы получить n
 *
 * Пример:
 *
 * getPower(2) === 1            # 2^1 = 2
 * getPower(3) === undefined
 * getPower(256) === 8          # 2^8 = 256
 *
 * @param {number} n
 * @returns {number|undefined}
 */
function getPower(n) {
    let step = 0;
    while (true) {
        if (Math.pow(2, step) === n) return step;
        if (Math.pow(2, step) > n) return undefined;
        step += 1;
    } 
}

module.exports = getPower;
