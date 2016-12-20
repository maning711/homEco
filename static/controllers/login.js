/**
 * created by maning
 */
angular.module('homEco').controller('LoginCtrl', function($rootScope, $scope, $http, $location) {
    $rootScope.loginFlag = 0;
    $scope.login = function() {
        $http({
            url: '/api/login',
            method: 'POST',
            data: {
                userInfo: $scope.userInfo
            }
        }).then(function(user) {
            if (user.status == 200 && user.data.status != 'NG') {
                $rootScope.messg.loginSuccess = true;
                $scope.$emit('login', user);
                $location.path('/');
            } else if (user.data.status == 'NG') {
                $rootScope.messg.loginFail = true;
                $rootScope.loginFailMessage = user.data.message;
            }
        },function(data) {
            $location.path('/login');
        })
    }
    $scope.goRegist = function() {
        $location.path('/regist');
    }
});