/**
 * created by maning
 */
angular.module('homEco', ['ngRoute']).
run(function($window, $rootScope, $http, $location) {
    $rootScope.messg = {
        saveSuccess: false,
        alertDanger: false
    };
    $rootScope.homeAccts = {
        lastMontLevel: '',
        currentMontLevel: '',
        cashAcct: '0'
    };
    $rootScope.close = function (messageName) {
        $rootScope.messg[messageName] = false;
    };
    $http({
        url: '/api/validate',
        method: 'GET'
    }).success(function(user) {
        $rootScope.me = user;
        $location.path('/');
    }).error(function(data) {
        $location.path('/login');
    });
    $rootScope.logout = function () {
        $http({
            url: '/api/logout',
            method: 'GET'
        }).success(function() {
            $rootScope.me = null;
            $location.path('/login');
        });
    };
    $rootScope.$on('login', function(evt, me) {
        $rootScope.me = me;
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