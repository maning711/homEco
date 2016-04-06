/**
 * created by maning
 */
angular.module('homEco').controller('LoginCtrl', function($scope, $http, $location) {
    $scope.login = function() {
        $http({
            url: '/api/login',
            method: 'POST',
            data: {
                userInfo: $scope.userInfo
            }
        }).success(function(user) {
            $scope.$emit('login', user);
            $location.path('/');
        }).error(function(data) {
            $location.path('/login');
        })
    }
    $scope.goRegist = function() {
        $location.path('/regist');
    }
});