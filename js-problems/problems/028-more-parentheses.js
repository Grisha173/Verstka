/**
 * Ранее мы уже решали задачу валидации последовательности скобок в строке.
 *
 * На этот раз напишите функцию parentheses(value) валидирующую строку с несколькими типами скобок.
 *
 * Пример:
 *
 * parentheses('<>') === true
 * parentheses('<}') === false
 *
 * @param {string} value – строка из набора символов (, ), {, }, <, >.
 * @returns {boolean}
 */
function parentheses(value) {
    if (!value) return false;
    const array = value.split('');
    let count = 0;
    let count1 = 0;
    let count2 = 0
    let error = false;
    array.forEach(element => {
        if (element === ')') count -= 1;
        if (element === '(') count += 1;
        if (count < 0) error = true;
        if (element === '}') count1 -= 1;
        if (element === '{') count1 += 1;
        if (count1 < 0) error = true;
        if (element === '>') count2 -= 1;
        if (element === '<') count2 += 1;
        if (count2 < 0) error = true;
    });
    if (error) return false;
    if (count === 0 && count1 === 0 && count2 === 0) return true;
    return false;
}

module.exports = parentheses;
