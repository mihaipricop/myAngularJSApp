app.controller('loginController', function($scope) {
    $scope.message = "Please sign in with Google or use your email and password.";
    $scope.isSignedIn = false;

    $scope.login = function() {
        if ($scope.loginForm.$valid) {
            $scope.isSignedIn = true;
            $scope.message = "Welcome, " + $scope.user.email;
        }
    };

    $scope.signOut = function() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            $scope.$apply(function() {
                $scope.message = "You have been signed out.";
                $scope.isSignedIn = false;
                $scope.user = {};
            });
        });
    };
});
