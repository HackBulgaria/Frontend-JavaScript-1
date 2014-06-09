/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var isNumberBalanced =
    require('./isNumberBalanced').isNumberBalanced;


exports.testIsNumberBalanced12323 = function (test) {
    test.equals(false, isNumberBalanced(12323));
    test.done();
};

exports.testIsNumberBalanced123231 = function (test) {
    test.equals(true, isNumberBalanced(123231));
    test.done();
};

exports.testIsNumberBalanced1234123 = function (test) {
    test.equals(true, isNumberBalanced(1234123));
    test.done();
};

exports.testIsNumberBalanced121 = function (test) {
    test.equals(true, isNumberBalanced(121));
    test.done();
};
