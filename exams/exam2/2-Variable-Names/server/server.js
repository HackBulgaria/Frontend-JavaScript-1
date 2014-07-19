/* global require, console */
"use strict";

var
  express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  PORT = 8080,
  parseInt10 = function(x) {
    return parseInt(x, 10);
  },
  names = [ "James Isreal",
            "Earlean Porche",
            "Emilio Millen",
            "Elna Dukes",
            "Kymberly Willetts",
            "Bryon Tedrick",
            "Latrice Penn",
            "Yu Ertle",
            "Allyn Barbara",
            "Kiera Mcbath",
            "Mattie Vieira",
            "Tomasa Cummings",
            "Daina Kocian",
            "Doreatha Fountaine",
            "Claribel Stigall",
            "Layne Almeda",
            "Estrella Felton",
            "Laquanda Gotcher",
            "Lashell Olivarez",
            "Dionna Holmstrom"];

names = names.map(function(name, index) {
  return {
    name: name,
    nameId: index + 1
  };
});

app.use(bodyParser.json());

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", ["X-Requested-With", "Content-Type"]);
  next();
});

app.get("/names", function(req, res) {
  res.json(names);
});

app.post("/name", function(req, res) {
  var
    updatedName = req.body.name,
    nameId = parseInt10(req.body.nameId) - 1;

    console.log(names[nameId]);

    if(!names[nameId]) {
      res.status(404);
      res.json({
        status: "NAME_NOT_FOUND"
      });
      return;
    }

    names[nameId].name = updatedName;

    res.json({
      status: "NAME_SAVED"
    });
});

console.log("App listening at %d", PORT);
app.listen(PORT);
