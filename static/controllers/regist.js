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
        }).then(function(user) {
            $location.path('/login');
        },function(data) {
            $location.path('/regist');
        });
    }
});