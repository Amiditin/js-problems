/**
 * Напишите функцию getTimeDelta(x, y) определяющую,
 * сколько секунд прошло между двумя моментами времени x и y.
 *
 * Время передается в формате 'HH:MM:SS'. Минимальное значение – '00:00:00', максимальное – '23:59:59'.
 *
 * По условию x всегда меньше y.
 *
 * Пример:
 *
 * getTimeDelta('00:00:00', '00:00:01') === 1
 * getTimeDelta('01:01:01', '02:02:02') === 3661
 * getTimeDelta('01:19:30', '01:20:20') === 50
 *
 * @param {string} x
 * @param {string} y
 * @returns {number} разница между x и y в секундах
 */
function getTimeDelta(x, y) {
    const getDate = (str) => {
        let arr = str.split(":");
        return new Date(2022, 0, 1, arr[0], arr[1], arr[2]);
    };

    let date1 = getDate(x);
    let date2 = getDate(y);

    let seconds = (date2 - date1) / 1000;

    return seconds;
}

console.log(getTimeDelta("00:00:00", "00:00:01"));

module.exports = getTimeDelta;
