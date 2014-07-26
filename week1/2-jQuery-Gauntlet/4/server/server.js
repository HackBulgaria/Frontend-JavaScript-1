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

var students = [{
  "id" : 1,
  "name" : "Daniel Taskoff",
  "course" : "Frontend JavaScript",
  "github" : "https://github.com/dtaskoff/"
}, {
  "id" : 2,
  "name" : "Elena Jeleva",
  "course" : "Programming 101",
  "github" : "https://github.com/egzheleva/JavaScript"
}, {
  "id" : 3,
  "name" : "Luboslava Dimitrova",
  "course" : "Frontend JavaScript",
  "github" : "https://github.com/LucyDimitrova"
}, {
  "id": 4,
  "name" : "Anton Antonov",
  "course" : "Core Java",
  "github" : "https://github.com/syndbg"
}, {
  "id" : 5,
  "name" : "Nikola Dichev",
  "course" : "Core Java",
  "github" : "https://github.com/kokod"
}, {
  "id" : 6,
  "name" : "Ivaylo Bachvaroff",
  "course" : "Frontend JavaScript",
  "github" : "https://github.com/Ivaylo-Bachvarov"
}, {
  "id" : 7,
  "name" : "Emanuela Mollova",
  "course" : "Frontend JavaScript",
  "github" : "https://github.com/EmanuelaMollova"
}];

app.get('/students', function(req, res){
  res.json(students);
});


var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
