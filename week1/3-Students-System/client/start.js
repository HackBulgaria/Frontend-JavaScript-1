function getStudents(cb) {
  $.getJSON("http://localhost:3000/students", cb);
}

$(document).ready(function() {
    getStudents(function(students) {
      var $container = $("#container"), 
          $ul = $("<ul></ul>");

      students.forEach(function(student) {
        $li = $("<li></li>").html(student.name);

        $ul.append($li);
      });

      $container.append($ul);

    });
});
