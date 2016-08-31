angular.module('ngRouteDemoApp')
    .controller('LocationController', function ($scope, $location) {
        $scope.locationInfo = {
            host: $location.host(),
            port: $location.port(),
            path: $location.path(),
            protocol: $location.protocol()
        }
    });