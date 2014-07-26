"use strict";

var always = function(x) {
  return function() {
    return x;
  }
};

exports.always = always;
