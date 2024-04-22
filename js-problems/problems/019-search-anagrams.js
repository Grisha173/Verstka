/**
 * Со словами-анаграммами мы познакомились в прошлой задаче.
 *
 * Напишите функцию searchAnagrams(value) возвращающую слова-анаграммы из предложения,
 * сохраняя их порядок и регистр букв
 *
 * Пример:
 *
 * searchAnagrams('Вижу апельсин значит живу. Спаниель') === 'Вижу апельсин живу Спаниель'
 *
 * @param {string} value
 * @returns {string}
 */
function searchAnagrams(value) {
    let valueRegex = (value.match(/[a-zA-Zа-яА-Я]{1,}/g) || []).map(item => ({word: item, letters: item.toLocaleLowerCase().split('').sort().join('')}));
    valueRegex = valueRegex.filter(({word, letters}) => valueRegex.some(item => item.word.toLowerCase() !== word.toLowerCase() && item.letters === letters));
    return valueRegex.map(item => item.word).join(' ');

}

module.exports = searchAnagrams;
