angular.module("MyApp", [])
  .directive('multipleEmail', [function () {
      return {
          require: "ngModel",
          link: function (scope, element, attr, ngModel) {
              if (ngModel) {
                  var emailsRegexp = /^([a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*[;；]?)+$/i;
              }
              var customValidator = function (value) {
                  var validity = ngModel.$isEmpty(value) || emailsRegexp.test(value);
                  ngModel.$setValidity("multipleEmail", validity);
                  return validity ? value : undefined;
              };
              ngModel.$formatters.push(customValidator);
              ngModel.$parsers.push(customValidator);
          }
      };
  }])