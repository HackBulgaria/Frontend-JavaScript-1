"use strict";

$(document).ready(function() {
  alert("Hooray, everything runs ok. You can remove this annoying alert from the code.");

  $.getJSON('http://localhost:3000/students', function(students, textStatus) {
      console.log(textStatus);
      console.log(students);

      alert("Students came. Open your console and remove this alert!");
      //start here
  });
});
