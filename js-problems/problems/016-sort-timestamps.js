/**
 * Напишите функцию sortTimestamps(list) сортирующую список временных моментов.
 *
 * Пример:
 *
 * sortTimestamps(['23:02:59', '02:07:00']) === ['02:07:00', '23:02:59']
 *
 * @param {string[]} list массив временных моментов представленных в виде строк в формате 'HH:MM:SS'
 * @returns {string[]} отсортированный по возрастанию массив временных моментов
 */
function timeToNumber (item) {
    const array = item.split(':').map(item => Number(item));
    return array[0] * 3600 + array[1] * 60 + array[2];
}

function sortTimestamps(list) {
    // let result = list.map(item => item.split(':').map(item => Number(item)));
    // result.sort((a, b) => (a[0] * 3600 + a[1] * 60 + a[2]) > (b[0] * 3600 + b[1] * 60 + b[2]) ? 1 : -1);
    // return result.map(item => item.map(item => String(item).padStart(2, '0')).join(':'));
    return list.sort((a, b) => timeToNumber(a) > timeToNumber(b) ? 1 : -1);
}

module.exports = sortTimestamps;
