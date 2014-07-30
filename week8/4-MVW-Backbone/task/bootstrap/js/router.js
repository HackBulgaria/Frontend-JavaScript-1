/* global Backbone, $ */

var GitHubApp = GitHubApp || {};

var GitHubAppRouter = Backbone.Router.extend({
  routes: {
    // Add the appropriate routes
  },
  initialize: function () {
    'use strict';
    this.users = new GitHubApp.Models.UserCollection();
  },
  home: function () {
    'use strict';
    // Invoke the FrontCtrl.setView and FrontCtrl.render
    // with appropriate parameters
  },
  user: function (login) {
    'use strict';
    var match = this.users.where({ login: login }),
        user;
    if (!match || !match.length) {
      user = new GitHubApp.Models.User({
        login: login
      });
      this.users.add(user);
    } else {
      user = match[0];
    }
    user.fetch()
    .done(function () {
      // Invoke the FrontCtrl.setView and FrontCtrl.render
      // with appropriate parameters
    });
  },
  stats: function () {
    'use strict';
    GitHubApp.Controllers.FrontCtrl.setView({
      partial: 'partials/stats.tpl',
      view   : GitHubApp.Views.Stats,
      model  : this.users
    });
    GitHubApp.Controllers.FrontCtrl.render();
  }
});

GitHubApp.router = new GitHubAppRouter();

Backbone.history.start();
