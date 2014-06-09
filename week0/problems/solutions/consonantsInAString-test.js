/*
 * Solution by Christina Mileva
 * GitHub - https://github.com/ChrisChrisi
 */

"use strict";
var consonantsInAString = require("./consonantsInAString").consonantsInAString;

exports.testConsonantsInAStringThrow = function (test) {
    test.throws = function () {
        consonantsInAString([2, 23, 8]);
    };
    test.done();
};

exports.testConsonantsInAString = function (test) {
    test.equal(0, consonantsInAString("aeoi"));
    test.done();
};

exports.testConsonantsInAString1 = function (test) {
    test.equal(7, consonantsInAString("Javascript"));
    test.done();
};