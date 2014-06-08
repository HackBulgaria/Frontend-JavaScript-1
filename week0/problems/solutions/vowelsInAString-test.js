"use strict";

var vowelsInAString = require("./vowelsInAString").vowelsInAString;

exports.testWithStringsWithVowels = function(test) {
    test.equal(3, vowelsInAString("JavaScript"));
    test.equal(8, vowelsInAString("Theistareykjarbunga"));
    test.equal(8, vowelsInAString("A nice day to code!"));

    var str = "Github is the second best thing that happend to programmers," +
        "after the keyboard!";

    test.equal(22, vowelsInAString(str));
    test.done();
};

exports.testWithStringsWithoutVowels = function(test) {
    test.equal(0, vowelsInAString("grrrrgh!"));
    test.done();
};
