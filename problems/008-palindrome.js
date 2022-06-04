/**
 * Напишите функцию isPalindrome(value) определяющую,
 * является ли переданная строка палиндромом, то есть строкой,
 * которая одинаково читается слева направо и справа налево.
 *
 * Пример:
 *
 * isPalindrome('121') === true
 * isPalindrome('boob') === true
 * isPalindrome('true') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function isPalindrome(value) {
    for (let index = 0; index < value.length / 2; index++) {
        if (value[index] != value[value.length - index - 1]) return false;
    }
    return true;
}

console.log(isPalindrome("121"));

module.exports = isPalindrome;
