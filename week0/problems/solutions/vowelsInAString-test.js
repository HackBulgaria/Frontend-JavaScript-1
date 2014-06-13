/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var vowelsInAString = require('./vowelsInAString').vowelsInAString;

exports.testVowelsInAStringSentence = function (test) {
    test.equals(6, vowelsInAString('this is a sentence'));
    test.done();
};

exports.testVowelsInAStringVolcano = function (test) {
    test.equals(8, vowelsInAString('Theistareykjarbunga'));
    test.done();
};

exports.testVowelsInAStringUppercase = function (test) {
    test.equals(9, vowelsInAString('i LiKe To WrItE lIkE tHaT'));
    test.done();
};
