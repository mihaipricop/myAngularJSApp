  angular.module('myApp').service('LoginService', function($q) {
    var username = '';
  
    this.login = function(user) {
      var deferred = $q.defer();
      if (user.email === 'mcp5269@psu.edu' && user.password === 'password1') {
        username = user.email;
        deferred.resolve(true);
      } else {
        deferred.resolve(false);
      }
      return deferred.promise;
    };
  
    this.getUsername = function() {
      return username;
    };
  
    this.logout = function() {
      username = '';
    };
  });