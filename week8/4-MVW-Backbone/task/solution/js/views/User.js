/* global Backbone */

var GitHubApp = GitHubApp || {};

GitHubApp.Views = GitHubApp.Views || {};

GitHubApp.Views.User = Backbone.View.extend({
  render: function () {
    'use strict';
    this.el.html(this.template({ user: this.model.toJSON() }));
    return this;
  }
});
