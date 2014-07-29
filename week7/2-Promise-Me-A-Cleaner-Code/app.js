require.config({
  paths: {
    "Q": "bower_components/q/q"
  }
});

require(["Q"], function(Q) {

  function first(callback) {
    setTimeout(callback, 1000);
  }

  function second(callback) {
    setTimeout(callback, 1000);
  }

  function third() {
    console.log("I should do the job after first and second");
  }

  first(function() {
    console.log("called first!");
    second(function() {
      console.log("called second!");
      third();
    });
  });

});
