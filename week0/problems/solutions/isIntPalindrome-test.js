'use strict';


var isIntPalindrome = require('./isIntPalindrome').isIntPalindrome;


exports.testIsIntPalindrome111 = function(test) {
    test.equals(true, isIntPalindrome(111));
    test.done();
};

exports.testIsIntPalindrome123 = function(test) {
    test.equals(false, isIntPalindrome(123));
    test.done();
};

exports.testIsIntPalindrome123212321 = function(test) {
    test.equals(true, isIntPalindrome(123212321));
    test.done();
};
