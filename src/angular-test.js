const app = angular.module('app', [uirouter]);
app.config([
  '$locationProvider',
  '$urlRouterProvider',
  '$stateProvider',
  function($locationProvider, $urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/main");
    $stateProvider
    .state('main', {
      template: require('./main/main.html'),
      url: '/main'
    })
    .state('test', {
      template: require('./test/test.html'),
      url: '/test',
    });
  }
]);
