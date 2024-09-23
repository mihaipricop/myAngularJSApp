app.controller('mainController', function($scope, dataService) {
    $scope.message = "Hello, AngularJS!";
    
    // Example usage of a service
    dataService.getData().then(function(data) {
        $scope.data = data;
    });
});