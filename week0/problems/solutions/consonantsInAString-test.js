/*
    Solution by Daniel Taskoff
    @github: https://github.com/dtaskoff/
*/

'use strict';


var consonantsInAString = require('./consonantsInAString').consonantsInAString;

exports.testConsonantsInAStringSentence = function (test) {
    test.equals(9, consonantsInAString('this is a sentence'));
    test.done();
};

exports.testConsonantsInAStringVolcano = function (test) {
    test.equals(11, consonantsInAString('Theistareykjarbunga'));
    test.done();
};

exports.testConsonantsInAStringUppercase = function (test) {
    test.equals(11, consonantsInAString('i LiKe To WrItE lIkE tHaT'));
    test.done();
};
