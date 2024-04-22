/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */
function rle(value) {
    const array = value.split('').reduce((akum, item) => {
        if (!akum.length) return [{letter: item, count: 1}];
        if (akum[akum.length - 1].letter === item) {
            akum[akum.length - 1].count += 1;
            return akum;
        } else {
            akum.push({letter: item, count: 1});
            return akum;
        }
    }, []);
    return array.map(item => item.count > 1 ? `${item.count}${item.letter}` : item.letter).join('');
}

module.exports = rle;
