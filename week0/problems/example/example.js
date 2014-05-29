"use strict";

// map / filter


var map = function(f, arr) {
  var
    result = [],
    i = 0,
    n = arr.length;

  for(i; i < n; i ++) {
    result.push(f(arr[i]));
  }

  return result;
};

var filter = function(pred, arr) {
  var
    result = [],
    i = 0,
    n = arr.length;

  for(i; i < n; i++) {
    if(pred(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
};
