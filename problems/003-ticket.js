/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    const getSum = (num) => num.split("").reduce((sum, cur) => +sum + +cur);

    let sum1 = getSum(number.slice(0, 3));
    let sum2 = getSum(number.slice(3, 6));

    return sum1 == sum2;
}

checkTicket("005212");

module.exports = checkTicket;
