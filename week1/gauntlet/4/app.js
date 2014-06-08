$(document).ready(function() {
  'use strict';

  var ALL_STUDENTS = [];
  var GROUPED_BY_COURSE = [];

  $.getJSON('http://localhost:3000/students', function(students) {
    ALL_STUDENTS = students;
    GROUPED_BY_COURSE = groupBy(ALL_STUDENTS, function(x) {
      return x.course;
    });

    var $formSelectElements = $('form').find('select');

    $formSelectElements.first().change(function() {
      populateStudents($formSelectElements);
      $formSelectElements.last().trigger('change');
    });

    $formSelectElements.last().change(function() {
      outputStudent($formSelectElements);
    });

    populateCourseSelect($formSelectElements);
    populateStudents($formSelectElements);
    outputStudent($formSelectElements);
  });

  function populateCourseSelect(selectElement) {
    var courses = Object.keys(GROUPED_BY_COURSE);

    var coursesAsOptionElement = courses.map(function(courseName) {
      var option = $('<option>');
      option.text(courseName);
      return option;
    });

    var courseSelector = selectElement.first();

    coursesAsOptionElement.forEach(function(opt) {
      courseSelector.append(opt);
    });
  }

  function populateStudents(selectElement) {
    var selectedCourse = selectElement.first().val(),
        studentsHolder = selectElement.last();

    studentsHolder.empty();

    GROUPED_BY_COURSE[selectedCourse].forEach(function(student) {
      var option = $('<option>');
      option.text(student.name);
      studentsHolder.append(option);
    });
  }

  function outputStudent(selectElement) {
    var $container = $('.row').last().children().first(),
        studentName = selectElement.last().val(),
        studentGit;

    $container.empty();

    ALL_STUDENTS.forEach(function(student) {
      if (student.name === studentName) {
        studentGit = student.github;
      }
    });

    var $output = $('<h3>');
    $output.text('GitHub for ' + studentName +
      ' is ' + studentGit);

    $container.append($output);
  }

  var groupBy = function(arr, func) {
    var grouped = {};

    arr.forEach(function(obj) {
      var key = func(obj);

      if (grouped[key]) {
        grouped[key].push(obj);
      } else {
        grouped[key] = [obj];
      }
    });

    return grouped;
  };

});
