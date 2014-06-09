"use strict";

var isIntPalindrom = require("./isIntPalindrom").isIntPalindrom;

exports.testPalindroms = function(test) {
    test.equal(true, isIntPalindrom(1));
    test.equal(true, isIntPalindrom(100001));
    test.equal(true, isIntPalindrom(999));
    test.done();
};

exports.testNotPalindroms = function(test) {
    test.equal(false, isIntPalindrom(42));
    test.equal(false, isIntPalindrom(123));
    test.done();
};
