"use strict";

var countSubstrings = require("./countSubstrings").countSubstrings;

exports.testSubstrings = function(test) {
    test.equal(2, countSubstrings("This is a test string", "is"));
    test.equal(2, countSubstrings("babababa", "baba"));
    test.equal(2, countSubstrings("This is this and that is this", "this"));
    test.equal(3, countSubstrings(
        "JavaScript is an awesome language to program in!", "o"
    ));
    test.done();
};

exports.testNotASubstring = function(test) {
    test.equal(0, countSubstrings("We have nothing in common!", "really?"));
    test.done();
};
