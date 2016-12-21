/**
 * created by maning
 */
angular.module('homEco').controller('MainCtrl', function($rootScope, $scope, $http, $location){
    $scope.load = function() {
        $http({
            url: '/api/rtnTotal',
            method: 'POST'
        }).then(function(loginInfo) {
            if (loginInfo.data.status == 'NG') {
                alert('登录过期，请重新登录');
                $rootScope.logout();
            } else {
                $scope.loginInfo = loginInfo.data;
                $location.path('/');
            }
        },function() {
            $location.path('/');
        });
    }  
});