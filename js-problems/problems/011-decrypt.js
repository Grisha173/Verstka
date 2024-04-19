/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */
function decrypt(secret) {
    let newSecret = '';
    for (let i = 0; i < secret.length; i += 1) {
        if (!/[A-Za-z]/.test(secret[i])) {
            newSecret += secret[i];
        } else {
            let newLetter = String.fromCharCode(secret.charCodeAt(i) + 1);
            if (/[A-Za-z]/.test(newLetter)) {
                newSecret += newLetter;
            } else {
                newSecret += 'a';
            }
        }
    }
    return newSecret;
}

module.exports = decrypt;
