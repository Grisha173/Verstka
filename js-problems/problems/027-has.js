/**
 * Напишите функцию has(path, object) возвращающую true, если в объекте есть свойство
 * описанное массивом path, иначе false
 *
 * Пример:
 *
 * has(['a'], { a: 1 }) === true
 * has(['b'], { a: 1 }) === false
 * has(['o', 'a'], { o: { a: 2 } }) === true
 *
 * @param {string[]} path
 * @param {object} object
 * @returns {boolean}
 */
function has(path, object) {
    let objectKeys = Object.keys(object || {});
    // for (let i = 0; i < path.length; i += 1) {
    //     if (!objectKeys.some(element => element === path[i])) return false;
    // }
    // return true;
   
    return !path.filter(element => !objectKeys.some(item => item === element)).length;
}

module.exports = has;
