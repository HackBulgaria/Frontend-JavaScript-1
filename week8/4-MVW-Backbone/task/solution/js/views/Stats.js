/* global Backbone, Chart, $ */

var GitHubApp = GitHubApp || {};

GitHubApp.Views = GitHubApp.Views || {};

GitHubApp.Views.Stats = Backbone.View.extend({
  drawVisualization: function () {
    'use strict';
    var labels = this.model.map(function (user) {
      return user.get('login');
    });
    var values = this.model.map(function (user) {
      return user.get('followers');
    });
    var barChartData = {
      labels : labels,
      datasets: [{
        fillColor      : 'rgba(220,220,220,0.5)',
        strokeColor    : 'rgba(220,220,220,0.8)',
        highlightFill  : 'rgba(220,220,220,0.75)',
        highlightStroke: 'rgba(220,220,220,1)',
        data           : values
      }]
    };
    var ctx = $('#followers-chart')[0].getContext('2d');
    new Chart(ctx).Bar(barChartData, {
      responsive : true
    });
  },
  render: function () {
    'use strict';
    var canvas = $('<canvas width="500" height="400"' +
        'id="followers-chart"></canvas>');
    this.el.empty();
    this.el.append(canvas);
    this.drawVisualization();
    return this;
  }
});
