const app = angular.module('app');
app.controller('TestController', ['$scope', function($scope) {
  $scope.text = 'Hello!';
}]);
