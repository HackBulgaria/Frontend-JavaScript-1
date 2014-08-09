function logger(logFunction) {
  return function(message) {
    logFunction(message);
  }
};

var
  fs = require("fs"),
  consoleLogger = logger(console.log.bind(console)),
  fileLogger = logger(function(message) {
      fs.appendFileSync("LOG", message);
      fs.appendFileSync("LOG", "\n");
  });


//consoleLogger("HELLO CONSOLE!");
fileLogger("HELLO FILE!");

