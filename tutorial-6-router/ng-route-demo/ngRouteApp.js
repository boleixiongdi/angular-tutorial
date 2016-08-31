angular.module('ngRouteDemoApp', ['ngRoute', 'demoServices'])
    .config(function ($routeProvider) {

        $routeProvider
            // just a simple route
            .when('/simple', {
                templateUrl: 'views/simple/simple.html'
            })

            // passing route params
            .when('/params/:name/:id', {
                templateUrl: 'views/params/params.html',
                controller: 'ParamsController'
            })

            // attaching custom data to route
            .when('/custom', {
                templateUrl: 'views/custom-data/custom-data.html',
                controller: 'CustomDataController',
                controllerAs: 'dataCtrl',
                user: {level: 'ADMIN', id: 325548}
            })

            // resolve dependencies
            .when('/resolve', {
                templateUrl: 'views/resolve/resolve.html',
                controller: 'ResolveController',
                controllerAs: 'resCtrl',
                resolve: {
                    data: function (remoteData) {
                        return remoteData.getData();
                    },

                    resources: function (resourceLoader) {
                        return resourceLoader.load('views/resolve/Util.js');
                    }
                }
            })

            // the controller will display location info
            .when('/location', {
                templateUrl: 'views/location/location.html',
                controller: 'LocationController'
            })

            // if none of the routs match, use this route
            .otherwise({
                templateUrl: 'views/welcome/welcome.html'
            })
    })

    .run(function ($rootScope) {

        // route change start (the url not changed yet)
        $rootScope.$on('$routeChangeStart', function () {
            console.log('$routeChangeStart fired!')
        });

        // all dependencies resolved, url changed, start to load view
        $rootScope.$on('$routeChangeSuccess', function () {
            console.log('$routeChangeSuccess fired!')
        });

        // the view loaded successfully
        $rootScope.$on('$viewContentLoaded', function () {
            console.log('$viewContentLoaded fired!')
        });

        // the onload function (if defined) is executing
        $rootScope.doSomething = function () {
            console.log('on-load function was called!')
        };


    });