angular.module('ngRouteDemoApp')
    .controller('ParamsController', function ($scope, $routeParams, $route) {
        $scope.routeParameters = $routeParams;
        $scope.currentRoute = $route.current;
    });