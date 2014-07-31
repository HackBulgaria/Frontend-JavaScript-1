/* global Backbone, $, document */

var GitHubApp = GitHubApp || {};

GitHubApp.Views = GitHubApp.Views || {};

GitHubApp.Views.Main = Backbone.View.extend({
  el: $(document.body),

  initialize: function () {
    'use strict';
    $('#spinner').hide();
    Backbone.on('load.start', function () {
      $('#spinner').show();
    });
    Backbone.on('load.stop', function () {
      $('#spinner').hide();
    });
  },

  render: function () {
    'use strict';
    return this;
  }
});

new GitHubApp.Views.Main();

