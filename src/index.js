var angular = require('angular');
require('angular-ui-router');
require('./app/common/common.module');

var appComponent = require('./app/app.component');
var routesConfig = require('./routes');
require('./index.css');

module.exports = angular
  .module('app', ['app.common', 'ui.router'])
  .config(routesConfig)
  .component('app', appComponent)
  .name;
