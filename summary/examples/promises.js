// using Q.js
var Q = require("q");

function readFileWithPromise(fileName, options) {
  var defer = Q.defer();

  fs.readFile(fileName, options, function(err, scopeContents) {
    if(err) {
      defer.reject(err);
    }

    defer.resolve(scopeContents);
  });

  return defer.promise;
}

var
  fs = require("fs"),
  options = {
    encoding: "utf8"
  };

readFileWithPromise("scope.js", options)
 .then(function(scopeContents) {
    console.log(scopeContents);
    return readFileWithPromise("logger.js", options);
 })
 .then(function(loggerContents) {
    console.log(loggerContents);
 });
