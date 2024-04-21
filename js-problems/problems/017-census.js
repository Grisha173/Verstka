/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */
function census(list) {
    // let maxAge = 0;
    // let index = undefined;
    // list.forEach((element, idx) => {
    //     if (element.age > maxAge && element.gender === 'Male') {
    //         maxAge = element.age;
    //         index = idx + 1;
    //     }
    // });
    // return index;
    let maxAge = 0;
    list.forEach(element => {
        if (element.age > maxAge && element.gender === 'Male') {
            maxAge = element.age;
        }
    }); 
    const index = list.findIndex(item => item.age === maxAge);
    return  index >= 0 ? index + 1 : undefined;
}

module.exports = census;
