var mainApp = angular.module("mainApp", []);
         
mainApp.config(function($provide) {
   $provide.provider('MathService', function() {
      this.$get = function() {
         var factory = {};
         
         factory.multiply = function(a, b) {
            return a * b;
         }
         return factory;
      };
   });
});

mainApp.value("defaultInput", 5);

mainApp.service('CalcService', function(MathService){
   this.square = function(a) {
      return MathService.multiply(a,a);
   }
});

mainApp.controller('CalcController', function($scope, CalcService, defaultInput) {
   $scope.number = defaultInput;
   $scope.result = CalcService.square($scope.number);

   $scope.square = function() {
      $scope.result = CalcService.square($scope.number);
   }
});