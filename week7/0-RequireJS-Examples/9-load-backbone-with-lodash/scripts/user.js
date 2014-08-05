define(["backbone"], function(Backbone) {
  var User = Backbone.Model.extend({
    defaults: {
      age: 0
    }
  });

  return User;
});
