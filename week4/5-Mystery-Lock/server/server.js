"use strict";

var express = require("express"),
    _ = require("lodash"),
    app = express(),
    bodyParser = require("body-parser"),
    PORT = 3000,
    buttonLabels = ["Odin", "Thor", "Loki", "Yggdrasil", "Asgard", "Valhalla"],
    secretsHash = {},
    resultedSecret = "";

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", ["X-Requested-With", "Content-Type"]);
  next();
});

// parse JSON requests
app.use(bodyParser.json());

app.get("/init", function(req, res) {
  buttonLabels = _.shuffle(buttonLabels);
  resultedSecret = "";

  buttonLabels.forEach(function(label) {
    var randomSecret = _.random(1000, 9999);

    secretsHash[label] = randomSecret;
    resultedSecret += randomSecret.toString();
  });

  console.log(resultedSecret);

  res.json(buttonLabels.map(function(label, index) {
    return {
      index: index,
      label: label
    };
  }));
});

app.get("/secret/:label", function(req, res) {
  var requestedLabel = req.params.label;
  console.log(requestedLabel);
  if(secretsHash[requestedLabel]) {
    res.json({
      secret: secretsHash[requestedLabel]
    });
  } else {
    res.status(404).json({
      error: "Label not found"
    });
  }
});


app.post("/unlock", function(req, res) {
  var finalSecret = req.body.finalSecret || "",
      result = {
        status: "INCORRECT"
      };

  if(finalSecret === resultedSecret) {
    result.status = "CORRECT";
  }

  res.json(result);
});

console.log("App is listening at http://localhost:" + PORT);
app.listen(PORT);

