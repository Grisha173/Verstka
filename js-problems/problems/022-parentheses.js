/**
 * Строка со скобками считается валидной, если на каждую закрывающую скобку имеется ранее открытая
 * и на каждую ранее открытую имеется закрывающая.
 *
 * Напишите функцию parentheses(value) проверяющую строку со скобками на валидность.
 *
 * Пример:
 *
 * parentheses('') === false
 * parentheses('()()') === true
 * parentheses('(()())') === true
 * parentheses('(()') === false
 * parentheses(')') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function parentheses(value) {
    if (!value) return false;
    const array = value.split('');
    let count = 0;
    let error = false;
    array.forEach(element => {
        if (element === ')') count -= 1;
        if (element === '(') count += 1;
        if (count < 0) error = true;
    });
    if (error) return false;
    if (count === 0) return true;
    return false;
}
        
module.exports = parentheses;