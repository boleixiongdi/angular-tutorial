var myModule = angular.module("MyModule", []);
 myModule.controller('MyCtrl', ['$scope', function($scope){
     $scope.pureWater="纯净水";
 }])
 myModule.directive("drink", function() {
     return {
         restrict:'AE',
         scope:{
             water:'@'
         },
         template:"<div>{{water}}</div>"
     }
 });