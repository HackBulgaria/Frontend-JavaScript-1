/* global Backbone */

var GitHubApp = GitHubApp || GitHubApp;

GitHubApp.Models = GitHubApp.Models || {};

GitHubApp.Models.User = Backbone.Model.extend({
  url: function () {
    'use strict';
    return 'https://api.github.com/users/' + this.get('login')
      + '?client_id=8f3b8d572129632cf422&client_secret=f0669941c23378c30fb89f6c37be9075a5628bba';
  }
});

