/**
 * created by maning
 */
angular.module('homEco').controller('RegistCtrl', function($scope, $http, $location){
    $scope.regist = function() {
        $http({
            url: '/api/regist',
            method: 'POST',
            data: {
                userInfo: $scope.userInfo
            }
        }).success(function(user) {
            $location.path('/login');
        }).error(function(data) {
            $location.path('/regist');
        })
    }
});