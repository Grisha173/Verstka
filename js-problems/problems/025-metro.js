/**
 * Витя из дома до работы добирается по кольцевой линии метро.
 *
 * Напишите функцию metro(x,y) вычисляющую минимальное количество промежуточных станций
 * (не считая станции посадки и высадки), которые необходимо проехать Вите,
 * если на кольцевой линии 13 станций.
 *
 * Пример:
 *
 * metro(1, 2) === 0
 * metro(1, 3) === 1
 * metro(13, 1) === 0
 * metro(1, 13) === 0
 *
 * @param {number} x – станция посадки
 * @param {number} y - станция высадки
 * @returns {number}
 */
function metro(x, y) {
    // let min = x < y ? x : y;
    // let max = x > y ? x : y;
    let result = Math.abs(x - y);
    if (result < 7) return result - 1;
    if (result === 7) return result - 2;
    if (result === 8) return result - 4;
    if (result === 9) return result - 6;
    if (result === 10) return result - 8;
    if (result === 11) return result - 10;
    if (result === 12 || result === 1) return 0;
    // let left = 0;
    // let right = 0;
    // let currentLeft = x;
    // let currentRight = x;
    // while (currentLeft !== y) {
    //     left += 1;
    //     currentLeft -= 1;
    //     if (currentLeft <= 0) {
    //         currentLeft === 13;
    //     }
    //     console.log('LEFT', left, currentLeft, x, y);
    // }
    // while (currentRight !== y) {
    //     right += 1;
    //     currentRight += 1;
    //     if (currentRight >= 14) {
    //         currentRight === 1;
    //     }
    // }

    // return left < right ? left - 2 : right - 2;
}   

module.exports = metro;
