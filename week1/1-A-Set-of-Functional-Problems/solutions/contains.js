var head = function(arr) {
  return arr[0];
};

var tail = function(arr) {
  return arr.slice(1);
};

// tail call optimization
var contains = function(element, arr) {
  if(arr.length === 0) {
    return false;
  }
  
  if(head(arr) === element) {
    return true;
  }

  return contains(element, tail(arr))
};

var contains2 = function(element, arr) {
  return arr.some(function(x) {
    x === element;
  });
};

var containsAll = function(elements, arr) {
  return elements.every(function(x) {
    return contains(x, arr);
  });
};  

// [1,2,3]
head([1,2,3]) === 1
tail([1,2,3]) === [2,3]

