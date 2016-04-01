/**
 * created by maning
 */
angular.module('homEco').controller('RegistCtrl', function($scope, $http, $location){
    $scope.regist = function() {
        $http({
            url: '/api/regist',
            method: 'POST',
            data: {
                username: $scope.userInfo.username,
                password1: $scope.userInfo.password1,
                password2: $scope.userInfo.password2
            }
        }).success(function(user) {
            $location.path('/login');
        }).error(function(data) {
            $location.path('/regist');
        })
    }
});