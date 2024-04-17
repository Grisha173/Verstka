/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    let sumMassive3 = 0;
    let sumMassive33 = 0;
    for (let i = 0; i <= 2; i += 1) {
        sumMassive3 += Number(number.substring(i, i + 1));
    }
    for (let i = 3; i <= 5; i += 1) {
        sumMassive33 += Number(number.substring(i, i + 1));
    }
    return sumMassive3 === sumMassive33;
}

module.exports = checkTicket;
