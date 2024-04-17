/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
    let X = points
    .map((element) => element
        .split('-')
        .map((element) => Number(element))
    );
    let sumMassive2 = 0;
    let sumMassive22 = 0;
    for (let i = 0; i < 4; i += 1) {
       sumMassive2 += X[i][0];
       sumMassive22 += X[i][1];
    }
    if ( sumMassive2 > sumMassive22) return 1;
    if ( sumMassive2 < sumMassive22) return 2;
    return undefined;
}

module.exports = getWinner;
