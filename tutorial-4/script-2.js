angular.module('MyApp', [])
.controller('ExampleController', ['$scope', function ($scope) {

}])
.directive('even',function(){
    return {
        restrict:"A",
        require:"ngModel",
        link:function(scope,ele,attrs,ngModelController){
            ngModelController.$parsers.push(function(viewValue){
                if(viewValue % 2 === 0){
                    ngModelController.$setValidity('even',true);
                }else{
                    ngModelController.$setValidity('even',false);
                }
                return viewValue;
            });
        }
    }
})
.directive('ensureUnique', ['$http','$timeout','$window',function($http,$timeout,$window) {
    return {
        restrict:"A",
        require: 'ngModel',
        link: function(scope, ele, attrs, ngModelController) {
            scope.$watch(attrs.ngModel, function(n) {
                if (!n) return;
                $timeout.cancel($window.timer);
                $window.timer = $timeout(function(){
                    $http({
                        method: 'get',
                        url: '/api/checkusername/', //根据换成自己的url
                        params:{
                            "username":n
                        }
                    }).success(function(data) {
                        ngModelController.$setValidity('unique', data.isUnique); //这个取决于你返回的，其实就是返回一个是否正确的字段，具体的这块可以自己修改根据自己的项目
                    }).error(function(data) {
                        ngModelController.$setValidity('unique', false);
                    });
                },500);
            });
        }
    };
}]);