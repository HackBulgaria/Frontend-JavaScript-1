"use strict";

var consonantsInAString = require("./consonantsInAString").consonantsInAString;

exports.testStringsWithConsonants = function(test) {
    test.equal(7, consonantsInAString("JavaScript"));
    test.equal(11, consonantsInAString("Theistareykjarbunga"));
    test.equal(6, consonantsInAString("A nice day to code!"));
    test.equal(7, consonantsInAString("grrrrgh!"));

    var str = "Github is the second best thing that happend to programmers," +
        "after the keyboard!";

    test.equal(44, consonantsInAString(str));
    test.done();
};
