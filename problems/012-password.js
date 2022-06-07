/**
 * Пароль называется криптостойким,
 * если он включает в себя хотя бы одну строчную английскую букву,
 * хотя бы одну заглавную английскую букву и хотя бы одну цифру,
 * при этом его длина должна быть не менее 7 символов.
 *
 * Напишите функцию validatePassword(password) определяющую,
 * является ли переданный пароль криптостойким.
 *
 * Пример:
 *
 * validatePassword('abc4DEFG') === true
 * validatePassword('abcdefg') === false
 * validatePassword('abcdefG') === false
 * validatePassword('abcdef7') === false
 *
 * @param {string} password
 * @returns {boolean}
 */
function validatePassword(password) {
    if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password))
        return true;
    return false;
}

console.log(validatePassword("abc4DEFG"));
console.log(validatePassword("abcdefg"));
console.log(validatePassword("abcdefG"));
console.log(validatePassword("abcdef7"));

module.exports = validatePassword;
