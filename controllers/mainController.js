angular.module('myApp').controller('MainController', function($scope, LoginService, DataService) {
  $scope.currentView = 'login';
  $scope.user = {};
  $scope.data = {};
  $scope.errorMessage = '';
  $scope.successMessage = '';
  $scope.validationErrors = [];

  $scope.login = function() {
    LoginService.login($scope.user).then(function(success) {
      if (success) {
        $scope.username = LoginService.getUsername();
        $scope.currentView = 'dashboard';
      } else {
        $scope.errorMessage = 'Invalid credentials';
      }
    });
  };

  $scope.logout = function() {
    LoginService.logout();
    $scope.currentView = 'login';
  };

  $scope.goToForm = function() {
    $scope.currentView = 'dataForm';
  };

  $scope.submitData = function() {
    DataService.submitData($scope.data).then(function(success) {
      if (success) {
        $scope.successMessage = 'Data submitted successfully!';
        $scope.validationErrors = [];
      } else {
        $scope.successMessage = 'Data submission failed!';
      }
    }, function(errors) {
      $scope.validationErrors = errors;
    });
  };
});
