/**
 * created by maning
 */
angular.module('homEco').controller('MainCtrl', function($scope, $http, $location){
    $scope.load = function() {
        $http({
            url: '/api/rtnTotal',
            method: 'POST'
        }).success(function(loginInfo) {
            $scope.loginInfo = loginInfo;
            $location.path('/');
        }).error(function() {
            $location.path('/');
        });
    }  
});