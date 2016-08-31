angular.module('ngRouteDemoApp')
    .controller('CustomDataController', function ($route) {
        this.userData = $route.current.user;
        this.routeData = $route.routes;
    });
