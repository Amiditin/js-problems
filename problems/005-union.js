/**
 * Напишите функцию union(a, b) возвращающую упорядоченный по возрастанию массив
 * состоящий из чисел встречающихся в обоих наборах.
 *
 * Пример:
 *
 * union([1, 1, 3, 2, 5], [5, 3, 7, 7]) === [3, 5]
 * union([2, 4, 6, 8, 10, 12, 10, 8, 6, 4, 2], [3, 6, 9, 12, 15, 18]) === [6, 12]
 * union([1, 2, 3], [11, 0, -1]) === []
 *
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
function union(a, b) {
    let dict = { arr: [] };

    const getDict = (arr1, arr2) => {
        arr1.forEach((el) => (dict[el] = true));
        arr2.forEach((el) => dict[el] && dict.arr.push(el));
    };

    a.length > b.length ? getDict(a, b) : getDict(b, a);

    return dict.arr.sort((num1, num2) => num1 - num2);
}

module.exports = union;
