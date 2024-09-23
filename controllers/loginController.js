// app.controller('loginController', function($scope) {
//     $scope.message = "Please sign with your email and password.";
//     $scope.isSignedIn = false;

//     $scope.login = function() {
//         if ($scope.loginForm.$valid) {
//             $scope.isSignedIn = true;
//             $scope.message = "Welcome, " + $scope.user.email;
//         }
//     };

//     $scope.signOut = function() {
//         var auth2 = gapi.auth2.getAuthInstance();
//         auth2.signOut().then(function () {
//             $scope.$apply(function() {
//                 $scope.message = "You have been signed out.";
//                 $scope.isSignedIn = false;
//                 $scope.user = {};
//             });
//         });
//     };
// });

angular.module('myApp').controller('LoginController', function($scope, LoginService) {
  $scope.user = {};
  $scope.errorMessage = '';
  $scope.message = "Please sign with your email and password.";

  $scope.login = function() {
    LoginService.login($scope.user).then(function(success) {
      if (success) {
        console.log('Login successful');
        $scope.$parent.currentView = 'dashboard.html';
        console.log('Current view set to dashboard.html');
        $scope.message = "Welcome, " + $scope.user.email;
      } else {
        $scope.errorMessage = 'Invalid credentials';
        console.log('Invalid credentials');
      }
    });
  };
});