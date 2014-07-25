require.config({
  paths: {
    "jquery": "../bower_components/jquery/dist/jquery",
    // point to bootstrap.js which holds all bootstral plugins
    "bootstrap": "../bower_components/bootstrap/dist/js/bootstrap"
  },
  // shim is to wrap libraries, that are not AMD compliant
  // to become friend for RequireJS
  shim: {
    "bootstrap": {
      // deps - from dependencies says that whenever you require bootstrap
      // jquery should be required before that
      "deps": ["jquery"]
    }
  }
});

// we don't need a variable to hold bootstrap
// because bootstrap attaches itself as jQuery plugins
require(["jquery", "bootstrap"], function($) {
  $(function() {
    $("#myModal").modal();
  });
});
