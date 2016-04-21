/**
 * created by maning
 */
angular.module('homEco').controller('MainCtrl', function($scope, $http, $location){
    

    $scope.load = function() {
        $http(
            url: '/api/rtnTotal',
            method: 'POST'
        ).success(function() {
            $location.path('/rtnTotal');
        }).error(function() {
            $location.path('/rtnTotal');
        });
    }
});