var 
  fs = require("fs"),
  options = {
    encoding: "utf8"
  };

fs.readFile("../README.md", options, function(err, contents) {
  console.log(contents);
});
