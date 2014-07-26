var groupBy = require("./groupBy.js").groupBy;

var countBy = function(countingFunction, arr) {
  var
    result = {},
    grouped = groupBy(countingFunction, arr);

  Object.keys(grouped).forEach(function(key) {
    result[key] = grouped[key].length;  
  });

  return result;
};
