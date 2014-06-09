"use strict";

var primeNumberOfDivisors =
    require("./primeNumberOfDivisors").primeNumberOfDivisors;

exports.testWithEigth = function(test) {
    test.equal(false, primeNumberOfDivisors(8));
    test.done();
};

exports.testWithSeven = function(test) {
    test.equal(true, primeNumberOfDivisors(7));
    test.done();
};

exports.testWithNine = function(test) {
    test.equal(true, primeNumberOfDivisors(9));
    test.done();
};
