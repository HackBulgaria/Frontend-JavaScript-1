/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var countSubstrings = require('./countSubstrings').countSubstrings;

exports.testCountSubstringsBabababa = function (test) {
    test.equals(2, countSubstrings('babababa', 'baba'));
    test.done();
};

exports.testCountSubstringsLongSentence = function (test) {
    test.equals(3,
        countSubstrings('JavaScript is an awesome language to program in!',
            'o'));
    test.done();
};

exports.testCountSubtstringsNothingInCommon = function (test) {
    test.equals(0, countSubstrings('We have nothing in common!', 'really'));
    test.done();
};
