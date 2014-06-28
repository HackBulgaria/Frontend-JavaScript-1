"use strict";

function groupBy(groupingFunction, items) {
  var result = {};

  items.forEach(function(item) {
    var key = groupingFunction(item);

    if(!result[key]) {
      result[key] = [];
    }

    result[key].push(item);
  });

  return result;
}

function sortNumeric(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

function pluck(arr, property) {
  return arr.map(function(x) {
    return x[property];
  });
}

var beerAndFries = function(items) {
  var
    groups = groupBy(function(item) {
      return item.type;
    }, items),
    beerScores = sortNumeric(pluck(groups.beer || [], "score")),
    friesScores = sortNumeric(pluck(groups.fries || [], "score")),
    combinedScores = beerScores.map(function(score, index) {
      return score * friesScores[index];
    }),
    result = combinedScores.reduce(function(a, b) {
      return a + b;
    }, 0);

    return result;
};


exports.beerAndFries = beerAndFries;
