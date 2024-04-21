/**
 * Слова-анаграммы — это слова, записанные одними и теми же буквами в разном порядке,
 * регистр букв при этом игнорируется.
 * Анаграммами, например, являются слова «Волос» и «СЛОВО».
 *
 * Напишите функцию anagram(x, y) проверяющую, являются ли x и y словами-анаграммами.
 *
 * Пример:
 *
 * anagram('Волос', 'Слово') === true
 * anagram('Живу', 'Вижу') === true
 *
 * @param {string} x
 * @param {string} y
 * @returns {boolean}
 */
function anagram(x, y) {
    let x1 = x.toLowerCase().split('').sort();
    let y1 = y.toLowerCase().split('').sort();
    if (x1.length !== y1.length || x1.length === 0) {
        return false;
    }
    for (let i = 0; i <= x1.length; i += 1) {
        if (x1[i] !== y1[i]) {
            return false;
        }
    }
    return true;
}

module.exports = anagram;
