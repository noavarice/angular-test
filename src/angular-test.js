const app = angular.module('app', ['ui.router']);
app.config([
  '$locationProvider',
  '$urlRouterProvider',
  '$stateProvider',
  function($locationProvider, $urlRouterProvider, $stateProvider) {
    $locationProvider.hashPrefix('');
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
