define(["backbone", "jquery"], function(Backbone, $) {
  var CounterDisplay = Backbone.View.extend({
    initialize: function() {
      this.model.on("change:age", this.render, this);
    },
    render: function() {
      var parsedHtml = $("#counterViewTemplate").html();
      this.$el.html(parsedHtml);
      this.$el
            .find(".counterDisplay")
            .val(this.model.get("age"));
    }
  });

  return CounterDisplay;
});
