angular.module('myApp').service('DataService', function($q) {
    this.submitData = function(data) {
      var deferred = $q.defer();
      var validationErrors = [];
  
      // Basic validation
      if (!data.name || data.name.trim() === '') {
        validationErrors.push('Name is required.');
      }
      if (!data.email || !validateEmail(data.email)) {
        validationErrors.push('Valid email is required.');
      }
      if (!data.phone || !validatePhone(data.phone)) {
        validationErrors.push('Valid phone number is required.');
      }
      if (!data.address || data.address.trim() === '') {
        validationErrors.push('Address is required.');
      }
      if (!data.course || data.course.trim() === '') {
        validationErrors.push('Course is required.');
      }
      if (!data.semester || data.semester.trim() === '') {
        validationErrors.push('Semester is required.');
      }
      if (!data.year || !validateYear(data.year)) {
        validationErrors.push('Valid year is required.');
      }
  
      if (validationErrors.length > 0) {
        deferred.reject(validationErrors);
      } else {
        // Perform data submission logic here
        deferred.resolve(true);
      }
  
      return deferred.promise;
    };
  
    // Helper function to validate email
    function validateEmail(email) {
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  
    // Helper function to validate phone number
    function validatePhone(phone) {
      var re = /^\d{10}$/;
      return re.test(phone);
    }
  
    // Helper function to validate year
    function validateYear(year) {
      var re = /^\d{4}$/;
      return re.test(year);
    }
  });