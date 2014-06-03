"use strict";

var f = require("./throws").f;

exports.testThrows = function(test) {
  test.throws(function() {
    f();
  });
  test.done();
};
