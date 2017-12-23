import angular from 'angular';
import uirouter from 'angular-ui-router';

const app = angular.module('app', [uirouter]);
app.config([
  '$locationProvider',
  '$urlRouterProvider',
  '$stateProvider',
  function($locationProvider, $urlRouterProvider, $stateProvider) {
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise("/main");
    $stateProvider
    .state('main', {
      template: require('./src/main/main.html'),
      url: '/main'
    })
    .state('test', {
      template: require('./src/test/test.html'),
      url: '/test',
    });
  }
]);
