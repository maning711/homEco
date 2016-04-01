/**
 * created by maning
 */
angular.module('homEco').controller('LoginCtrl', function($scope, $http, $location) {
    $scope.login = function() {
        $http({
            url: '/api/login',
            method: 'POST',
            data: {
                username: $scope.userInfo.username,
                password1: $scope.userInfo.password1,
                password2: $scope.userInfo.password2
            }
        }).success(function(user) {
            $scope.$emit('login', user);
            $location.path('/main');
        }).error(function(data) {
            $location.path('/login');
        })
    }
    $scope.goRegist = function() {
        $location.path('/regist');
    }
});