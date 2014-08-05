require.config({
  paths: {
    "jquery": "../bower_components/jquery/dist/jquery",
    "underscore": "../bower_components/lodash/dist/lodash",
    "backbone": "../bower_components/backbone/backbone"
  }
});

require(["jquery", "underscore", "backbone", "user", "counter", "counterdisplay"],
  function($, _, Backbone, User, Counter, CounterDisplay) {
    var
      u = new User(),
      counterButtons = new Counter({
        el: "#counterView",
        model: u
      }),
      counterDisplay = new CounterDisplay({
        el: "#counterViewDisplay",
        model: u
      });

    counterButtons.render();
    counterDisplay.render();
});
