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

    // get child path
    var pathUrl = $location.path();
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
        } else if (pathUrl != '/login') {
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
        checkLoginState();
        $http({
            url: '/api/daliyExp',
            method: 'GET'
        }).then(function() {
            $location.path('/daliyExp');
        });
    };
    $rootScope.incomes = function () {
        checkLoginState();
        $http({
            url: '/api/incomes',
            method: 'GET'
        }).then(function() {
            $location.path('/incomes');
        });
    };
    $rootScope.reports = function () {
        checkLoginState();
        $http({
            url: '/api/reports',
            method: 'GET'
        }).then(function() {
            $location.path('/reports');
        });
    };
    $rootScope.rtnTotal = function () {
        checkLoginState();
        $location.path('/rtnTotal');
    };

    var checkLoginState = function () {
        if (!$rootScope.loginInfo) {
            alert('登录过期，请重新登录');
            $rootScope.logout()
        }
    }
});