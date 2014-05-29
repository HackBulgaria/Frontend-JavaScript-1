"use strict";

var factorial = function(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial (n - 1);
};

// make the function available for testing
exports.factorial = factorial;
