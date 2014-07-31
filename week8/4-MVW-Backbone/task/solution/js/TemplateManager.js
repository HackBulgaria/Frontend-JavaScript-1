/* global $, console */

var GitHubApp = GitHubApp || {};

GitHubApp.TemplateManager = {
  _cache: {},
  get: function (url) {
    'use strict';
    var tpl = this._cache[url];
    if (tpl) {
      return $.when(tpl);
    } else {
      return $.get(url)
        .done(function (tpl) {
          this._cache[url] = tpl;
          return tpl;
        }.bind(this))
        .fail(function (e) {
          console.error('The template with url', url, 'cannot be loaded.', e);
        });
    }
  }
};
