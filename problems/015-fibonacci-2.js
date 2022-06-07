/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(value) {
    const fibonacci = (n) => {
        if (n == 0) return 0;
        return n == 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
    };

    let i = 0;
    let fibValue = fibonacci(i);

    while (fibValue <= value) {
        if (fibValue === value) return i;

        fibValue = fibonacci(++i);
    }

    return undefined;
}

module.exports = isFibonacci;
