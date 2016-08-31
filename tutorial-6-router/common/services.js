/*
* this module contains two services for route resolve demonstration
*/
angular.module('demoServices', [])

    .service('remoteData', function ($timeout) {
        /**
         * mock data request that take 2sec to complete
         * @returns {*}
         */
        this.getData = function () {
            return $timeout(function () {
                return {id: 523354, desc: "data from remote server"}
            }, 3000)

        };
    })

    .service('resourceLoader', function ($q) {
        /**
         * load file using $script
         * @param resourceUrl
         * @returns {promise}
         */
        this.load = function (resourceUrl) {

            var defer = $q.defer();

            $script(resourceUrl, 'resource');

            $script.ready('resource', function () {
                defer.resolve()
            });

            return defer.promise;
        }
    });