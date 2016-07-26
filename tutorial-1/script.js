// the main (app) module
var app = angular.module('myApp', []);

// add a controller
app.controller('InvoiceCntl', function($scope) {
    $scope.qty = 1;
    $scope.cost = 19.95;
});