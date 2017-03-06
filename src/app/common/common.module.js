var angular = require('angular');
require('./charts/charts.module');

module.exports = angular
  .module('app.common', ['app.common.charts']).name;
