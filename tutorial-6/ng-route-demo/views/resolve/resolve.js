angular.module('ngRouteDemoApp')
    // the 'data' resolved in the state configuration
    .controller('ResolveController', function (data) {
        this.remoteData = data;
        this.loadedObject = Util;
    });