# Beer and Fries - The Ultimate Combination!

Ivan is the owner of a popular Ale House in Sofia.

He has developed a new formula, that gives each beer or fries a score, that is an integer number.

Also, he has found out that if you pair a beer with fries, the total score of them is the multiple of each individual score.

For example, if we pair a beer with a score of `10` and fries with a score of `5`, the total score for the pair is `5 * 10 = 50`

Ivan has an equal number of beer types and french fries types. He wants to find out how to combine them in pairs in order to get the maximum score of all! (The sum of all pair scores)

Implement a function, called `beerAndFries(items)` that takes an array of objects:

```
[{
  type : "beer",
  score : 10
},
{
  type : "fries",
  score : 10
},
...
]
```

Each object in the array is going to have only two properties - `type`, which will be either `beer` of `fries`, and a `score` - an integer number.

The function should output the maximum score that can be achieved by pairing a beer with fries.

__The number of beers in the array will be equal to the number of fries!__


## Example cases

Here is a full unit-test example (using `nodeunit`) with test data:

```javascript
"use strict";

var beerAndFries = require("./beerAndFries.js").beerAndFries;


exports.testBeerAndFriesScenario1 = function(test) {
  var testData = [{
    type: "beer",
    score: 10
  }, {
    type: "beer",
    score: 11
  }, {
    type: "fries",
    score: 1
  }, {
    type: "fries",
    score: 5
  }];

  test.equal(65, beerAndFries(testData));
  test.done();
};


exports.testBeerAndFriesScenario2 = function(test) {
  var testData = [{
    type: "beer",
    score: 1
  }, {
    type: "beer",
    score: 11
  }, {
    type: "fries",
    score: 0
  }, {
    type: "fries",
    score: 50
  }];

  test.equal(550, beerAndFries(testData));
  test.done();
};


exports.testBeerAndFriesScenario3 = function(test) {
  var testData = [{
    type: "beer",
    score: 5
  }, {
    type: "fries",
    score: 5
  }];

  test.equal(25, beerAndFries(testData));
  test.done();
};

exports.testBeerAndFriesScenario4 = function(test) {
  var testData = [];

  test.equal(0, beerAndFries(testData));
  test.done();
};

exports.testBeerAndFriesScenario5 = function(test) {
  var testData = [{
    type: "beer",
    score: 1000
  }, {
    type: "beer",
    score: 1010
  }, {
    type: "beer",
    score: 1020
  }, {
    type: "beer",
    score: 1030
  }, {
    type: "beer",
    score: 1040
  }, {
    type: "fries",
    score: 834
  }, {
    type: "fries",
    score: 500
  }, {
    type: "fries",
    score: -1
  }, {
    type: "fries",
    score: 0
  }, {
    type: "fries",
    score: 60
  }];

  test.equal(1442560, beerAndFries(testData));
  test.done();
};
```

## Details regarding implementation

Upload your solution to your GitHub account in a repository of your choice. We prefer that over gists.

__If you are using 3rd party libraries, don't forget to include `package.json` as well.__
