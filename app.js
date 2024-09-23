var app = angular.module('myApp', []);

app.config(function($httpProvider) {
    // Enable cross-domain calls
    $httpProvider.defaults.useXDomain = true;
});
