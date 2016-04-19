/**
 * created by maning
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
    }).success(function(loginInfo) {
        $rootScope.loginInfo = loginInfo;
        $location.path('/');
    }).error(function(data) {
        $location.path('/login');
    });
    $rootScope.logout = function () {
        $http({
            url: '/api/logout',
            method: 'GET'
        }).success(function() {
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
        }).success(function() {
            $location.path('/daliyExp');
        });
    };
    $rootScope.incomes = function () {
        $http({
            url: '/api/incomes',
            method: 'GET'
        }).success(function() {
            $location.path('/incomes');
        });
    };
    $rootScope.reports = function () {
        $http({
            url: '/api/reports',
            method: 'GET'
        }).success(function() {
            $location.path('/reports');
        });
    };
});