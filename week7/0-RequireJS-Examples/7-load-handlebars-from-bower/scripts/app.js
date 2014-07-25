/* global require */
"use strict";

require.config({
  paths: {
    "jquery": "../bower_components/jquery/dist/jquery",
    "handlebars": "../bower_components/handlebars/handlebars"
  },
  // again, Handlebars is not an AMD module so we have to shim it
  // we export the global Handlebars as a return of the shimmed module
  shim: {
    "handlebars": {
      exports: "Handlebars"
    }
  }
});

require(["jquery", "handlebars"], function($, Handlebars) {
  var
    templateString = "<p>Hello {{name}}!</p>",
    compiledTemplate = Handlebars.compile(templateString),
    html = compiledTemplate({
      name: "Stranger"
    });

    $("body").append(html);
});
