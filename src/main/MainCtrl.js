const app = angular.module('app');
app.controller('MainCtrl', ['$scope', ($scope) => {
  $scope.greetingText = "Greetings!";
}]);
