// solution here

var throwPositiveIntegerError = function (n) {
    if (typeof n !== "number" || n % 1 !== 0 || n < 0) {
        throw new TypeError("The input should be positive integer.");
    }
};

var throwIntegerError = function (n) {
    if (typeof n !== "number" || n % 1 !== 0) {
        throw new TypeError("The input should be integer.");
    }
};

// i didn't find the function range, only _.range
var range = function (n) {
    throwPositiveIntegerError(n);
    return Array
        .apply(null,
        {
            length: (n)
        })
        .map(Number.call, Number);
};

var isPrime = function (n) {
    throwIntegerError(n);
    n = Math.abs(n);
    if (n === 2) {
        return true;
    }
    if (n === 1) {
        return false;
    }
    var arr = range(n + 1);
    arr = arr.slice(2);

    var sumOfDivisors = arr
        .filter(function (a) {
            return (n % a === 0);
        }).
        reduce(function (a, b) {
            return a + b;
        });
    if (sumOfDivisors === n) {
        return true;
    }

    return false;
};

var primeFactorization = function (num) {
    throwPositiveIntegerError (num);
    if (isPrime(num)) {
        return [
            [num, 1]
        ]
    }
    num = Math.abs(num);
    var allNums = range(num)
        .filter(function (a) {
            return (a % 2 != 0)
        });
    allNums = allNums.slice(1);
    allNums.unshift(2);
    allNums = allNums.filter(function (a) {
        return (isPrime(a) && (num % a === 0));
    });

    var result = [];
    allNums.forEach(function (a) {
        var count = 0;
        while (num % a === 0) {
            count += 1;
            num = parseInt(num / a);
        }
        result.push([a, count]);
    });
    return result;

};

exports.primeFactorization = primeFactorization;