require.config({
  paths: {
    "jquery": "../bower_components/jquery/dist/jquery",
    "underscore": "../bower_components/lodash/dist/lodash",
    "backbone": "../bower_components/backbone/backbone"
  }
});

require(["jquery", "underscore", "backbone", "user"],
  function($, _, Backbone, User) {
  console.log(Backbone);
  console.log(User);
});
