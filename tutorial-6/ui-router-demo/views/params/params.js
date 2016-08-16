angular.module('uiRouterDemoApp')
    .controller('ParamsController', function ($scope, $stateParams, $state) {
    	console.log($stateParams);
    	console.log($state);
        $scope.parameters = $stateParams;
        $scope.state = $state;
    });