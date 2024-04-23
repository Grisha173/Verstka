/**
 * Лена планирует свой двухнедельный отпуск.
 *
 * Напишите функцию vacation(date) вычисляющую день следующий за отпуском Лены
 *
 * Примечание: вместо ручного подсчета используй класс Date и его методы
 *
 * Пример:
 *
 * vacation('01.01.2020') === '15.01.2020'
 * vacation('27.01.2020') === '10.02.2020'
 *
 * @param {string} date
 * @returns {string}
 */
function vacation(date) {
    const array = date.split('.');
    const fisrtDate = new Date(array[2], array[1] - 1, array[0]);
    fisrtDate.setDate(fisrtDate.getDate() + 14);
    return fisrtDate.toLocaleDateString();
}

module.exports = vacation;
