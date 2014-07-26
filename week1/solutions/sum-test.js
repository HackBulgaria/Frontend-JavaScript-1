var sum = require("./sum").sum;

exports.testSumWithNumbers = function(test) {
  test.equal(10, sum(5,5));
  test.done();
};

exports.testSumWithStrings = function(test) {
  test.throws(function() {
    sum("asd", "asd");
  });
  test.done();
};
