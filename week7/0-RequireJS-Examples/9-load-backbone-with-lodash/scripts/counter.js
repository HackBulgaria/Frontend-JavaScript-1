define(["backbone", "jquery"], function(Backbone, $) {
  var Counter = Backbone.View.extend({
    events: {
      "click .incrementButton": "increment",
      "click .decrementButton": "decrement"
    },
    initialize: function() {

    },
    render: function() {
      var parsedTemplate = $("#counterTemplate").html()
      this.$el.html(parsedTemplate);
    },
    increment: function() {
      this.model.set("age", this.model.get("age") + 1);
    },
    decrement: function() {
      this.model.set("age", this.model.get("age") - 1);
    }
  });

  return Counter;
});
