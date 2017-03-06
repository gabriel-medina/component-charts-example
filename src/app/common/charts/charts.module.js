var angular = require('angular');

var cchPieChartComponent = require('./cch-pie-chart/cch-pie-chart.component');
var cchStackedBarChartComponent = require('./cch-stacked-bar-chart/cch-stacked-bar-chart.component');

module.exports = angular
  .module('app.common.charts', [])
  .component('cchPieChart', cchPieChartComponent)
  .component('cchStackedBarChart', cchStackedBarChartComponent)
  .name;
