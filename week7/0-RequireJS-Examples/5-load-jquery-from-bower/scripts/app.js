// we are configurating a specific path for jQuery
require.config({
  paths: {
    "jquery": "../bower_components/jquery/dist/jquery"
  }
});

require(["jquery", "person"], function($, Person) {
  var p = new Person("Rado", 24);
  $("body")
    .html("All went fine with jQuery loading!")
    .append("<br />")
    .append(p.toString());
});
