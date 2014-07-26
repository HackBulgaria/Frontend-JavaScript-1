var sum = function(a, b) {
  // check for types
  if(!(typeof a === "number" && typeof b === "number")) {
    throw new TypeError("Expected numbers, got " + typeof a + " and " +  typeof b)
  }
  
  return a + b;
};

exports.sum = sum;
