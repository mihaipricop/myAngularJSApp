app.service('dataService', function($http) {
    this.getData = function() {
        return $http.get('api/data.json').then(function(response) {
            return response.data.exampleData;
        });
    };
});