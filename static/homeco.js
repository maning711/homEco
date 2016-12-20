/**
 * created by maning
 * angualrjs's enter
 */
angular.module('homEco', ['ngRoute']).
run(function($window, $rootScope, $http, $location) {
    $rootScope.messg = {
        saveSuccess: false,
        alertDanger: false
    };
    $rootScope.close = function (messageName) {
        $rootScope.messg[messageName] = false;
    };
    $http({
        url: '/api/validate',
        method: 'GET'
    }).then(function(checkInfo) {
        if (checkInfo.data.status != 'NG') {
            $rootScope.loginInfo = checkInfo.data;
            $location.path('/');
        } else {
            alert(checkInfo.data.message);
            $location.path('/login');
        }
    },function(data) {
        $location.path('/login');
    });
    $rootScope.logout = function () {
        $http({
            url: '/api/logout',
            method: 'GET'
        }).then(function() {
            $rootScope.loginInfo = null;
            $rootScope.messg.saveSuccess = false;
            $rootScope.messg.alertDanger = false;
            $location.path('/login');
        });
    };
    $rootScope.$on('login', function(evt, loginInfo) {
        $rootScope.loginInfo = loginInfo;
    });
    $rootScope.daliyExp = function () {
        $http({
            url: '/api/daliyExp',
            method: 'GET'
        }).then(function() {
            $location.path('/daliyExp');
        });
    };
    $rootScope.incomes = function () {
        $http({
            url: '/api/incomes',
            method: 'GET'
        }).then(function() {
            $location.path('/incomes');
        });
    };
    $rootScope.reports = function () {
        $http({
            url: '/api/reports',
            method: 'GET'
        }).then(function() {
            $location.path('/reports');
        });
    };
    $rootScope.rtnTotal = function () {
        $location.path('/rtnTotal');
    };
});