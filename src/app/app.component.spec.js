var angular = require('angular');
require('angular-mocks');
var appComponent = require('./app.component');

describe('appComponent component', function () {
  beforeEach(function () {
    angular
      .module('app', ['app/app.html'])
      .component('app', appComponent);
    angular.mock.module('fountainHello');
  });
  it('should render hello world', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    var h1 = element.find('h1');
    expect(h1.html()).toEqual('Hello World!');
  }));
});
