"use strict";

var listToNumber = require("./listToNumber").listToNumber;

exports.testNumbers = function(test) {
    test.equal(123, listToNumber([1, 2, 3]));
    test.equal(99999, listToNumber([9, 9, 9, 9, 9]));
    test.equal(123023, listToNumber([1, 2, 3, 0, 2, 3]));
    test.done();
};
