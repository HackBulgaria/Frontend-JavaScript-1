var
  fs = require("fs"),
  options = {
    encoding: "utf8"
  };

fs.readFile("scope.js", options, function(err, scopeContents) {
 console.log(scopeContents);
 fs.readFile("logger.js", options, function(err, loggerContents) {
   console.log(loggerContents);
 });
});
