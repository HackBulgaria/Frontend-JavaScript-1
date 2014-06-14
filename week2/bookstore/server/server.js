"use strict";
// trying to start this file but something's not working?
// try npm install first

var express = require('express');
var app = express();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

var books = require("./books");

app.get('/books', function(req, res){
  res.json(books);
});


var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
