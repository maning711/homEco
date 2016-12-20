/**
 * created by maning
 */
angular.module('homEco').controller('MainCtrl', function($scope, $http, $location){
    $scope.load = function() {
        $http({
            url: '/api/rtnTotal',
            method: 'POST'
        }).then(function(loginInfo) {
            $scope.loginInfo = loginInfo;
            $location.path('/');
        },function() {
            $location.path('/');
        });
    }  
});