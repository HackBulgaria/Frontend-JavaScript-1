define(["backbone"], function(Backbone) {
  var User = Backbone.Model.extend({
    defaults: {
      name: "",
      age: 0
    }
  });

  return User;
});
