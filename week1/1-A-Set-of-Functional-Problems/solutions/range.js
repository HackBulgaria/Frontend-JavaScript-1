// recursive solution
var range = function(from, to) {
  if(from > to) { 
    return [];
  }

  return [from].concat(range(from + 1, to));
};

console.log(range(1, 10));

// iterative solution

var range2 = function(from, to) {
  var result = [];
  while(from <= to) {
    result.push(from);
    from++;
  }
  return result;
};

console.log(range2(1,10));
