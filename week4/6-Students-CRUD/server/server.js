"use strict";

var express = require("express"),
    bodyParser = require("body-parser"),
    app = express(),
    mongoose = require("mongoose"),
    PORT = 3030;

mongoose.connect("mongodb://localhost/students");

var Student = mongoose.model("Student", {
  name: String,
  facultyNumber: String,
  courses: [String]
});

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", ["X-Requested-With", "Content-Type", "Access-Control-Allow-Methods"]);
  res.header("Access-Control-Allow-Methods", ["DELETE"]);
  next();
});

app.use(bodyParser.json());

// lists all students
app.get("/students", function(req, res) {
  Student.find(function(err, students) {
    res.json(students);
  });
});

// lists an individual student
app.get("/student/:facultyNumber", function(req, res) {
  Student.findOne({ facultyNumber: req.params.facultyNumber || ""}, function(err, student) {

    console.log(student);
    if(student === null) {
      console.log("Not found")
      res.status(404);
      res.json({
        "error": "student_not_found"
      });
    } else {
      return res.json(student);
    }

  });
});


// creates or updates a student
app.post("/student", function(req, res) {
  var student = {
    name: req.body.name,
    courses: req.body.courses
  };

  if(req.body.facultyNumber) {
    Student.update({
      facultyNumber: req.body.facultyNumber
    }, student,{
      upsert: true
    }, function(err) {
      if(err) {
        res.status(500);
        res.json({
          status: "error_on_saving"
        });
      }

      res.json({
        status: "saved"
      });
    });
  }
});

// deletes a student
app.delete("/student/:facultyNumber", function(req, res) {
  Student.findOneAndRemove({ facultyNumber: req.params.facultyNumber }, function(err) {
      res.json({
        status: "deleted"
      });
  });
});

console.log("App is listening at port: " + PORT);
app.listen(PORT);
