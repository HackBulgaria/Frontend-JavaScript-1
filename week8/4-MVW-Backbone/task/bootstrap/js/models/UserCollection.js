/* global Backbone */

var GitHubApp = GitHubApp || {};

GitHubApp.Models = GitHubApp.Models || {};

GitHubApp.Models.UserCollection = Backbone.Collection.extend({
  model: GitHubApp.Models.User
});

