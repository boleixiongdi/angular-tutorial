angular.module('uiRouterDemoApp')
    .controller('CustomController', function ($state) {
    	console.log($state);
    	console.log($state.current.data);
        this.currentData = $state.current.data;
        this.state = $state;
    });
