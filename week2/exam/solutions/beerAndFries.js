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

/*
  If we sort the beer and fries by score and combine them, we will get the desired result

  The algorithm is in several steps:
  1. First, we split the items array into two groups, based on the type - beer or fries
  2. Then we take only the score from each item in both group arrays
  3. Then we sort by the score (Numeric sort, order does not matter)
  4. Finally, we combine the elements by multiplying ai * bi and reducing after that
*/
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
