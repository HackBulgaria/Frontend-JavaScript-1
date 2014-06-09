/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

var sumOfMinAndMax = require("./sumOfMinAndMax").sumOfMinAndMax;

exports.testSumOfMinAndMaxThrow = function (test) {
    test.throws = function () {
        sumOfMinAndMax("sdfsd");
    };
    test.done();
};

exports.testSumOfMinAndMaxThrow0 = function (test) {
    test.throws = function () {
        sumOfMinAndMax([]);
    };
    test.done();
};

exports.testSumOfMinAndMaxThrow1 = function (test) {
    test.throws = function () {
        sumOfMinAndMax([1.5, "fdgfd", 8, 4]);
    };
    test.done();
};

exports.testSumOfMinAndMax1 = function (test) {
    test.equal(2, sumOfMinAndMax([3.5, 11, -9, 5]));
    test.done();
};