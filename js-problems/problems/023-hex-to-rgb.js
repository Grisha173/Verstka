/**
 * Hex и RGB - текстовые форматы для представления цвета в коде.
 *
 * Напишите функцию hexToRgb(color) конвертирующую цвет закодированный в формате HEX
 * в RGB кодированную строку.
 *
 * Пример:
 *
 * hexToRgb('#000000') === 'rgb(0, 0, 0)'
 * hexToRgb('#fff') === 'rgb(255, 255, 255)'
 * hexToRgb('#800080') === 'rgb(128, 0, 128)'
 *
 * @param {string} color
 * @returns {string}
 */
function hexToRgb(color) {
    let strSlice = color.slice(1);
    strSlice = strSlice.split('');
    if (strSlice.length === 3) strSlice = [strSlice[0] + strSlice[0], strSlice[1] + strSlice[1], strSlice[2] + strSlice[2]];
    if (strSlice.length === 6) strSlice = [strSlice[0] + strSlice[1], strSlice[2] + strSlice[3], strSlice[4] + strSlice[5]];
    strSlice = strSlice.map(element => parseInt(element, 16));
    return `rgb(${strSlice[0]}, ${strSlice[1]}, ${strSlice[2]})`;
}

module.exports = hexToRgb;
